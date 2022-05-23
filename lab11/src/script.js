'use strict';

let licznik = 0;

let interwal = null;

const startCounter = () => {
    interwal = setInterval( () => console.log(licznik += 1), 1000);
}

const stopCounter = () => {
    clearInterval(interwal);
}

const clearCounter = () => {
    licznik = 0;
}
