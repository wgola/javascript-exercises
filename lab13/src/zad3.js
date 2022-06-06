'use strict';

const axios = require('axios').default;

const lodash = require('lodash');

const wszystkie = [];

const tmp = [1, 2, 3, 4, 5];

tmp.forEach(n => {
    const losowa = lodash.random(0, 99);
    const post = axios.get(`https://jsonplaceholder.typicode.com/posts/${losowa}`).then(n => {
    const { title, body, ...reszta} = n.data;
    return { "title": title, "body": body};
    });
    const comment = axios.get(`https://jsonplaceholder.typicode.com/posts/${losowa}/comments`).then(n => {
        const wynik = n.data.reduce((acc, elem) => {
            const { name, email, body, ...reszta } = elem;
            acc.push({ "name": name, "email": email, "body": body });
            return acc;
        }, [])
        return wynik;
    });

    wszystkie.push(Promise.all([post, comment]).then(n => { 
        return { "entry": n[0], "comments": n[1] }; 
    }))
});

Promise.all(wszystkie).then(tab => tab.reduce((acc, elem) => {
    acc.push(elem);
    return acc;
}, [])).then(n => n.forEach((n) => console.log(n)))

