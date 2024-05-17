const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');
router.use(express.json());


/**
 * @swagger
 * components:
 *   schemas:
 *     Reservation:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID de la réservation
 *         seanceId:
 *           type: integer
 *           description: ID de la séance
 *         nomClient:
 *           type: string
 *           description: Nom du client
 *         emailClient:
 *           type: string
 *           description: Email du client
 *         nombreTickets:
 *           type: integer
 *           description: Nombre de tickets réservés
 */

/**
 * @swagger
 * tags:
 *   name: Réservations
 *   description: Gestion des réservations
 */

/**
 * @swagger
 * /reserve/reservation:
 *   post:
 *     summary: Créer une nouvelle réservation
 *     tags: [Réservations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reservation'
 *     responses:
 *       200:
 *         description: Réservation créée avec succès
 *       400:
 *         description: Tous les champs sont obligatoires
 *     security:
 *       - bearerAuth: []
 */
router.post('/reservation', reservationController.createReservation);

/**
 * @swagger
 * /reserve/reservations/{reservationId}:
 *   delete:
 *     summary: Supprimer une réservation par ID
 *     tags: [Réservations]
 *     parameters:
 *       - in: path
 *         name: reservationId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la réservation
 *     responses:
 *       200:
 *         description: Réservation supprimée avec succès
 *       500:
 *         description: Erreur lors de la suppression de la réservation
 *     security:
 *       - bearerAuth: []
 */
router.delete('/reservations/:reservationId', reservationController.deleteReservation);


module.exports = router;
