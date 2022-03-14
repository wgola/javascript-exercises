'use strict';

const person1 = {
    name: 'Agata',
    age: 21
}

const person2 = {
    name: 'Tomasz',
    age: 25
}

const person3 = {
    name: 'Alicja',
    age: 31
}

const person4 = {
    name: 'Jan',
    age: 20
}

const people = [person1, person2, person3, person4];

let age = 0;
for (let i = 0; i < people.length; i++) {
    age += people[i].age;
}

console.log("Łączny wiek ludzi: " + age);
console.log("Średni wiek ludzi: " + age/people.length);