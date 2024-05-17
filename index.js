const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const filmRoutes = require('./routes/films');
const reservationRoutes = require('./routes/reservations');

app.use(express.json());

app.use('/api', filmRoutes);
app.use('/api/reserve', reservationRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
