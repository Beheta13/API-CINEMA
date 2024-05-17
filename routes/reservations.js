const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');
router.use(express.json());


router.post('/reservation', reservationController.createReservation);
router.delete('/reservations/:reservationId', reservationController.deleteReservation);


module.exports = router;
