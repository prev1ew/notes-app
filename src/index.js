import express from 'express';
import apiRouter from "./routes/api.js"
import viewRouter from "./routes/notes.js"
import db from './db/db.js';
import dbInteractions from './db/dbInteractions.js';
import Note from './models/note.js';

const app = express();

const port = 4000;

app.use(express.static('static'))
app.use(express.json())
app.use("/api/v1/notes/", apiRouter)
app.use('/', viewRouter)

console.log(db.length)
dbInteractions.addRecord(new Note("test", "test"))
console.log(db.length)
console.log(dbInteractions.getRecord(db[3].id).id)
console.log(dbInteractions.deleteRecord(db[3].id))
console.log(db.length)
const rec = dbInteractions.getRecord(db[3].id);
rec.category = "test";
console.log(db[3])


app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
