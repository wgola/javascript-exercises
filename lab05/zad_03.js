'use strict';

const tablica = [1, 3, 6, 2, 9];

const wynik = tablica.reduce( (acc, elem, indeks) => {
    acc.push(indeks + ": " + elem);
    return acc;
}, []);

wynik.forEach(x => console.log(x));
