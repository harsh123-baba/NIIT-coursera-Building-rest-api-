

//import the productService
const productService = require('./productsService');

const getProducts = (done) => {
   //call service getproducts method and pass the parameter
  return productService.getProducts(done);
}

const getProductById = (productId, done) => {
   //call service getProductById method and pass the parameter
  return productService.getProductById(productId, done);
}

const saveProductDetails = (productDetails, done) => {
  //call service saveProductDetails method and pass the parameter
  return productService.saveProductDetails(productDetails, done);
}


 const deleteProductById = (productId, done) => {
  //call service deleteProductById method and pass the parameter
  
 }

module.exports = {
  getProducts, getProductById, saveProductDetails, deleteProductById
}
