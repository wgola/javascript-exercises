'use strict';

const { lp3 } = require('./toplist')

// 6.
const losowaLiczba = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const wypiszLosowo = (n, min, max) => {
    const pom = (x) => {
        if (x < n) {
            const liczba = losowaLiczba(min, max);
            lp3.forEach(elem => {
                if (elem.place===liczba) console.log(elem)
            })
            pom(x + 1)
        }
        else return 0;
    }
    pom(0);
}

wypiszLosowo(5, 10, 15);

// 7.
const pierwsze10 = lp3.slice(0, 10);

pierwsze10.forEach(elem => setTimeout(() => console.log(elem), 2000));

// 10.
const przeksztalcenie = lp3.reduce((acc, elem) => {
    acc[elem.author] = [];
    return acc;
}, []);

const bandSongs = lp3.reduce((acc, elem) => {
    acc[elem.author].push({'song': elem.song, 'place': elem.place});
    return acc;
}, przeksztalcenie);

console.log(bandSongs);