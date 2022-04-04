'use strict';

const czy_palindrom = (tab) => {
    let wynikL = "";
    let wynikP = "";
    tab.forEach(element => {
        wynikL += element;
        wynikP = element + wynikP;
    })
    return wynikL == wynikP;
}

console.log(czy_palindrom([1, 2, 3, 2, 1]));