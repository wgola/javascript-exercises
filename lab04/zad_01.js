'use strict';

function funkcja() {
    const x = 5;
    return function druga_funkcja(liczba) {
        return x + liczba;
    }
}

const test = funkcja();

console.log(test(15));
