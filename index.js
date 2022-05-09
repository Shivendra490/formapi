const { MongoClient } = require("mongodb");

var cors = require("cors");

const express = require("express");
const bodyParser=require('body-parser')

const app = express();

app.use(cors());


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// const uri = `mongodb+srv://root:root1983@userdb.ekgrv.mongodb.net/userDb?retryWrites=true&w=majority`;
// const uri=`mongodb+srv://registration:root1983@registrationcluster.ekgrv.mongodb.net/registrationDb?retryWrites=true&w=majority`
const uri="mongodb+srv://root:root1983@registrationcluster.ekgrv.mongodb.net/registrationDb?retryWrites=true&w=majority"



const client = new MongoClient(uri);

// Connect to the MongoDB cluster
client.connect();

// Make the appropriate DB calls

app.get("/", async (req, res) => {
  console.log(client,'hello')
  const a=await client.db().collection("registeredUsers").findOne()
  res.send(a);
});

app.post("/reg", async (req, res) => {
  await client
    .db()
    .collection("registeredUsers")
    .insertOne(req.body);

  res.status(200).send({ status: "success" });
});

const middle=(req,res,next)=>{console.log('hi',req.body)
next()}

// app.post("/reg",middle, async (req, res) => {
//   // await client.db('userDb').collection('users').insertOne({"username":"pilu","email":"pilu@gmail.com","phone":"1234567890","password":"1234"})

//   // console.log(req, req.body);
//   res.status(200).send({ status: "success" });
// });

async function main() {
  console.log('server started')
}

main().catch(console.error);

app.listen(8080);
