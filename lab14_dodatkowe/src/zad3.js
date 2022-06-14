'use strict';

function razem(promiseTab, callback) {
    const wyniki = [];
    promiseTab.forEach(n => {
        n.then(x => wyniki.push(x));
    });
    const sprawdzenie = setInterval(() => {
        if (wyniki.length === promiseTab.length) {
            clearInterval(sprawdzenie);
            callback(wyniki);
        }; 
    }, 1);
}

const obietnica1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(5), 4000);
})

const obietnica2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(4), 6000);
})

const obietnica3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(6), 1000);
})

const callback = (tab) => console.log(tab);

razem([obietnica1, obietnica2, obietnica3], callback);
