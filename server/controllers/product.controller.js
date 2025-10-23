const Product = require("../model/product.model");

const getProductsHandler = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ data: products });
  } catch (error) {
    console.error("Can't get products", error);
    res.status(500).json({ message: "Server error" });
  }
};

const postProductHandler = async (req, res) => {
  try {
    const { name, description, price, image } = req.body;

    if (!name || !description || !price || !image)
      return res.status(400).json({ message: "All fields are required" });

    const product = await Product.create({ name, description, price, image });
    res
      .status(201)
      .json({ message: "Product created successfully", data: product });
  } catch (error) {
    console.error("Can't post product", error);
    res.status(500).json({ message: "Server error" });
  }
};

const patchProductHandler = async (req, res) => {
  try {
    const { name, description, price, image } = req.body;

    if (!name || !description || !price || !image)
      return res.status(400).json({ message: "All fields are required" });

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, price, image },
      { new: true }
    );
    res.json({ message: "Product updated successfully", data: product });
  } catch (error) {
    console.error("Can't patch product", error);
    res.status(500).json({ message: "Server error" });
  }
};

const deleteProductHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted successfully", data: product });
  } catch (error) {
    console.error("Can't delete product", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getProductByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ data: product });
  } catch (error) {
    console.error("Can't get product by id", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getProductsHandler,
  postProductHandler,
  patchProductHandler,
  deleteProductHandler,
  getProductByIdHandler,
};
