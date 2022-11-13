import express from "express";
import morgan from "morgan";
import products from "./routes/products.routes.js";
import auht from "./routes/auth.routes.js";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    autor: "Eduardo Hernandez",
    descrition: "proyect to pract node js con json web token ",
    vercion: "1.0.0.0",
  });
});
app.use("/api/user", auht);
app.use("/api/products", products);
export default app;
