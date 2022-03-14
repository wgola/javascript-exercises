'use strict';
const numbers = [4, 3, 5, 1, 3, 2, 21, 1, 65, -43, 9];

const unique = [];

let wolne_miejsce = 0;

for (let i = 0; i < numbers.length; i++) {
    let czy_wystapilo = false;
    for (let j = 0; j < unique.length; j++) {
        if (unique[j] === numbers[i]) {
            czy_wystapilo = true;
            break;
        }
    }
    if (!czy_wystapilo) {
        unique[wolne_miejsce] = numbers[i];
        wolne_miejsce++;
    } 
}

console.log(numbers);
console.log(unique);