'use strict';

const { lp3 } = require('./toplist')
const lodash = require('lodash');

// 1.
const wszystkieQueen = lodash.reduce(lp3, (acc, elem) => {
    if (elem.author==="Queen") {
        acc.push(elem);
    }
    return acc;
}, []);

console.log(wszystkieQueen);

// 2.
const PinkFloydZmiana = lodash.filter(lp3, (elem) => {
    return elem.author==="Pink Floyd" && elem.change===10
})

console.log(PinkFloydZmiana);

// 3.
const posortowana = lodash.dropRight(lodash.sortBy(lp3, (elem) => elem.change), 5);

console.log(posortowana);

// 4.
const pierwszeMiejsce = lodash.reduce(lp3, (acc, elem) => {
    if (elem.place===1) {
        acc.band = elem.author;
        acc.song = elem.song;
    }
    return acc;
}, {});

console.log(pierwszeMiejsce);

// 5.
const czyLiczby = (tablica) => {
    const czyWszystkieLiczby = lodash.reduce(tablica, (acc, elem) => {
        if (!lodash.isNumber(elem)) {
            acc = false;
        }
        return acc;
    }, true);
    if (czyWszystkieLiczby) {
        lodash.forEach(tablica, liczba => {
            lodash.forEach(lp3, elem => {
                if (elem.place === liczba) {
                    console.log(elem);
                }
            })
        })
    }
}

czyLiczby([1, 2, 3]);

// 6.
const losowo = (n, min, max) => {
    const pom = (x) => {
        if (x < n) {
            const losowa = lodash.random(min, max);
            lodash.forEach(lp3, elem => {
                if (elem.place === losowa){
                    console.log(elem);
                }
            })
            return pom(x + 1);
        }
        else return 0;
    }
    pom(0);
}

losowo(5, 3, 10);

// 7.
const pierwsze10 = lodash.take(lp3, 10);

lodash.forEach(pierwsze10, elem => {
    lodash.delay(text => console.log(text), 2000, elem);
})

// 8.

const spadek = lodash.filter(lp3, elem => elem.change < 0);

console.log(spadek);

// 9.

const slownik = lodash.reduce(lp3, (acc, elem) => {
    acc[elem.song] = elem;
    return acc;
}, {})

console.log(slownik);

// 10.
const tablica = lodash.reduce(lp3, (acc, elem) => {
    acc[elem.author]=[];
    return acc;
}, []);

const tablicaUtwory = lodash.reduce(lp3, (acc, elem) => {
    acc[elem.author].push({ 'song': elem.song, 'place': elem.place});
    return acc;
}, tablica);

console.log(tablicaUtwory);

// 11.

const wystapienia = lodash.countBy(lp3, (elem) => elem.author);

console.log(wystapienia);

// 12.
const spadekWzrost = lodash.reduce(lp3, ([spadek, wzrost], elem) => {
    if (elem.change > wzrost) {
        return [spadek, elem.change];
    }
    else if (elem.change < spadek) {
        return [elem.change, wzrost];
    }
    else return [spadek, wzrost];
}, [0, 0]);

console.log(spadekWzrost);