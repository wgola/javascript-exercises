let a = [-4321, 4232, 3213, 54, 125, 436, -437, 128, 49, 1510, -411];

console.log("Elementy tablicy: ")

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

let min = a[0];

for (let i = 0; i < a.length; i++) {
    if (a[i] < min) {
        min = a[i];
    }
}

console.log("Wartość najmniejsza: " + min);


// let tmp = a[0];
// a[0] = a[a.length-1];
// a[a.length-1] = tmp;    

for (let i = 0; i < a.length/2; i++) {
    let tmp = a[i];
    a[i] = a[a.length-1-i];
    a[a.length-1-i] = tmp;    
}

console.log("Odwrócona tablica: ");

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}