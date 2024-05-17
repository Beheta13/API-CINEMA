const reservationModel = require('../models/reservationModel');

function createReservation(req, res) {
    const { seanceId, nomClient, emailClient, nombreTickets } = req.body;
    if (!seanceId || !nomClient || !emailClient || !nombreTickets) {
        return res.status(400).json({ error: 'Tous les champs sont obligatoires' });
    }
    reservationModel.createReservation(seanceId, nomClient, emailClient, nombreTickets, (err, result) => {
        if (err) {
            console.error('Erreur lors de la création de la réservation :', err);
            return res.status(500).json({ error: 'Erreur lors de la création de la réservation' });
        }
        res.status(200).json({ message: 'Réservation créée avec succès', reservationId: result.insertId });
    });
}

function deleteReservation(req, res){
    const { reservationId } = req.params;
    reservationModel.deleteReservation(reservationId, (err, result) => {
        if (err) {
            console.error('Erreur lors de la suppression de la réservation :', err);
            return res.status(500).json({ error: 'Erreur lors de la suppression de la réservation' });
        }
        res.status(200).json({ message: 'Réservation supprimée avec succès' });
    });
}

module.exports = { createReservation, deleteReservation };
