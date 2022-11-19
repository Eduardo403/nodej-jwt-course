import config from "../config.js";
import jwt from "jsonwebtoken";
import users from "../models/users.js";
import role from "../models/role.js";
const { sign, verify } = jwt;
export const verifiToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) return res.status(401).json({ message: "not token provided " });

    const decoded = jwt.verify(token, config.secret);
    req.userId = decoded.id;
    const user = await users.findById(req.userId, { password: 0 });
    if (!user) return req.status(404).json({ message: "user not fount" });
    res.json(user);
    next();
  } catch (error) {
    res.status(400).json(error);
  }
};

export const isModeretor = async (req, res, next) => {
  try {
    const user = await users.findById(req.userId);
    const userRoles = await role.find({ _id: { $in: user.roles } });
    for (let i = 0; i < userRoles.length; i++) {
      if (userRoles[i] === "moderator") {
        next();
        return;
      } else {
        res.status(403).json({ message: "Requer privileges moderator" });
      }
    }
  } catch (error) {
    res.status(401).json(error);
  }
};
export const isAdmin = async (req, res, next) => {
  try {
    const user = await users.findById(req.userId);
    const userRoles = await role.find({ _id: { $in: user.roles } });
    for (let i = 0; i < userRoles.length; i++) {
      if (userRoles[i] === "admin") {
        next();
        return;
      } else {
        res.status(403).json({ message: "Requer privileges admin" });
      }
    }
  } catch (error) {
    res.status(401).json(error);
  }
};
