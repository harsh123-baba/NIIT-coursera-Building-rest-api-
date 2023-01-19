//Import the necessary dependencies
const http = require('http')
// Define a prot at which the server will run
const PORT = 3000
const productsService = require("./productsService");
const getRequestData = require('./utils');

const server = http.createServer(async (req, res) => {
  // Get all products
  if(req.url === "/api/v1/products" && req.method == "GET"){
      let products = productsService.getProducts();
      res.writeHead(200, {
        'content-type':'application/json'
      })
      res.end(JSON.stringify(products));
  }
  else if(req.url === "/api/v1/products" && req.method === "POST"){
    let req_body = await getRequestData(req)  
    // productsService.push(JSON.parse(req_body));
    // let products = productsService.getProducts();
    function done (error, prod){
      if(error){
        res.end(error);
      }
      res.end(JSON.stringify(prod));
    }
    let products = productsService.saveProduct(req_body, done);

    res.writeHead(201, {
        'content-type' : 'application/json'
    })
    done(error, products)
  }
  else if (req.url.match(/\/api\/v1\/products\/([0-9])/) && req.method === "GET"){
    const id = req.url.split('/')[4];
    // console.log(id);
    let product = null;    
    let error = null
    function done(err, product){
        if(err){
          res.end(err);
        }
        res.end(product);
    }
    productsService.getProductsById(id, done);
    res.writeHead(200, {
      'content-type':'applicaton/json',
    })
    done(error, product);
    // res.end(JSON.stringify(product));
  }
  else if(req.url.match(/\/api\/v1\/products\/([0-9])/) && req.method === "DELETE"){
    const id = req.url.split('/')[4];
    let product = null;    
    let error = null;
    function done(err, product){
        if(err){
          res.end(err);
        }
        res.end(product);
    }
    productsService.deleteProduct(id, done);
    res.writeHead(200, {
      'content-type':'applicaton/json',
    })
    done(error, product);
  }


  // Get a product with specified id

  // Create a new product

  // Update a specific product

  // Delete a specific Product

});

// listen for client requests
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
})
