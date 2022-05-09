// 1. Uprość funkcję BookCreator z poprzednich zajęć tak, aby zawierała tylko nadawanie wartości polom. (użyj operatora this) 
// Dodaj wywołanie słowa kluczowego new, przy wywołaniu BookCreator(). 

function BookCreator(title, author) {
    this.title = title;
    this.author = author;
    this.readers = 0;
  }

// BookCreator jest konstruktorem, a je zawsze (ZAWSZE) deklarujemy zaczynając nazwę od wielkiej litery

// 1.1. Użyj zmiennej prototype, aby dodać funkcje print() i addReader() do tworzonych obiektów.

BookCreator.prototype = {
    print: function() {
        console.log(this.title + " - " + this.author)
    },
    addReader: function() {
        this.readers++;
    }
}

const book = new BookCreator("Tytuł", "Autor");

book.print();

// 2. Tworzymy alternatywną wersję powyższego kodu. Użyj słów kluczowych class i constructor, aby osiągnąć powyższy efekt.

class AnotherBookCreator {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.readers = 0;
    }

    print() {
        console.log(this.title + " - " + this.author);
    }

    addReader() {
        this.readers++;
    }
}

const book2 = new AnotherBookCreator("Tytuł", "Autor");

book2.print()

// 3. Znasz już wiele sposób na stworzenie obiektu. Dlaczego więc nie użyć arrow function?
// Uzupełnij poniższy kod o inicjalizację pola name i age. Dodaj wewnąrz funkcję addAge, która inkrementuje wiek. 

const Person = (name, age) => ({
    name: name,
    age: age,
    addAge: function() {
        this.age++;
    }
});


// Przetestuj działanie tak stworzonego obiektu, korzystając z wiedzy, którą już masz. Jakie są róznice pomiędzy stworzeniem obiektu za pomocą poprzednich metod?
// (przetestuj prototype, new itd.)

Person.prototype = {
    print: function() {
        console.log(this.name);
    }
}

// const osoba = new Person("imie", 0);

// osoba.print();

// Zarówno "new" jak i "prototype" nie działają, ponieważ "Person" to funkcja a nie klasa albo konstruktor.