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

let avg = age/people.length;

const under = [];

const over = [];

for (let i = 0; i < people.length; i++) {
    if (people[i].age < avg) {
        under.push(people[i].name);
    } else {
        over.push(people[i].name);
    }
}

console.log(under);
console.log(over);