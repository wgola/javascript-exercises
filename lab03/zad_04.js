'use strict';

function ileRazy(tablica) {
    const result = [];
    const wypisane = [];
    const ile = [];
    for (let i = 0; i < tablica.length; i++) {
        let wynik = 0;
        for (let j = 0; j < tablica.length; j++) {
            if (tablica[i] == tablica[j]) {
                wynik++;
            }
        }
        ile.push(wynik);
    }
    for (let i = 0; i < tablica.length; i ++) {
        let czy_byl = false;
        for (let j = 0; j < wypisane.length; j++) {
            if (wypisane[j] == tablica[i]) {
                czy_byl = true;
                break;
            }
        }
    }
}

console.log(ileRazy(['js', 'react', 'js', 'angular', 'angular', 'js']));