'use strict';

const wishlist = [   
    { name: 'Czajnik', netto: 100 },  
    { name: 'Lodówka', netto: 2730 },  
    { name: 'Mikrofalówka', netto: 940 },  
    { name: 'Mikser', netto: 120 },  
    { name: 'Piekarnik', netto: 3100 }, 
    { name: 'Zmywarka', netto: 2400 },
    { name: 'Toster', netto: 260 }
  ];


const cena = wishlist.reduce(
    (acc, elem) => acc + 1.23 * elem.netto, 0
);

function func(tablica, funkcja) {
    const result = tablica.reduce(
    (acc, elem) => {
        acc.push(funkcja(elem));
        return acc;
    }, []);
    return result;            
}

const newArray = func(wishlist, x  => x.name + ': ' + x.netto);

console.log(newArray); 


const newMapArray = wishlist.map(x  => x.name + ': ' + x.netto);

console.log(newMapArray);


function func2(tablica, funkcja) {
    const result = tablica.reduce(
        (acc, elem) => {
            if (funkcja(elem)) acc.push(elem);
            return acc;
        }, []
    );
    return result;
}

const newArray2 = func2(wishlist, x => x.netto < 500);

console.log(newArray2);
