const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const mongoose = require("./db");

const allowedOrigins = [process.env.ALLOWED_URL_CORS];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

mongoose.connection.once("open", function () {});

app.use(cors(corsOptions));

const port = process.env.BACKEND_PORT;

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

app.listen(port, () => {
  console.log(`Listening http://localhost:${port}/`);
});
