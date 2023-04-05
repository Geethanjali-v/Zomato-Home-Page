const express = require("express");
const mongo =  require("mongodb");
const MongoClient = mongo.MongoClient;
const app = express();
const PORT = 4002;
const MONGO_URL = "mongodb://127.0.0.1:27017";
let db;

//REST API endpoints
app.get("/", function(req,res) {
res.send("Hello Everyone");
});

//get locations

app.get("/locations", function (req, res) {
db.collection("locations").find().toArray((err,result) => {
if(err) throw err;
res.send(result);
})
});

//get mealType
app.get("/quickSearch",function(req, res) {
db.collection("mealType").find().toArray((err, result) => {
if(err) throw err;
res.send(result);
});
});

//get list of restaurant
app.get("/restaurants", function (req,res) {
  let query ={};
let stateId = Number(req.query.stateId);
let mealId = Number(req.query.mealId);
// console.log(stateId);
if(stateId){
query = {state_id: stateId};
}else if(mealId){
  query = {"mealTypes.mealtype_id": mealId};
}
  db.collection("zomato").find(query).toArray((err,result) => {
  if(err) throw err;
  res.send(result);
  });
  });

  //filter
app.get("/filter/:mealId", function (req, res){
  let query = {};
    let mealId = Number(req.params.mealId);
    let cuisineId = Number(req.params.cuisineId);
    if(cuisineId){
      query = {
        "mealTypes.mealtype_id": mealId,
        "cuisines.cuisine_id": cuisineId,
      };
    }
  db.collection("zomato").find(query).toArray((err,result) => {
  if(err) throw err;
  res.send(result);
  });
});

// MongoDb connection
MongoClient.connect(MONGO_URL, (err, client) => {
  console.log("Mongo is connected");
  if (err) console.log("Error while connecting");
  db = client.db('edureka');
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});