import asyncHandler from "express-async-handler"

const createNote = asyncHandler(async (req, res) => {
    res.send("createNote")
})

const getNote = asyncHandler(async (req, res) => {
    res.send(`req.params.id: ${req.params.id}\\ getNote`)
})

const updateNote = asyncHandler(async (req, res) => {
    res.send(`req.params.id: ${req.params.id}\\ updateNote`)
})

const deleteNote = asyncHandler(async (req, res) => {
    res.send(`req.params.id: ${req.params.id}\\ deleteNote`)
})

export default { createNote, getNote, updateNote, deleteNote }
export { createNote, getNote, updateNote, deleteNote }