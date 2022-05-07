"use strict";

const arr = [
    { key: 0, x: [4, 5, [6]], y: [1, 2, [3, [4]]] },
    { key: 0, x: [1], y: [] }
]

const deep = (table) => {
    const res = table.reduce(
        (acc, elem) => typeof elem === "object" ? acc += deep(elem) : acc += 1, 0
    );
    return res;
}

const wynik = arr.reduce(
    (acc, elem) => {
        const tmp1 = deep(elem.x)
        const tmp2 = deep(elem.y)
        acc += tmp1 + tmp2;
        return acc;
    }, 0
);

console.log(wynik);
