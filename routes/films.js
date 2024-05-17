const express = require('express');
const router = express.Router();
const filmController = require('../controllers/filmController');
router.use(express.json());


router.get('/films', filmController.getAllFilms);
router.get('/films/:id', filmController.getFilmById);
router.get('/seances', filmController.getAllSeances);

module.exports = router;
    