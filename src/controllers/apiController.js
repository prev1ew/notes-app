import asyncHandler from "express-async-handler"
import dbInteractions from "../db/dbInteractions.js";
import Note from "../models/note.js";
import db from "../db/db.js";
import CustomError from "../models/customError.js";


const createNote = asyncHandler(async (req, res) => {
    const { title, description, category, mentionDates, isArchived } = req.body;
    if (!description || !category) {
        throw new CustomError("Description and category are mandatory fields!", 400)
    }
    const result = dbInteractions.addRecord(new Note(title, description, category, mentionDates, isArchived))

    if (!result) {
        throw new CustomError("Invalid data", 400)
    }

    res.status(200).json({ res: "ok", createdObject: result, newDb: db })

})

const getNote = asyncHandler(async (req, res) => {

    const theNote = dbInteractions.getRecord(req.params.id);
    if (!theNote) {
        throw new CustomError("Can't find", 404)
    }
    res.json({ res: "ok", id: theNote.id, object: theNote })
})

const updateNote = asyncHandler(async (req, res) => {
    const result = dbInteractions.updateRecord(req.body, req.params.id)
    if (!result) {
        throw new CustomError("Can't update!", 400)
    }
    res.json({ res: "ok", object: result })
})

const deleteNote = asyncHandler(async (req, res) => {
    const result = dbInteractions.deleteRecord(req.params.id)
    if (!result) {
        throw new CustomError("Can't delete!", 400)
    }
    res.json({ res: "ok", deletedObject: result })
})

export default { createNote, getNote, updateNote, deleteNote }
export { createNote, getNote, updateNote, deleteNote }