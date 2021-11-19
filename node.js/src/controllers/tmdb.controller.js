
const tmdbService = require('../services/tmdb.service');
const axios = require('axios');
const env=require('../config.json')

const getPopularMovies = async function (req, res) {
    await axios.get(`${env.url}/popular?api_key=${env.key}&language=en-US&page=1`)
        .then(response => {
            res.send(response.data.results);
        })
        .catch(error => {
            console.log(error);
        });
}

const getVideoByMovie = async function (req, res) {
    await axios.get(`${env.url}/${req.params.movieId}/videos?api_key=${env.key}`)
        .then(response => {
            res.send(response.data.results);
        })
        .catch(error => {
            console.log(error);
        });
}


const getCastByMovie = async function (req, res) {
    await axios.get(`${env.url}/${req.params.movieId}/credits?api_key=${env.key}&language=en-US`)
        .then(response => {
            res.send(response.data.cast);
        })
        .catch(error => {
            console.log(error);
        });
}

module.exports = {
    getPopularMovies,
    getVideoByMovie,
    getCastByMovie
};