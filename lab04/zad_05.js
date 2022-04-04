'use strict';

const suma = (licznik) => licznik == 0 ? 0 : licznik + suma(licznik - 1);

console.log(suma(4));