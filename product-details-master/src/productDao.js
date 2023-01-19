
//import fs module

const fs = require('fs');

//The getProducts function take done as callback
//It will read the product.json file

const getProducts = function(done){
    fs.readFile('src/products.json', (error, fileData)=>{
      if(error){
        return done("Not able to get the data from API");
      }
      let productData = JSON.parse(fileData);
      return done(undefined, productData);
    })
//parse the filecontent and save it in another varible say productdata
//return the callback with first parameter as undefined and second parameter as productdata 
}


//The function getProductById will take two parameters first the id and second the callback
//It will read the product.json file
const getProductById = function(id,done){
  //write all the logical steps
  //return the callback with first parameter as undefined and second parameter as productDetails
  fs.readFile('src/products.json', (err, fileData)=>{
    if(err){
      return done("encounted error");
    }
    else{
      let productData = JSON.parse(fileData);
      // console.log(productData)
      // console.log(id)
      let index = productData.findIndex((x) => x.id == id)
      // console.log(index)
      let fetchedData = productData[index];
      // console.log(productData[index])

      if(fetchedData === undefined){
        return done("Error found");
      }
      else{
        return done(undefined, fetchedData);
      }

    }
  })
}


//The saveProductDetails method will take productDetails and done as callback
//It will read the product.json file
const saveProductDetails = function (ProductDetails, done) {
  //write all the logical steps
  //parse the filecontent and save it in another varible say productdata
  //push the productDetails in the productData
  fs.readFile('src/products.json', (err, fileData)=>{
    if(err){
      return done("Encountered error while getting users details")
    }
    let userData = JSON.parse(fileData);
    userData.push(ProductDetails);
    fs.writeFile('src/products.json', JSON.stringify(userData), (err, updatedData)=>{
      if(err){
        return done("Found error while posting data");
      }
      updatedData = ProductDetails
      console.log(updatedData)
      return done(undefined, updatedData);
    })    
  })
  //Write the productData into the file 
     
  //return the callback with undefined and ProductDetails
     
    
  }

  //The method deleteProductById will take productId and done as parameters
  //It will read the product.json file

  const deleteProductById = function(productId, done){
    //Write all the logical steps
     //return the callback with first parameter as undefined and second parameter as productDetails
  }


module.exports ={
    getProducts,
    getProductById,
    saveProductDetails,
    deleteProductById
    
}