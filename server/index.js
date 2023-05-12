const express = require("express");
const app = express();
const mongoose = require("./db");
const configs = require("./configs");
const { setCorsOptions } = require("./utils");

mongoose.connection.once("open", function () {});

app.use(setCorsOptions());

const port = configs.backendPort;

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

app.listen(port, () => {
  console.log(`Listening http://localhost:${port}/`);
});
