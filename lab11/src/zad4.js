'use strict';

const counter = (x, y) => {
    let licznik = 0;
    return function() {
        const interwal = setInterval( () => console.log(licznik += 1), y);
        setTimeout( () => clearInterval(interwal), (x + 1) * y);   
    }
}

const test = counter(10, 100);

test()