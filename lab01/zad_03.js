const b = [-4321, 4232, 3213, 54, 125, 436, -437, 128, 49, 1510, -411];

console.log("Elementy tablicy: ")

for (let i = 0; i < b.length; i++) {
    console.log(b[i]);
}

let min = b[0];

for (let i = 0; i < b.length; i++) {
    if (b[i] < min) {
        min = b[i];
    }
}

console.log("Wartość najmniejsza: " + min);


// let tmp = b[0];
// b[0] = b[b.length-1];
// b[b.length-1] = tmp;    

for (let i = 0; i < b.length/2; i++) {
    let tmp = b[i];
    b[i] = b[b.length-1-i];
    b[b.length-1-i] = tmp;    
}

console.log("Odwrócona tablica: ");

for (let i = 0; i < b.length; i++) {
    console.log(b[i]);
}