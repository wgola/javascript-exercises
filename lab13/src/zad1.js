'use strict';

const poKolei = (fun1, fun2, cb) => {
    function async(funkcja, argumenty, callback) {
        const tmp = funkcja(argumenty);
        callback(tmp);
    }
    return async(fun1, 5, (dane) => {
        async(fun2, dane, cb)
    })
}

const fun1 = (x) => {
    setTimeout(() => {
        console.log("Funkcja1");
        return x + 1;
    }, 2000);
}

const fun2 = (x) => {
    console.log("Funkcja2");
    return x + 2;
}

const cb = (x) => {
    console.log(x);
}

poKolei(fun1, fun2, cb);