import { Router } from "express";
import { signin, signUp } from "../controllers/auth.controllers.js";
const routes = Router();
routes.post("/signup", signUp);
routes.post("/signin", signin);
export default routes;
