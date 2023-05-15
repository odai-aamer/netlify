const Product = require('../models/products');
const CreativeProducts = require('../models/creative');

exports.getProducts = (req, res, next) => {
  
  Product.fetchAll(products => {
    console.log(products);
    res.status(200).json({
      products
    });
});
};

exports.getProducts = (req, res, next) => {
  
  CreativeProducts.fetchAll(products => {
    console.log(products);
    res.status(200).json({
      products
    });
});
};


exports.createProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.status(200).json({title:product.title,imageUrl:product.imageUrl,description:product.description,price:product.price});
};

exports.createCreativeProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const creativeProduct = new CreativeProducts(null, title, imageUrl, description, price);
  creativeProduct.save();
  res.status(200).json({title:creativeProduct.title,imageUrl:creativeProduct.imageUrl,description:creativeProduct.description,price:creativeProduct.price});
};
