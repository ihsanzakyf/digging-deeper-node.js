const jokes = require('give-me-a-joke');
const color = require('chalk-rainbow');
const cowsay = require('cowsay');

console.log(
    cowsay.say({
        text: "I'm a moooodule",
        e: '><',
        T: 'U',
    }),
);

jokes.getRandomDadJoke((joke) => {
    console.log(color('Dad Joke: ' + joke));
});

// jokes.getRandomCNJoke((joke) => {
//     console.log(color('CN Joke: ' + joke));
// });
