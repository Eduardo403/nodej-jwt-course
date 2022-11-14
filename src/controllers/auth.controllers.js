import users from "../models/users.js";
import jwt from "jsonwebtoken";
import config from "../config.js";
import role from "../models/role.js";
const roles = role;
const { sign, verify } = jwt;
export const signUp = async (req, res) => {
  const { userName, email, password, role } = req.body;
  const newUsers = new users({
    userName,
    email,
    password: await users.encryptPassword(password),
  });
  const saveUser = await newUsers.save();
  const token = jwt.sign({ id: saveUser._id }, config.secret, {
    expiresIn: 86400, //24 horas
  });
  if (roles) {
    const fountRoles = await roles.find({ name: { $in: roles } });
    newUsers.roles = fountRoles.map((role) => role._id);
  } else {
    const role = await roles.find({ name: "user" });
    newUsers.roles = [role._id];
  }
  res.status(200).json(token);
};
export const signin = async (req, res) => {
  res.json("signin");
};
