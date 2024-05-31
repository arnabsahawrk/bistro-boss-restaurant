const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
var jwt = require("jsonwebtoken");

//config
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const port = process.env.PORT || 8080;
const app = express();

//middleware
app.use(cors());
app.use(express.json());

// Custom middleware
const verifyToken = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res
      .status(401)
      .send({ error: true, message: "unauthorized access" });
  }
  //split the correct token
  const token = authorization.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .send({ error: true, message: "unauthorized access" });
    }
    req.decoded = decoded;
    next();
  });
};
//Database Authenticate
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2p5zaxk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//Send and Get data from sever to database
async function run() {
  try {
    //all collection
    const database = client.db("usersDB");
    const menuCollection = database.collection("menu");
    const reviewCollection = database.collection("reviews");
    const userCollection = database.collection("users");
    const cartCollection = database.collection("carts");
    const paymentCollection = database.collection("payments");

    //JWT
    app.post("/jwt", (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1d",
      });

      res.send({ token });
    });

    //verify admin
    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded.email;
      const result = await userCollection.findOne({ email: email });
      if (!result || result?.role !== "Admin")
        return res
          .status(403)
          .send({ error: true, message: "forbidden access" });

      next();
    };

    //check admin
    app.get("/users/admin/:email", verifyToken, async (req, res) => {
      const email = req.params.email;

      if (req.decoded.email !== email) {
        res.send({ admin: false });
      }

      const user = await userCollection.findOne({ email: email });
      res.send({ admin: user?.role === "Admin" });
    });

    //get all users data only admin can get this
    app.get("/allUses/admin", verifyToken, verifyAdmin, async (req, res) => {
      const result = await userCollection.find({}).toArray();

      return res.send(result);
    });

    //Get Menu
    app.get("/menu", async (req, res) => {
      const skip = parseFloat(req.query.skip);
      const limit = parseFloat(req.query.limit);

      const result = await menuCollection
        .find({})
        .skip(skip)
        .limit(limit)
        .toArray();

      res.send(result);
    });

    //Get Menu On Category
    app.get("/menu/c", async (req, res) => {
      const category = req.query.category;

      const result = await menuCollection
        .find({ category: category })
        .toArray();

      res.send(result);
    });

    //Get Reviews
    app.get("/reviews", async (req, res) => {
      const result = await reviewCollection.find({}).toArray();

      res.send(result);
    });

    //Put User Data
    app.put("/users", async (req, res) => {
      const user = req.body;
      const query = { email: user?.email };
      //Is The User Already Exist In DB
      const isExist = await userCollection.findOne(query);
      if (isExist) {
        //If Existing User Log In Again
        return res.send({ message: "User Already Exist" });
      }
      //Save User For the first time
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          ...user,
          openedAccount: new Date().toLocaleString(),
        },
      };
      const result = await userCollection.updateOne(query, updateDoc, options);
      res.send(result);
    });

    //Post Cart
    app.post("/carts", async (req, res) => {
      const cartData = req.body;
      const result = await cartCollection.insertOne(cartData);
      res.send(result);
    });

    //Get Cart Data
    app.get("/carts", verifyToken, async (req, res) => {
      const email = req.query.email;
      const result = await cartCollection
        .find({
          userEmail: email,
        })
        .toArray();
      res.send(result);
    });

    //Delete Cart Data
    app.delete("/carts", async (req, res) => {
      const id = req.query.id;
      const query = { _id: new ObjectId(id) };

      const result = await cartCollection.deleteOne(query);

      res.send(result);
    });

    ///payment intent
    app.post("/create-payment-intent", async (req, res) => {
      const { price } = req.body;
      const amount = Math.round(price * 100);

      const { client_secret } = await stripe.paymentIntents.create({
        amount,
        currency: "inr",
        payment_method_types: ["card"],
      });

      res.send({
        clientSecret: client_secret,
      });
    });

    //payment result saving
    app.post("/payments", verifyToken, async (req, res) => {
      const payment = req.body;

      const menuItemIds = payment.menuItemIds;
      const menuItemObjectIds = menuItemIds.map(
        (singleItem) => new ObjectId(singleItem)
      );
      payment.menuItemIds = menuItemObjectIds;

      const paymentResult = await paymentCollection.insertOne(payment);

      //delete the payment items from carts
      const query = {
        _id: {
          $in: payment.cartIds.map((id) => new ObjectId(id)),
        },
      };

      const deleteResult = await cartCollection.deleteMany(query);

      res.send({ paymentMessage: paymentResult, deleteMessage: deleteResult });
    });

    //payment history
    app.get("/payment/:email", verifyToken, async (req, res) => {
      const email = req.params.email;

      if (req.decoded.email !== email) {
        res.status(403).send({ message: "forbidden access" });
      }

      const result = await paymentCollection
        .find({ userEmail: email })
        .toArray();

      res.send(result);
    });

    //admin stats
    app.get("/admin/stats", verifyToken, verifyAdmin, async (req, res) => {
      const customers = await userCollection.estimatedDocumentCount();
      const products = await menuCollection.estimatedDocumentCount();
      const orders = await paymentCollection.estimatedDocumentCount();

      //this a fakira way to get the revenue
      // const payments = await paymentCollection.find({}).toArray();
      // const revenue = payments.reduce(
      //   (total, payment) => total + payment.price,
      //   0
      // );

      //aggregate way
      const result = await paymentCollection
        .aggregate([
          {
            $group: {
              _id: null,
              revenue: { $sum: "$price" },
            },
          },
        ])
        .toArray();

      const revenue = result.length > 0 ? result[0].revenue : 0;

      res.send({ customers, products, orders, revenue });
    });

    //order stats
    app.get("/admin/orders-stats", async (req, res) => {
      const result = await paymentCollection
        .aggregate([
          {
            $unwind: "$menuItemIds",
          },
          {
            $lookup: {
              from: "menu",
              localField: "menuItemIds",
              foreignField: "_id",
              as: "menuItems",
            },
          },
          {
            $unwind: "$menuItems",
          },
          {
            $group: {
              _id: "$menuItems.category",
              quantity: { $sum: 1 },
              revenue: { $sum: "$menuItems.price" },
            },
          },
          {
            $project: {
              _id: 0,
              category: "$_id",
              quantity: "$quantity",
              revenue: "$revenue",
            },
          },
        ])
        .toArray();

      res.send(result);
    });

    //-----------------------------------
  } catch (err) {
    console.log("Error from database:", err);
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send(`Server is running on ${port}`);
});

app.listen(port, () => {
  console.log(`Server connected on ${port}`);
});
