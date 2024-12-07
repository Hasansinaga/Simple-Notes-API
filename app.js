const dotenv = require('dotenv');
const initDatabase = require('./config/initDatabase');
const noteRoutes = require('./routes/nodeRoutes');

// Load .env
dotenv.config();

// Inisialisasi database
initDatabase();

// Routes
app.use('/notes', noteRoutes);

// Start server
app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
