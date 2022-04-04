'use strict';

function toArray(item1, item2) {
    if (typeof item1 === 'object' && typeof item2 === 'object') {
        return [...item1, ...item2];
    } else if (typeof item1 === 'object') {
        return [...item1, item2];
    } else if (typeof item2 === 'object') {
        return [item1, ...item2];
    } else return [item1, item2];
}

console.log(toArray([1, 3, 4], '22'));