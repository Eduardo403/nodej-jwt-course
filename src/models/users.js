import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
const users = new Schema(
  {
    userName: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    roles: [
      {
        ref: "role",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
users.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
users.statics.comparePassword = async (password, reicivePassword) => {
  return await bcrypt.compare(password, reicivePassword);
};
export default model("users", users);
