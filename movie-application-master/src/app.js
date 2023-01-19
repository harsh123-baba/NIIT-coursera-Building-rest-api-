// Import the required dependencies
const http = require("http");
const moviesService = require("./moviesService");
// const getRequestData = require("");
// Define the port at which the application will run
const PORT = 3000;

// Define the server
const server = http.createServer(async (req, res) => {
  // Get all movies
  // Get a movie with specified id
  // Save movie details
  // Update a specific movie
  // Delete a specific movie
  // If no route present capture in the else part
  if(req.url === "/movies" && req.method === "GET"){
    let error = ''
    let movies = await moviesService.getMovies(done);
    console.log(movies)
    function done (error, movies){
      if(error){
        res.end(error);
      }
      res.end(JSON.stringify(movies));
    }
    res.writeHead(200, {
      'content-type':'application/json'
    })
    done(error, movies);
    // res.end(JSON.stringify());
  }
  else if(req.url === "/movies" && req.method === "POST"){

  }
  else if(req.url.match(/\/movies\/([0-9])/) && req.method === "GET"){

  }
  else if(req.url.match(/\/movies\/([0-9])/) && req.method === "POST"){

  }

});
// listen to the server on the specified port
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
server.on("error", (error) => {
  if (error.code === "EADRINUSE") {
    console.log("Port already in use");
  }
});
