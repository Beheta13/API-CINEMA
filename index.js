const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const filmRoutes = require('./routes/films');
const reservationRoutes = require('./routes/reservations');
const authMiddleware = require('./middleware/authMiddleware');
const authRoutes = require('./routes/auth');


app.use(express.json());

app.use('/api', filmRoutes);
app.use('/api/reserve', authMiddleware, reservationRoutes);
app.use('/api/auth', authRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
