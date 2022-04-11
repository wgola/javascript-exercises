'use strict';

const games = require('./games.js').games;

const wynik = games.reduce(
    (acc, elem) => {
        if (acc.length < 4 && elem.imageUrl !== '') acc.push(elem.imageUrl);
        return acc
    }, []
);

console.log(wynik);
