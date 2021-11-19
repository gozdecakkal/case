

const express = require('express');
const router = express.Router({ mergeParams: true });

const tmdbController = require('../controllers/tmdb.controller');

router.route('/movies')
    .get(tmdbController.getPopularMovies);

router.route('/videos/:movieId')
    .get(tmdbController.getVideoByMovie);

router.route('/casts/:movieId')
    .get(tmdbController.getCastByMovie);


module.exports = router;