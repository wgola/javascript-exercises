'use strict';

const getRand = () => {
    return Math.floor(Math.random() * 1000);
};
  
const getNum = (cb) => {
    setTimeout(() => {
        cb(getRand());
    }, getRand() * 5);
};

const asyncSort = (dim) => {
    const wynik = [];
    const wpisz = (n) => wynik.push(n);
    const wykonaj = (i) => {
        if (i === dim) getNum(wpisz);
        else {
            getNum(wpisz);
            wykonaj(i + 1);
        };
    };
    wykonaj(1);
    const sprawdzenie = setInterval(() => {
        if (wynik.length === dim) {
            clearInterval(sprawdzenie);
            console.log(wynik.sort((a, b) => b - a));
        }
    }, 1000);
};

asyncSort(10);