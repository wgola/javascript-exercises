'use strict';

function func(tablica, funkcja) {
    const result = tablica.reduce(
        ([acc1, acc2], elem) => funkcja(elem) ? [elem, true] : [acc1, acc2], ["", false]
    );
    return result[1] ? result[0] : undefined;
}

let element = func([ 'Ala', 'Kot', 'Pies' ],  y => y === 'Ala');  
            
console.log(element);