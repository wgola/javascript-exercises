'use strict';

function fun(funkcja) {
    return funkcja.name;
}

const test = () => 5;

console.log(fun(test));