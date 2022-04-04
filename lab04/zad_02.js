'use strict';

(function anonimowa_funkcja(tekst) {
    const wyrazy = tekst.split(" ");
    let maks = 0;
    let wynik = "";
    wyrazy.forEach(element => {
        const dl = element.length;
        if (dl > maks) {
            maks = dl;
            wynik = element;
        }
    });
    return wynik;
})('Ala ma kota');

