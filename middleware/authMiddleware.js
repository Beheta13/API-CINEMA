const jwt = require('jsonwebtoken');
const JWT_SECRET = 'apex_legend';

function authMiddleware(req, res, next) {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ error: 'Accès refusé' });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Token invalide' });
    }
}

module.exports = authMiddleware;
