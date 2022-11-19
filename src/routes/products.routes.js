import { Router } from "express";
import {
  createProducts,
  deleteProducts,
  getProducts,
  getProductsById,
  updateProductsById,
} from "../controllers/products.contollers.js";
import { isAdmin, isModeretor, verifiToken } from "../middlewares/auth.jwt.js";
const routes = Router();

routes.get("/", getProducts);
routes.get("/:id", getProductsById);
routes.post("/", [verifiToken, isModeretor], createProducts);
routes.patch("/:id", [verifiToken, isModeretor], updateProductsById);
routes.delete("/:id", [verifiToken, isAdmin], deleteProducts);

export default routes;
