'use strict';

const grupuj = (funTab1, funTab2, cb) => {
    const wynik1 = funTab1.reduce((acc, elem) => {
        const x = elem();
        acc.push(x);
        return acc;
    }, []);
    
    const wynik2 = funTab2.reduce((acc, elem) => {
        const x = elem();
        acc.push(x);
        return acc;
    }, []);

    Promise.all([Promise.all(wynik1), Promise.all(wynik2)]).then(n => {
        const tablica1 = n[0];
        const tablica2 = n[1];
        let wynik;
        if (tablica1.length > tablica2.length) {
            wynik = tablica1.reduce((acc, elem, index) => {
                if (index >= tablica2.length) {
                    acc.push([elem, 0]);
                } else acc.push([elem, tablica2[index]]);
                return acc;
            }, []);
        } else {
            wynik = tablica2.reduce((acc, elem, index) => {
                if (index >= tablica1.length) {
                    acc.push([0, elem]);
                } else acc.push([tablica1[index], elem]);
                return acc;
            }, []);
        }
        return wynik;
    }).then(n => cb(n));
};


const jeden = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(5);
        }, 7000)
    })
};

const dwa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(7);
        }, 2000)
    })
};

const trzy = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(1);
        }, 4000)
    })
};

const cztery = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(9);
        }, 5000)
    })
};

const piec = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(15);
        }, 2000)
    })
}

const callback = (tab) => {
    tab.forEach(element => {
        console.log(element);
    });
}

const funkcje1 = [jeden, dwa, trzy, cztery, piec];
const funkcje2 = [cztery, trzy, dwa, jeden];

grupuj(funkcje2, funkcje1, callback);

