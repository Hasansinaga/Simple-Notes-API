const NoteModel = require('../model/note');

const NoteController = {
  createNote: (req, res) => {
    const noteData = req.body;
    NoteModel.create(noteData, (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).send({ message: 'Note created', id: result.insertId });
    });
  },

  getAllNotes: (req, res) => {
    NoteModel.getAll((err, results) => {
      if (err) return res.status(500).send(err);
      res.status(200).send(results);
    });
  },

  getNoteById: (req, res) => {
    const { id } = req.params;
    NoteModel.getById(id, (err, result) => {
      if (err) return res.status(500).send(err);
      if (result.length === 0) return res.status(404).send({ message: 'Note not found' });
      res.status(200).send(result[0]);
    });
  },

  updateNote: (req, res) => {
    const { id } = req.params;
    const noteData = req.body;
    NoteModel.update(id, noteData, (err, result) => {
      if (err) return res.status(500).send(err);
      if (result.affectedRows === 0) return res.status(404).send({ message: 'Note not found' });
      res.status(200).send({ message: 'Note updated' });
    });
  },

  deleteNote: (req, res) => {
    const { id } = req.params;
    NoteModel.delete(id, (err, result) => {
      if (err) return res.status(500).send(err);
      if (result.affectedRows === 0) return res.status(404).send({ message: 'Note not found' });
      res.status(200).send({ message: 'Note deleted' });
    });
  },
};

module.exports = NoteController;
