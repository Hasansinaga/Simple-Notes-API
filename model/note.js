const db = require('../config/database');

const NoteModel = {
  create: (noteData, callback) => {
    const sql = 'INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)';
    db.query(sql, [noteData.title, noteData.datetime, noteData.note], callback);
  },
  getAll: callback => {
    const sql = 'SELECT * FROM notes';
    db.query(sql, callback);
  },
  getById: (id, callback) => {
    const sql = 'SELECT * FROM notes WHERE id = ?';
    db.query(sql, [id], callback);
  },
  update: (id, noteData, callback) => {
    const sql = 'UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?';
    db.query(sql, [noteData.title, noteData.datetime, noteData.note, id], callback);
  },
  delete: (id, callback) => {
    const sql = 'DELETE FROM notes WHERE id = ?';
    db.query(sql, [id], callback);
  },
};

module.exports = NoteModel;
