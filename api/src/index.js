"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse application/x-www-form-urlencoded
// parse application/json
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, RemoteId, X-Playground"
  );
  next();
});

// Routes
app.use(require("./router/movement")(express.Router()));

// Server Initialisation
app.listen(7999, () => {
  console.log(`Example app listening on port 7999`);
});
