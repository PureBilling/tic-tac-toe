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

const initialGrid = { A: false, B: false, C: false, D: false, E: 'circle', F: false, G: false, H: false, I: false }
app.set('initialGrid', initialGrid);
app.set('grid', initialGrid);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, RemoteId, X-Playground"
  );
  next();
});

// Routes
app.use(require("./movement")(express.Router()));
app.use(require("./restart")(express.Router()));

// Server Initialisation
app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
