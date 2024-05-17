const express = require('express');
const router = express.Router();
const filmController = require('../controllers/filmController');
router.use(express.json());

/**
 * @swagger
 * components:
 *   schemas:
 *     Film:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID du film
 *         titre:
 *           type: string
 *           description: Titre du film
 *         description:
 *           type: string
 *           description: Description du film
 *         duree:
 *           type: integer
 *           description: Durée du film en minutes
 */

/**
 * @swagger
 * tags:
 *   name: Films
 *   description: Gestion des films
 */

/**
 * @swagger
 * /films:
 *   get:
 *     summary: Récupérer tous les films
 *     tags: [Films]
 *     responses:
 *       200:
 *         description: La liste des films
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Film'
 */
router.get('/films', filmController.getAllFilms);

/**
 * @swagger
 * /films/{id}:
 *   get:
 *     summary: Récupérer un film par ID
 *     tags: [Films]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du film
 *     responses:
 *       200:
 *         description: Détails du film
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Film'
 *       404:
 *         description: Film non trouvé
 */
router.get('/films/:id', filmController.getFilmById);

/**
 * @swagger
 * /seances:
 *   get:
 *     summary: Récupérer toutes les séances
 *     tags: [Films]
 *     responses:
 *       200:
 *         description: La liste des séances
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Seance'
 */
router.get('/seances', filmController.getAllSeances);

module.exports = router;
    