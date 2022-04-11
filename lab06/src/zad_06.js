'use strict';

const arr = [
    { key: 0, x: [4,5,6], y: [1,2,3,4] },
    { key: 0, x: [1], y: [] }
]

const wynik = arr.reduce(
    (acc, elem) => acc += elem.x.length + elem.y.length, 0
);

console.log(wynik);
