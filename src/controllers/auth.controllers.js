import users from "../models/users.js";

export const signUp = async (req, res) => {
  const { name, email, password, role } = req.body;
  const newUsers = new users({
    userName,
    email,
    password: await users.encryptPassword(password),
  });
  console.log(req.body);
  res.json(newUsers);
};
export const signin = async (req, res) => {
  res.json("signin");
};
