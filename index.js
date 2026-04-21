const startApolloServer = require("./app");

const mongoose = require("mongoose");
require("dotenv").config();
const { v1: uuid } = require("uuid");

console.log("Conntecting to", process.env.MONGODB_URI);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("failed to connect to MongoDB", error.message);
  });

startApolloServer();
