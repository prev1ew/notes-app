import express from 'express';
import { getNotes } from "../controllers/apiController.js"

const currRouter = express.Router()

currRouter.get("", getNotes)
// .post("", createItem)
// .put("", updateItem)
// .delete("", deleteItem)

export default currRouter;