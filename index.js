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
  let {username, email, phone, password} = req.body;
  id = `'${username.slice(2)}'`
  username = `'${username}'`
  email = `'${email}'`
  phone = `'${phone}'`
  password = `'${password}'`
  gender = 'male'
  const result = await client.query(`INSERT INTO users(id,name, email,phonenumber, gender, password) values(${id}, ${username}, ${email} , ${phone}, ${gender}, ${password})`)
  res.send(result);
  // get details from req.body
  // perform validation on every field
  // if validation fails --> send error msg
  // if validation pass check if user already exists
  // if already exists send msg already registered
  // if not then register the user in db
  // send success msg
})

app.listen(8080);
