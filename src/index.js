import express from 'express';
import apiRouter from "./routes/api.js"
import viewRouter from "./routes/notes.js"

const app = express();

const port = 4000;

app.use(express.static('static'))
app.use(express.json())
app.use("/api/v1/notes/", apiRouter)
app.use('/', viewRouter)

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
