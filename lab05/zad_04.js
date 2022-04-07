'use strict';

const input = [ 
    { id: 'abc', name: 'Ala' }, 
    { id: 'def', name: 'Tomek' }, 
    { id: 'ghi', name: 'Jan' } 
  ];

const wynik = input.reduce(
    (acc, elem) => {
        acc.push({ [elem.id]: elem});
        return acc; 
    }, []
);

console.log(wynik);