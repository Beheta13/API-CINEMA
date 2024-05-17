const connexion = require('../database/connexion');

function createReservation(seanceId, nomClient, emailClient, nombreTickets, callback) {
    const sqlInsertReservation = 'INSERT INTO reservations (seance_id, nom_client, email_client, nombre_tickets) VALUES (?, ?, ?, ?)';
    connexion.query(sqlInsertReservation, [seanceId, nomClient, emailClient, nombreTickets], callback);
}

function deleteReservation(reservationId, callback) {
    const sqlDeleteReservation = 'DELETE FROM reservations WHERE id = ?';
    connexion.query(sqlDeleteReservation, [reservationId], callback);
}


module.exports = { createReservation, deleteReservation };
