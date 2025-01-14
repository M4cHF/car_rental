const express = require('express');
const dotenv = require('dotenv');
const voitureRoutes = require('./routes/voitureRoutes');
const clientRoutes = require('./routes/clientRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api', voitureRoutes);
app.use('/api', clientRoutes);
app.use('/api', reservationRoutes);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
