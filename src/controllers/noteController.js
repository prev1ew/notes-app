import asyncHandler from "express-async-handler"

const showMain = asyncHandler(async (req, res) => {
    res.send("showMain")
    //res.render('static/index.html');
})

const showCreateNote = asyncHandler(async (req, res) => {
    res.send("showCreateNote")
    //res.render('static/index.html');
})

const showViewUpdateNote = asyncHandler(async (req, res) => {
    res.send("showViewUpdateNote")
    //res.render('static/index.html');
})

const showArchiveUnarchiveNote = asyncHandler(async (req, res) => {
    res.send("showArchiveUnarchiveNote")
    //res.render('static/index.html');
})

const showDeleteNote = asyncHandler(async (req, res) => {
    res.send("showDeleteNote")
    //res.render('static/index.html');
})

export default { showMain, showCreateNote, showViewUpdateNote, showArchiveUnarchiveNote, showDeleteNote }
export { showMain, showCreateNote, showViewUpdateNote, showArchiveUnarchiveNote, showDeleteNote }