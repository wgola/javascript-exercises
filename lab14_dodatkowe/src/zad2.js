'use strict';

const connnect = (funTab, fun) => {
    const kolumna1 = funTab.reduce((acc, elem) => {
        const tmp = elem();
        acc.push(tmp);
        return acc;
    }, []);
    Promise.all(kolumna1).then(dane => {
        const kolumna2 = dane.reduce((acc, elem) => {
            const tmp = fun(elem);
            acc.push(tmp);
            return acc;
        }, []);
        Promise.all(kolumna2).then(wyniki => {
            const wynik = dane.reduce((acc, elem, index) => {
                acc.push([elem, wyniki[index]]);
                return acc;
            }, []);
            console.log(wynik);
        })
    })
}


const fun1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(5), 1000);
    });
}

const fun2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(3), 1000);
    });
}

const fun3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(7), 1000);
    });
}

const fun4 = (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(n * 5), 1000);
    });
}

connnect([fun1, fun2, fun3], fun4);
