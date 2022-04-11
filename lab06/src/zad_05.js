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

const przeksztalcenie1 = produkty.reduce(
    (acc, elem) => {
        acc[elem.typ]=[];
        return acc;
    }, {}
);

const przeksztalcenie2 = produkty.reduce(
    (acc, elem) => {
        acc[elem.typ].push(elem.produkt + " - " + elem.jednostka + ": " + elem.ilosc);
        return acc;
    }, przeksztalcenie1
);

const klucze = Object.keys(przeksztalcenie2);

const wynik = klucze.reduce(
    (acc1, elem1) => {
        acc1 += elem1 + ":\n"
        acc1 += przeksztalcenie2[elem1].reduce(
            (acc2, elem2, indeks) => {
                acc2 += indeks + 1 + ". " + elem2 + "\n";
                return acc2;
            }, ""
        );
        return acc1;
    }, ""   
);

console.log(wynik);

const maks = listaZakupow.reduce(
    (acc, elem) => {
        if (elem.cena > acc) acc = elem.cena;
        return acc;
    }, 0
);

const sortowanie = (a, b) => {
    const wartoscA = a.cena * a.ilosc;
    const wartoscB = b.cena * b.ilosc;
    if (wartoscA > wartoscB) return 1;
    if (wartoscA < wartoscB) return -1;
    else return 0;
}

const listaZakupowPosortowana = listaZakupow.sort(sortowanie);

const znalezienieProduktow = listaZakupowPosortowana.reduce(
    ([tablica, suma], elem) => {
        const wartosc = elem.cena * elem.ilosc;
        if (wartosc < maks && suma + wartosc < maks) {
            tablica.push({ [elem.produkt]: { 'cena': wartosc}});
            suma += wartosc;
        }
        return [tablica, suma];
    }, [[], 0] 
);

console.log(znalezienieProduktow[0]);