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
    const menu = database.collection("menu");

    //Get Menu
    app.get("/menu", async (req, res) => {
      const skip = parseFloat(req.query.skip);
      const limit = parseFloat(req.query.limit);

      const result = await menu.find({}).skip(skip).limit(limit).toArray();

      res.send(result);
    });

    //Get Menu On Category
    app.get("/menu/c", async (req, res) => {
      const category = req.query.category;

      const result = await menu.find({ category: category }).toArray();

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
