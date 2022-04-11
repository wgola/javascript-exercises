'use strict';

const listaZakupow = require('./listaZakupow.js').listaZakupow;

const zmienionaListaZakupow = listaZakupow.reduce(
    (acc, elem) => {
        acc.push({ [elem.produkt]: elem });
        return acc;
    }, []
);

console.log(zmienionaListaZakupow);

const ileNaNabial = listaZakupow.reduce(
    (acc, elem) => {
        if (elem.typ === 'nabiał') acc += elem.cena;
        return acc;
    }, 0
);

console.log(ileNaNabial);

const naKilo = listaZakupow.reduce(
    (acc, elem) => {
        if (elem.jednostka === 'kg') acc.push(elem.produkt);
        return acc;
    }, []
);

console.log(naKilo.sort());

function znajdzProdukt(typ) {
    const znalezione = listaZakupow.reduce(
        (acc, elem) => {
            if (elem.typ === typ) acc.push({'produkt': elem.produkt, 'cena': elem.ilosc * elem.cena});
            return acc;
        }, []
    );
    const wynik = znalezione.reduce(
        (acc, elem) => {
            if (elem.cena < 10) acc.push(elem);
            return acc; 
        }, []
    );
    return wynik
}

const znalezioneProdukty = znajdzProdukt("nabiał");

console.log(znalezioneProdukty.sort(znalezioneProdukty.cena));

const naSztuki = listaZakupow.reduce(
    (acc, elem) => {
        if (elem.jednostka === "sztuk") acc.push(elem.produkt);
        return acc;
    }, []
);

console.log(naSztuki);

function compare(a, b) {
    if ( a.typ < b.typ ){
      return -1;
    }
    if ( a.typ > b.typ ){
      return 1;
    }
    return 0;
}

const produkty = listaZakupow.sort(compare);

console.log(produkty);
