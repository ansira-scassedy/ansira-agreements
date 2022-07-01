const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

let database = process.env.database;

app.get("/tokens", async (req, res) => {
  const params = {
    TableName: database,

    Key: {
      id: "1a0c36e7-af9f-422a-a484-ceae7297f6c6",
    },
  };

  try {
    const data = await docClient.get(params).promise();
    return res.json({ data: data });
  } catch (err) {
    return res.json({ error: err });
  }
});

app.get("/tokens/:id", async (req, res) => {
  const params = {
    TableName: database,

    Key: {
      id: req.params.id,
    },
  };

  try {
    const data = await docClient.get(params).promise();

    return res.json({ data: data });
  } catch (err) {
    return res.json({ error: err });
  }
});

app.post("/tokens", function (req, res) {

  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

app.put("/tokens/*", function (req, res) {

  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.delete("/tokens/*", function (req, res) {
  res.json({ success: "delete call succeed!", url: req.url });
});

app.listen(3000, function () {
  console.log("App started");
});

module.exports = app;
