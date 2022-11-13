import products from "../models/products.js";
//get all products
export const getProducts = async (req, res) => {
  const allProducts = await products.find();
  res.status(200).json(allProducts);
};
//create products
export const createProducts = async (req, res) => {
  const { name, category, preci, imgURl } = req.body;
  const newProducts = new products({ name, category, preci, imgURl });
  const productsSave = await newProducts.save();
  res.status(200).json(productsSave);
};
//find by id
export const getProductsById = async (req, res) => {
  const productsId = await products.findById(req.params.id);
  res.status(200).json(productsId);
};
//update products
export const updateProductsById = async (req, res) => {
  const updateID = await products.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateID);
};
//delete products
export const deleteProducts = async (req, res) => {
  await products.findByIdAndDelete(req.params.id);
  res.status(204).json("Delete subses");
};
