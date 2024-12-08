const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from NODE ");
});
app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://admin:Password@backenddb.w4o6e.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connect to the database!");
    app.listen(3000, () => {
      console.log("Server is running");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
