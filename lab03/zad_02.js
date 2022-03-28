'use strict';

function isPositiveEven(number) {
    return number > 0 && number % 2 == 0 ? true : false;
}

console.log(isPositiveEven(5));