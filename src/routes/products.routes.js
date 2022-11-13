import { Router } from "express";
import {
  createProducts,
  deleteProducts,
  getProducts,
  getProductsById,
  updateProductsById,
} from "../controllers/products.contollers.js";
const routes = Router();

routes.get("/", getProducts);
routes.get("/:id", getProductsById);
routes.post("/", createProducts);
routes.patch("/:id", updateProductsById);
routes.delete("/:id", deleteProducts);

export default routes;
