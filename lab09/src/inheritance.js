'use strict';

// 1.1 
// Co wyświetlą na ekranie poniższe wywołania?

const book = {
    title: "Potop",
    author: "Henryk Sienkiewicz"
}

// console.log(book.__proto__ === Object.prototype);
// console.log(book.__proto__.__proto__ === null);

// Oba wyświetlą "true"

// 1.2. 
// Zastanów się, co należy wpisać w miejsce ..., tak aby każde wywołanie po odkomentowaniu zwróciło true.

const animals = ["dog", "cat", "rabbit", "hamster"];

// console.log(animals.__proto__ === Array.prototype);
// console.log(animals.__proto__.__proto__ === Object.prototype);
// console.log(animals.__proto__.__proto__.__proto__ === null);

// 1.3. 
// Co zostanie wyświetlone na ekranie w poniższym przykładzie?

function Animal(animal) {
    this.animal = animal;
}

var dog = new Animal('dog');
var cat = new Animal('cat');
dog.whatIs = function () {
    console.log("It's a " + this.whatIs());
}

// console.log(dog.__proto__ === Animal.prototype);
// console.log(dog.__proto__ === cat.__proto__);

// Oba wyświetlą "true"

// 1.4.
// Stwórz obiekt za pomocą funkcji CreateMovie (zawierający klucze bez wartości: director, title, year) wykorzystując słówko `this`.
// Jeśli przy tworzeniu obiektu rok nie zostanie podany powinien przyjmować wartość "unknown".

function CreateMovie(director, title, year) {
    this.director = director;
    this.title = title;
    this.year = year || "unknown";
}

// Następnie nie zmieniając implementacji funkcji CreateMovie, dodaj do niego metody: 
// * isOlder(year) - zwracającą true/false w zależności od tego, czy podany film jest młodszy/starszy nić rok 2000.
// * print - wyświetlającą: "director: title (year)"

CreateMovie.prototype = {
    isOlder: function(rok) {
        if (this.year === "unknown") return false;
        else return this.year > rok;
    },
    print: function() {
        console.log(this.director + ": " + this.title + " (" + this.year + ")");
    }
}

const test = new CreateMovie("rez", "tytul");

console.log(test.isOlder(1999));

// 1.5.
// Uzupełnij poniższy konstruktor o inicjalizację name, type i funkcję printInstrument. Funkcja printInstrument powinna być współdzielona między wszystkie utworzone obiekty.

function CreateInstrument(name, type) {
   const instrument = Object.create({
       printInstrument: function() {
           console.log("nazwa: " + this.name + ", typ: " + this.type)
       }
   });
   instrument.name = name;
   instrument.type = type;
   return instrument;
}


// 1.6. 
// Uzupełnij poniższy konstruktor, który tworzy obiekt dziedziczący po Instrument. Wykorzystaj do jego stworzenia konstruktor z zadania poprzedniego.
// Zdefiniuj funkcję setStrings(number), która ustala liczbę strun w instrumencie (ta funkcja też powinna być współdzielona). NewStringInstrument powinien mieć też dostęp do funkcji, która znajduje się w Instrument.
// Podpowiedź: aby zmienić wartość zmiennej __proto__ należy użyć - Object.setPrototypeOf(object, prototype) - należy użyć tej funkcji dwa razy w tym rozwiązaniu. 

function CreateStringedInstrument(name, type, stringsCount) {
    const newStringedInstrument = Object.setPrototypeOf({}, Object.setPrototypeOf(
        { stringsCount: stringsCount,
        setStrings: function(number) {
            this.stringsCount = number;
        }}, CreateInstrument(name, type)));
    
    return newStringedInstrument;
}

const stringedInstrument = CreateStringedInstrument('gitara', 'strunowy', '3');
stringedInstrument.printInstrument();
stringedInstrument.setStrings(5);
console.log(stringedInstrument.name);
console.log(stringedInstrument.stringsCount)

// 1.7. 
// Przeanalizuj poniższy kod i odpowiedz na umieszczone w nim pytania.

function Instrument(name, type) {
    this.name = name;
    this.type = type;
}

Instrument.prototype.printInstrument = function (name, type) {
    console.log("Instrument: " + name + ", typ: " + type);
}

function StringedInstrument(stringsCount, name, type) {
    Instrument.apply(this, [name, type]);
    this.stringsCount = stringsCount;
}

StringedInstrument.prototype = Object.create(Instrument.prototype);

// a) Stwórz instancję StringedInstrument.

const strunowy = new StringedInstrument(5, "gitara", "elektryczna");

// b) W jaki sposób odwołać się do metody printInstrument?

strunowy.printInstrument.call(strunowy, strunowy.name, strunowy.type);

// c) Zastąp wywołanie call() funkcją apply() 

// 1.8.
// Utwórz obiekt Animal z polem 'name' i funkcją printName, po którym będą dziedziczyły Mammal (z polem age i funkcją getAge) i Fish (z polem weight i funkcją increaseWeight()). 
// Następnie stwórz kolejne obiekty - Dog (z polem breed i nadpisaniem funkcji getAge(), która tutaj będzie najpierw wywoływała funkcję getAge() z klasy dziedziczonej, 
// a następnie mnożyła wynik razy 4 i wyświetlała go) i Salmon (z funkcją catch()), które będą dziedziczyły odpowiednio po Mammal i Fish.
// W razie problemów wzoruj się na rozwiązaniu z poprzedniego zadania.

function Animal2(name) {
    this.name = name;
}

Animal2.prototype.printName = function() {
    console.log("imie: " + this.name)
};

function Mammal(name, age) {
    Animal2.call(this, name);
    this.age = age;
}

Mammal.prototype = Object.create(Animal2.prototype);
Mammal.prototype.getAge = function() {
    return this.age;
};

function Fish(name, weight) {
    Animal2.call(this, name);
    this.weight = weight;
}

Fish.prototype = Object.create(Animal2.prototype);
Fish.prototype.increaseWeight = function() {
    this.weight ++;
};

function Dog(name, age, breed) {
    Mammal.call(this, name, age);
    this.breed = breed;
}

Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.getAge = function() {
    return 4 * Mammal.prototype.getAge.call(this);
}

function Salmon(name, weight) {
    Fish.call(this, name, weight);
}

Salmon.prototype = Object.create(Fish.prototype);
Salmon.prototype.catch = function() {
    this.printName();
    console.log("waga: " + this.weight);
}