const express = require("express");
const serverless = require("serverless-http");

// const productController = require('./controllers/product.js');

const app = express();
const router = express.Router();

// app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

router.get("/", (req, res) => {
  res.json({
    message: "Home Page"
  });
});

// GET /products
router.get('/products', productController.getProducts);

// GET /creative-products
router.get('/creative-products', productController.getProducts);


// POST /product
router.post('/product', productController.createProduct);

// POST /creative-product
router.post('/creative-product', productController.createCreativeProduct);

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
