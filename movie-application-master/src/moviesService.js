// Import the axios library
const axios = require('axios')

const getMovies = async(done) => {
  // get all movies
  let error = null;
  let movies = await  axios.get('http://localhost:3000/movies')
  // console.log(movies)
  // movies = movies.data;
  if(movies === undefined){
    error = "lwjknfslkd"
  }
  // console.log(movies.data)
  done(error, JSON.stringify(movies.data));
}

const getMoviesById = (movieId, done) => {
  // get movie by id
}

const saveMovie = function (newMovie, done) {
  // save the details of a movie read from the request body
}

const updateMovie = function (movieId, updateData, done) {
 // update movie details of a specific movie
}

const deleteMovieById = function (movieId, done) {
  // delete a specific movie 
}



module.exports = {
  getMovies,
  getMoviesById,
  saveMovie,
  updateMovie,
  deleteMovieById
}
