const express = require('express');
const dotenv = require('dotenv');
const initDatabase = require('./config/initDatabase');
const noteRoutes = require('./routes/nodeRoutes');

// Load .env
dotenv.config();

// Inisialisasi database
initDatabase();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/notes', noteRoutes);

// Start server
app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
