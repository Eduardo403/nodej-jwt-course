import { Schema, model } from "mongoose";

const roles = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);
export default model("role", roles);
