import express from 'express';

const app = express();

const port = 4000;

app.use(express.static('static'))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('static/index.html');
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
