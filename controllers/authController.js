const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET = 'apex_legend';

function register(req, res) {
    const { nom, email, password } = req.body;
    if (!nom || !email || !password) {
        return res.status(400).json({ error: 'Tous les champs sont obligatoires' });
    }
    userModel.createUser(nom, email, password, (err, result) => {
        if (err) {
            console.error('Erreur lors de la création de l\'utilisateur :', err);
            return res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
        }
        res.status(201).json({ message: 'Utilisateur créé avec succès' });
    });
}

function login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Tous les champs sont obligatoires' });
    }
    userModel.findUserByUsername(email, (err, user) => {
        if (err) {
            console.error('Erreur lors de la recherche de l\'utilisateur :', err);
            return res.status(500).json({ error: 'Erreur lors de la recherche de l\'utilisateur' });
        }
        if (!user) {
            return res.status(400).json({ error: 'Utilisateur non trouvé' });
        }

        bcrypt.compare(password, user.pwd, (err, isMatch) => {
            if (err) {
                console.error('Erreur lors de la vérification du mot de passe :', err);
                return res.status(500).json({ error: 'Erreur lors de la vérification du mot de passe' });
            }
            if (!isMatch) {
                return res.status(400).json({ error: 'Mot de passe incorrect' });
            }
            const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        });
    });
}

module.exports = { register, login };
