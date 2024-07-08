const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config()

const ProductModel = require('./models/ProductModel')

const productRoutes = require('./routes/productRoutes')

const productController = require('./controllers/productController')

const ProductSchema = require('./models/ProductModel')

const userRoutes = require('./routes/userRoutes')

const userController = require('./controllers/userController')

const UserModel = require('./models/UserModel')

const UserSchema = require('./models/UserModel')

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log("Db connection Failed", err);
  });
app.use("/api/products", productRoutes);

app.use("/api/users", userRoutes);
// ProductSchema
app.listen(8086, () => {
  console.log("Server sarted at port 8086");
});
