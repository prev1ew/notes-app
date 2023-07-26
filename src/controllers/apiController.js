import asyncHandler from "express-async-handler"

const getNotes = asyncHandler(async (req, res) => {
    res.render('static/index.html');
})

export default { getNotes }
export { getNotes }