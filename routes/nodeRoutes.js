const NoteController = require('../controller/nodeController');

const router = express.Router();

router.post('/', NoteController.createNote);
router.get('/', NoteController.getAllNotes);
router.get('/:id', NoteController.getNoteById);
router.put('/:id', NoteController.updateNote);
router.delete('/:id', NoteController.deleteNote);

module.exports = router;
