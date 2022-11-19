import users from "../models/users.js";
import jwt from "jsonwebtoken";
import config from "../config.js";
import role from "../models/role.js";

const { sign, verify } = jwt;
export const signUp = async (req, res) => {
  try {
    const { userName, email, password, roles } = req.body;
    const newUsers = new users({
      userName,
      email,
      password: await users.encryptPassword(password),
      roles,
    });
    if (roles) {
      const fountRoles = await role.find({ name: { $in: roles } });
      newUsers.roles = fountRoles.map((role) => role._id);
    } else {
      const userRoles = await role.findOne({ name: "user" });
      newUsers.roles = [userRoles._id];
    }
    const saveUser = await newUsers.save();
    const token = jwt.sign({ id: saveUser._id }, config.secret, {
      expiresIn: 86400, //24 horas
    });
    console.log(token);
    res.status(200).json(newUsers);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const signin = async (req, res) => {
  const emailFonut = await users
    .findOne({ email: req.body.email })
    .populate("roles");

  if (!emailFonut) return res.status(404).json({ message: "user not fount " });

  const matchPassword = await users.comparePassword(
    req.body.password,
    emailFonut.password
  );
  if (!matchPassword)
    return res.status(401).json({ token: null, message: "password incorect" });
  const token = jwt.sign({ id: emailFonut._id }, config.secret, {
    expiresIn: 86400,
  });
  res.json(token);
};
