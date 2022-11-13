import { model, Schema } from "mongoose";

const productsSchema = new Schema(
  {
    name: String,
    category: String,
    preci: Number,
    imgURl: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("products", productsSchema);
