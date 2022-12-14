const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // this is usefull if you are executing index.js from a different folder...

app.get('/', (req, res) => {
    // don't need .ejs because it is specified here app.set('view engine', 'ejs') & don't need the full views/home path because it is the default place it looks
    res.render('home.ejs');
})

app.get('/cats', (req, res) => {
    const cats = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston']
    res.render('cats', {cats:cats})
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    res.render('subreddit', {subreddit});
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', {rand: num});
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})