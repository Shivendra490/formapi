var cors = require("cors");
const client = require('./connect');

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// smaple route
app.get("/", async (req, res) => {
  const results = await client.query("SELECT * FROM users");
  console.log(results);
  res.send(results.rows);
});

app.get("/login", (req,res)=>{
  // get user from req.body
  // do validations
  // check if username and password in db
  // if yes --> authenticate user
  //    no --> send error msg  --> res.status(403).send('unauthorized!')
 
})

app.post("/register", (req,res)=>{
  // get details from req.body
  // perform validation on every field
  // if validation fails --> send error msg
  // if validation pass check if user already exists
  // if already exists send msg already registered
  // if not then register the user in db
  // send success msg
})

app.listen(8080);
