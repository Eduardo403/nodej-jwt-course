import { Router } from "express";
import { createUser } from "../controllers/users.controllers.js";
import { isAdmin, verifiToken } from "../middlewares/auth.jwt.js";
const routes = Router();
routes.post("/", [verifiToken, isAdmin], createUser);
export default routes;
