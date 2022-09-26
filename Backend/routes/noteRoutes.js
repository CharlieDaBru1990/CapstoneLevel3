const express = require('express')
const router = express.Router()
const notesController = require('../controllers/notesController')
const verifyJWT = require('../middleware/verifyJWT')

// 1. First, we’re importing the verifyJWT middleware from the auth.js file.
// 2. Next, we’re creating a new route called ‘/’.
// 3. We’re using the GET method to get all the notes.
// 4. We’re using the POST method to create a new note.
// 5. We’re using the PATCH method to update a note.
// 6. We’re using the DELETE method to delete a note.
router.use(verifyJWT)

router.route('/')
    .get(notesController.getAllNotes)
    .post(notesController.createNewNote)
    .patch(notesController.updateNote)
    .delete(notesController.deleteNote)

module.exports = router