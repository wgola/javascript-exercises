'use strict';
const array = [4, 2, 'a', 'b', 3, 'aa', 'ww', 2, 'ab', -2];

let wolne_miejsce = 0;

console.log(array);
for (let g = 0; g < array.length; g++) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            for (let j = i; j < array.length-1; j++) {
                let tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
            }    
        }
    }
}

console.log(array);