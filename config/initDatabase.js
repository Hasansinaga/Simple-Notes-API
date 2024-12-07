const db = require('./database');

// Inisialisasi tabel notes
const initDatabase = () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS notes (
      id BIGINT AUTO_INCREMENT PRIMARY KEY,
      title TEXT NOT NULL,
      datetime DATETIME NOT NULL,
      note LONGTEXT NOT NULL
    )
  `;

  db.query(createTableQuery, err => {
    if (err) {
      console.error('Failed to initialize table:', err);
      process.exit(1);
    }
    console.log('Table "notes" initialized');
  });
};

module.exports = initDatabase;
