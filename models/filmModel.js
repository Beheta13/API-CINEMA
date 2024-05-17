const connexion = require('../database/connexion');

function getAllFilms(callback) {
    const sql = 'SELECT * FROM films';
    connexion.query(sql, callback);
}

function getFilmById(filmId, callback) {
    const sql = 'SELECT * FROM films WHERE id = ?';
    connexion.query(sql, [filmId], callback);
}

function getAllSeances(callback){
    const sql = 'SELECT * FROM seances';
    connexion.query(sql, callback);
}


module.exports = { getAllFilms, getFilmById, getAllSeances };
