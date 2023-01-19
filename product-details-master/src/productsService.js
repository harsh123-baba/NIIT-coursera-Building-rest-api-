

//import the DAO layer
const prodctDao = require("./productDao");


const getProducts = function(done){
  //call dao getproducts method and pass the parameter
  return prodctDao.getProducts(done);  
}

const getProductById = function(id, done){
  //call dao getProductById method and pass the parameter
  return prodctDao.getProductById(id, done);
}
const saveProductDetails = function(productDetails, done){
  //call dao saveProductDetails method and pass the parameter
  return prodctDao.saveProductDetails(productDetails, done);
}


const deleteProductById = (productId, done) => {
//call dao deleteProductById method and pass the parameter
}



module.exports = {
  getProducts, getProductById,saveProductDetails, deleteProductById
}
