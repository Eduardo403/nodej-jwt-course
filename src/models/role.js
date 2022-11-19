import { Schema, model } from "mongoose";

const role = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);
export default model("role", role);
