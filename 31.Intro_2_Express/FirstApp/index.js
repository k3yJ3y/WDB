const express = require("express");
const app = express();

// app.use((request, response) => {
//     console.log("WE GOT A NEW REQUEST");
//     // console.dir(request)
//     // response.send("Hello, we got your request!! This is the response...")
//     // response.send({color: 'red'})
//     response.send('<h1>This is my webpage!!!!</h1>')
// })

app.get('/', (req, res) => {
    res.send("Welcome to my home page!");
})

app.get('/r/:subreddit', (req, res) => {
    console.log(req.params);
    const {subreddit} = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit </h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const {subreddit, postId} = req.params;
    res.send(`<h1>Browsing PostId: ${postId} on the ${subreddit} subreddit </h1>`)
})

app.post('/cats', (req, res) => {
    res.send("Post request to /cats!!! This is different than a get request")
})

app.get('/cats', (req, res) => {
    res.send("MEOW!!");
})

app.get('/dogs', (req, res) => {
    res.send("WOOF!!");
})

app.get('/search', (req, res) => {
    // /search?q=cat
    const {q} = req.query;
    if(!q){
        res.send("<h1>Nothing found if nothing searched!!<h1>")
    }
    res.send(`<h1>Search results for: ${q}</h1>`);
})

// catch all more bit zadno ...
app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
})

app.listen(8080, () => {
    console.log("Listening on port 8080");
})