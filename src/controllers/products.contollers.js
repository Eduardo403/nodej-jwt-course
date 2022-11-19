import products from "../models/products.js";
//get all products
export const getProducts = async (req, res) => {
  try {
    const allProducts = await products.find();
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(404).json(error);
  }
};
//create products
export const createProducts = async (req, res) => {
  try {
    const { name, category, preci, imgURl } = req.body;
    const newProducts = new products({ name, category, preci, imgURl });
    const productsSave = await newProducts.save();
    res.status(200).json(productsSave);
  } catch (error) {
    res.status(400).json(error);
  }
};
//find by id
export const getProductsById = async (req, res) => {
  try {
    const productsId = await products.findById(req.params.id);
    res.status(200).json(productsId);
  } catch (error) {
    res.status(404).json(error);
  }
};
//update products
export const updateProductsById = async (req, res) => {
  try {
    const updateID = await products.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updateID);
  } catch (error) {
    res.status(400).json(error);
  }
};
//delete products
export const deleteProducts = async (req, res) => {
  try {
    await products.findByIdAndDelete(req.params.id);
    res.status(204).json("Delete subses");
  } catch (error) {
    res.status(400).json(error);
  }
};
