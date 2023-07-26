import express from 'express';
import {
    showMain, showCreateNote, showViewUpdateNote,
    showArchiveUnarchiveNote, showDeleteNote
} from "../controllers/noteController.js"

const currRouter = express.Router()

currRouter.get("/", showMain)
    .get("/create", showCreateNote)
    .get("/archive/:id", showArchiveUnarchiveNote)
    .get("/:id", showViewUpdateNote)
    .get("/delete/:id", showDeleteNote)

export default currRouter;