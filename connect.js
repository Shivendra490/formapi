var { Client } = require("pg");

const client = new Client({
    connectionString:
      "postgres://qipnurrwvizohh:fb294667d3a334f3edd4ae315de4cc8cba35b56eba5a3e0b07a804a75f1c587a@ec2-44-196-223-128.compute-1.amazonaws.com:5432/d2gu35vrnttkk5",
    ssl: {
      rejectUnauthorized: false,
    },
  });

  client.connect()

  module.exports = client