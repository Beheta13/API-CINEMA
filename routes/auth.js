const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
router.use(express.json());

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID de l'utilisateur
 *         nom:
 *           type: string
 *           description: Nom de l'utilisateur
 *         email:
 *           type: string
 *           description: Email de l'utilisateur
 *         password:
 *           type: string
 *           description: Mot de passe de l'utilisateur
 */

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Gestion de l'authentification
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Inscription d'un nouvel utilisateur
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *                 description: Nom de l'utilisateur
 *               email:
 *                 type: string
 *                 description: Email de l'utilisateur
 *               password:
 *                 type: string
 *                 description: Mot de passe
 *             required:
 *               - nom
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       400:
 *         description: Tous les champs sont obligatoires
 *       500:
 *         description: Erreur lors de la création de l'utilisateur
 */
router.post('/register', authController.register);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Connexion de l'utilisateur
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email de l'utilisateur
 *               password:
 *                 type: string
 *                 description: Mot de passe
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Connexion réussie, retourne un token JWT
 *       400:
 *         description: Tous les champs sont obligatoires ou informations incorrectes
 *       500:
 *         description: Erreur lors de la connexion
 */
router.post('/login', authController.login);

module.exports = router;
