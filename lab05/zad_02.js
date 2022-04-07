'use strict';

const tablica = [1, -1, 3, -1, 5, -1];

const wynik = tablica.reduce( (acc, elem) => {
    if (elem > 0) {
        acc.push(elem * elem);
        }
    return acc;
    }, [])

console.log(wynik);