'use strict';
const array = [4, 2, 'a', 'b', 3, 'aa', 'ww', 2, 'ab', -2];

let wolne_miejsce = 0;

console.log(array);
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (typeof array[j] !== "number") {
            let tmp = array[array.length-1];
            array[array.length-1] = array[j];
            array[j] = tmp;
        }
    }
}

console.log(array);