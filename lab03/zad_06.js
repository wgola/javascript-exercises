'use strict';

const print = (tablica) => {
    for (let i = 0; i < tablica.length; i++) {
        console.log('"rząd ' + i + '"');
        for (let j = 0; j < tablica[i].length; j++) {
            console.log('"' + tablica[i][j] + '"');
        }
    }
}

const arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

print(arr);