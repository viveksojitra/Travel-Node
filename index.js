const express = require('express');
const app = express();
const path = require('path');

const PORT = 3001;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/views")));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/destinations', (req, res) => {
    res.render('destinations');
});

app.get('/tours', (req, res) => {
    res.render('tours');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is running on http://localhost:${PORT}`);
    } else {
        console.log(error);
    }
});
