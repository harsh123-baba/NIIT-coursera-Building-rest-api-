// Import the necessary dependencies
const lodash = require("lodash");
const productsList = require("./products.json").products;


const getProducts = () => {
  // get all products
  const prods = JSON.stringify(productsList);
  // console.log(typeof(prods))
  return prods;
}

const getProductsById = (productId, done) => {
  let product = null;
  let error = null;
  product = productsList.filter(x=> x.id === parseInt(productId));
  product = product[0];
  if(product === undefined){
    error = "Requested product doesn't exist..!"
  }
  return done(error, JSON.stringify(product));
}

const saveProduct = (newProduct, done) => {
 // save a product
  let error = null;
  product = productsList.filter(x=> x.id === parseInt(newProduct.id));
  // console.log(product);
  if(product[0] !== undefined){
    error = "Product already exists..!"
  }
  productsList.push(newProduct);
  return done(error, JSON.stringify(productsList));
}

const updateProduct = (productId, updateData, done) => {
  let updatedProductList = null;
  // update the product list
  let error = null;
  product = productsList.find(x=> x.id === parseInt(productId));
  if(product === undefined){
    error = "Requested product doesn't exist..!"
  }
  else{
    // product.name = updateData.name
    // product.description = updateData.description
    // product.price = updateData.price;
    // product.quantity = updateData.quantity;
    // productsList.map(productItem => (productItem.id === productId))
    productsList.map(productItem => {
      if(productItem.id === productId){
        productItem.name=updateData.name
        productItem.description = updateData.description
        productItem.price = updateData.price;
        productItem.quantity = updateData.quantity;

      }
    })
    updatedProductList = productsList
  }
  done(error, JSON.stringify(updatedProductList));
}

const deleteProduct = (productId, done) => {
  // delete a product    
  let error = null;
  product = productsList.find(x=> x.id === parseInt(productId));
  // console.log(product)
  if(product === undefined){
    error = "Requested product doesn't exist..!"
  }
  else{
    const index = productsList.indexOf(product);
    // console.log(index)
    productsList.splice(index, 1);
    productsList.pop();
    // console.log(productsList)
  }
  done(error, JSON.stringify(productsList));
}


module.exports = {
  getProducts,
  getProductsById,
  saveProduct,
  updateProduct,
  deleteProduct
}