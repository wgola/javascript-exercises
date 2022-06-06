'use strict';

const poKolei = (fun1, fun2, cb) => {
    const argument = 5;
    fun1(argument, wynik => {
        fun2(wynik, wynik2 => {
            cb(wynik2);
        });
    });
}


const func1 = (x, cb) => {
    setTimeout(() => {
      console.log("Funkcja 1");
      // inkrementujemy x
      cb(x + 1);
    }, 4000);
}

const func2 = (x, cb) => {
    setTimeout(() => {
      console.log("funkcja 2");
       // inkrementujemy x
       cb(x + 1);
    }, 2000);
}

const cb = (data) => {
  console.log("Rezultat", data);
}

poKolei(func1, func2, cb);