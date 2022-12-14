const jokes = require('give-me-a-joke');
const colors = require('colors')

// To get a random Chuck Norris joke
jokes.getRandomCNJoke (function(joke) {
    console.log("a random Chuck Norris joke:");
    console.log(joke.rainbow);
    console.log("");

});
// To get a random dad joke
// jokes.getRandomDadJoke (function(joke) {
//     console.log("a random dad joke:");
//     console.log(joke);
// });