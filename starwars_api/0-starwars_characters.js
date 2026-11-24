#!/usr/bin/node
const request = require('request');
const movieID = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/' + movieID + '/';

function printCharcter(urls, index) {
    if (index === urls.length) return;


    request(urls[index], { json: true }, (error, response, character) => {
        if (error) return console.error(error.message);
        if (response.statusCode !== 200) return console.error('Charcter lookup failed');

        console.log(character.name);
        printCharcter(urls, index + 1);
    });
}
request(url, { json: true }, (error, response, film) => {
    if (error) return console.error(error.message);
    if (response.statusCode !== 200) return console.error('Film lookup failed');

    printCharcter(film.characters, 0);
});
