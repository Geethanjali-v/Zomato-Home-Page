const express = require("express");
const mongo =  require("mongodb");
const MongoClient = mongo.MongoClient;
const app = express();
const PORT = 4000;
const MONGO_URL = "mongodb://localhost:27017";
let db;
app.use(express)
MongoClient.connect(MONGO_URL, (err, client) => {
  console.log("Mongo is connected");
  if (err) console.log("Error while connecting");
  db = client.db('edureka');
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});