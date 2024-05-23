const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

//config
require("dotenv").config();
const port = process.env.PORT || 8080;
const app = express();

//middleware
app.use(cors());
app.use(express.json());

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
    const database = client.db("usersDB");
    const menuCollection = database.collection("menu");
    const reviewCollection = database.collection("reviews");
    const userCollection = database.collection("users");
    const cartCollection = database.collection("carts");

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
