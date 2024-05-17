const filmModel = require ('../models/filmModel');

function getAllFilms(req, res) {
    filmModel.getAllFilms((err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des films :', err);
            res.status(500).json({ error: 'Erreur lors de la récupération des films' });
        } else {
            res.status(200).json(results);
        }
    });
}

function getFilmById(req, res) {
    const filmId = req.params.id;
    filmModel.getFilmById(filmId, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération du film :', err);
            res.status(500).json({ error: 'Erreur lors de la récupération du film' });
        } else {
            res.status(200).json(results);
        }
    });
}

function getAllSeances(req, res){
    filmModel.getAllSeances((err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des séances :', err);
            res.status(500).json({ error: 'Erreur lors de la récupération des séances' });
        } else {
            res.status(200).json(results);
        }
    });
}


module.exports = { getAllFilms, getFilmById, getAllSeances };
