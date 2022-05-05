// ========================================
// ZADANIE 1
// ========================================

//  Zdefiniuj pola 'title' i 'author' i funkcję print(), która wypisze: author - title

const book0 = {
  title: "Tytuł#1",
  author: "Autor#1",
  print() {
    console.log(this.title + " - " + this.author)
  }
};

book0.print();

const book1 = {};
book1.title = "Tytuł#2"
book1.author = "Autor#2"
book1.print = function() {
  console.log(this.title + " - " + this.author)
}

book1.print();

const book2 = Object.create({});

book2.title = "Tytuł#3"
book2.author = "Autor#3"
book2.print = function() {
  console.log(this.title + " - " + this.author)
}

book2.print();

function BookCreator(title, author) {
  const b = {};
  b.title = title;
  b.author = author;
  b.print = function() {
    console.log(this.title + " - " + this.author)
  }
  return b;
}

const book3 = BookCreator("Cień wiatru", "Carlos Ruiz Zafon");
const book4 = BookCreator("Ojciech Chrzestny", "Mario Puzo");

book3.print();
book4.print();

// ========================================
// ZADANIE 2
// ========================================

// Przetestuj poniższy kod i odpowiedz na pytania

function testThis() {
  console.log(this);
}

testThis();

function testThis2() {
  "use strict";
  console.log(this);
}

testThis2();

// 2.1. Czym jest this? "this" jest wskazaniem na obiekt, na którym wywołujemy daną funkcję lub procedurę
// 2.2. Do czego odwołuje się this w obu przypadkach? odwołuje się ono do obiektu globalnego, ale z użyciem "use strict" nie jest on wyświetlany

const person = {
  name: "Oscar Wilde",
  print() {
    console.log(this.name);

    function a() {
      console.log("a: " + person.name);
    }
    a();
  },
};
person.print();

// 2.3. Jakie wartości przyjmuje this w powyższych przypadkach i dlaczego? w pierwszym przypadku "this" odwołuje się do obiektu "person", natomiast w drugim do obiektu globalnego 
// 2.4. Zmodyfikuj powyższy kod w ten sposób, aby funkcja a wyświetlała w konsoli 'a: Oscar Wilde'. Nie używaj arrow function.

const printName = function () {
  console.log(this.name);
};

const person1 = {
  name: "Aaron Towels",
  printName
};

const person2 = {
  name: "Tom Clancy",
  printName
};

person1.printName()
person2.printName()

// 2.5. Za pomocą funkcji printName wypisz 'name' obu autorów. Nie zmieniaj implementacji funkcji printName!

const person3 = {
  name: "Arthur Conan Doyle",
  print() {
    const a = () => {
      console.log(this);
    };
    a();
  },
};
person3.print();

// 2.6. Co wydrukuje w konsoli powyższy kod? Jaki scope ma arrow function? powyższy kod wydrukuje { name: 'Arthur Conan Doyle', print: [Function: print] }, ponieważ 
// => ma zasięg obejmujący cały obiekt, więc "this" odnosi się do tego obiektu, a nie obiektu globalnego

// ========================================
// ZADANIE 3
// ========================================

// Powróćmy do zadania 1.
// Dlaczego nasza funkcja BookCreator nie jest najlepszym rozwiązaniem do tworzenia obiektów?

// Zmodyfikuj funkcję BookCreator tak, aby inicjalizowała pola author i title.
// Funkcję print zadeklaruj jako wspólną dla wszystkich obiektów tworzonych przez BookCreator.
// Dopisz do tworzonych obiektów pole readers, które będzie zawierało liczbę czytelników.
// Zadeklaruj funkcję addReader, która inkrementuje pole readers. addReader powinna być funkcją wspólną, tak jak print.

function BetterBookCreator(title, author) {
  this.title = title;
  this.author = author;
  this.readers = 0;
  this.print = function() {
    console.log(this.title + " - " + this.author)
  };
  this.addReader = function() {
    this.readers++;
  };
}

const book5 = new BetterBookCreator("Tytuł", "Autor");

book5.print()

// ========================================
// * ZADANIE 4
// ========================================

console.log(book5.hasOwnProperty('isBestseller'));

// Na stworzonym obiekcie wywołaj funkcję hasOwnProperty('isBestseller').
// ========================================
// Napisz dlaczego nasz obiekt ma do niej dostęp. (jeśli wyskakuje błąd - powróć do poprzedniego zadania) Nasz obiekt ma dostęp do tej funkcji, ponieważ jest propotypem objektu "Object"

// ========================================
// * ZADANIE 5
// ========================================

// Odwołaj się do zmiennej __proto__ w stworzonym obiekcie, co zawiera ta zmienna i do czego służy?

console.log(book5.__proto__)

// zmienna ta zawiera obiekt, który jest prototypem naszego obiekty i służy do sprawdzenia, co jest prototypem