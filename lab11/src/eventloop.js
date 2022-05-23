'use strict';
// Zadanie 1.1. 
// Dopisz do pomiędzy deklaracją funkcji helloWorld a poleceniem console.log instrukcję wywołania helloWorld() tak, aby na ekranie pojawiło się jako pierwsze 'No, hello universe!'.
// Nie możesz dopisać nic za console.log()


function helloWorld() {
    console.log('Hello world!');
}

setTimeout(helloWorld, 1000)

console.log('No, hello universe!');

// Zadanie 1.2. 
// Napisz funkcję, która wypisuje w konsoli 'Start!' i po dwóch sekundach wypisuje 'Koniec'.

const funkcja1 = () => {
    console.log("Start!");
    setTimeout( () => console.log("Koniec"), 2000)
}

// funkcja1()

// Zadanie 1.3. 
// Napisz funkcję, która wypisuje 'Welcome' co sekundę w nieskończoność.

const funkcja2 = () => {
    setInterval( () => console.log("Welcome"), 1000)
}

// funkcja2()

// Zadanie 1.4. 
// Napisz funkcję, która wypisuje 'Welcome' co sekundę, ale tylko przez 5 sekund. 
// Podpowiedź: użyj clearInterval

const funkcja3 = () => {
    const interwal = setInterval( () => console.log("Welcome"), 1000)
    setTimeout( () => clearInterval(interwal), 5000)
}

// funkcja3()

// Zadanie 1.5. 
// Napisz funkcję, która przyjmuje trzy argumenty: funkcję i dwie liczby. Funkcja będzie wywołała podaną w argumencie funkcję co x ssekund i automatycznie zatrzyma się po upływie y sekund.

const funkcja4 = (funkcja, x, y) => {
    const interwal = setInterval(funkcja, x)
    setTimeout( () => clearInterval(interwal), y)
}
