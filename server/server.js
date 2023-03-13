const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const PORT = 8888;

const mongoDB = "mongodb://127.0.0.1:27017";

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err))
  .then(() => {
    app.listen(PORT, function () {
      console.log("Server is running on Port: " + PORT);
    });
  });
