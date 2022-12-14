const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN");
    })
    .catch((err) => {
        console.log("OH NO ERROR");
        console.log(err);
    })


const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);
// const amadeus = new Movie({title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'})

// Movie.insertMany([
//     {title: 'Amelie', year: 2001, score: 8.3, rating: 'PG-13'},
//     {title: 'Alien', year: 1979, score: 9.1, rating: 'R'},
//     {title: 'Stand By Me', year: 1986, score: 7.5, rating: 'R'},
//     {title: 'The Iron Giant', year: 1999, score: 8.0, rating: 'PG'}
// ])
// .then(data => {
//     console.log("it worked!!")
//     console.log(data)
// })

