import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("conety database"))
  .catch((error) => console.log(error));
