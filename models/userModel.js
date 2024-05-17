const connexion = require('../database/connexion');
const bcrypt = require('bcryptjs');

function createUser(nom, email, password, callback) {
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return callback(err);
        const sql = 'INSERT INTO utilisateurs (nom, email, pwd) VALUES (?, ?, ?)';
        connexion.query(sql, [nom, email, hash], callback);
    });
}

function findUserByUsername(email, callback) {
    const sql = 'SELECT * FROM utilisateurs WHERE email = ?';
    connexion.query(sql, [email], (err, results) => {
        if (err) return callback(err);
        if (results.length === 0) return callback(null, null);
        callback(null, results[0]);
    });
}

module.exports = { createUser, findUserByUsername };
