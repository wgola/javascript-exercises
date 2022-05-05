"use strict";

const arr = [
    { key: 0, x: [4, 5, [6]], y: [1, 2, [3, 4]] },
    { key: 0, x: [1], y: [] }
]

const wynik = arr.reduce(
    (acc, elem) => {
        let tmp1 = elem.x.reduce(
            (acc1, elem1) => {
                if (typeof elem1 === 'object') acc1 += elem1.length;
                else acc1 += 1;
                return acc1;
            }, 0
        );
        let tmp2 = elem.y.reduce(
            (acc2, elem2) => {
                if (typeof elem2 === 'object') acc2 += elem2.length;
                else acc2 += 1;
                return acc2;
            }, 0
        );
        acc += tmp1 + tmp2;
        return acc;
    }, 0
);

console.log(wynik);