import express from 'express';
import { createNote, deleteNote, getNote, updateNote } from "../controllers/apiController.js"

const currRouter = express.Router()

currRouter.post("/create", createNote)
    .get("/:id", getNote)
    .put("/:id", updateNote)
    .delete("/:id", deleteNote)

export default currRouter;