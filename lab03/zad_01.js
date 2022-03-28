'use strict';

// Poniższe fragmenty kodu zostały zakomentowane w celu utrzymania porządku. 
// Odkomentowuj je na bieżąco i zapisuj odpowiedzi w komentarzu. 
// Ostatecznie przed wrzuceniem pliku na repozytorium zakomentowane powinny być tylko dodane odpowiedzi i fragmenty kodu powodujące ewentualne błędy.

// ========================= Zadanie 1 =========================
// Co zwróci funkcja poniższa funkcja w każdym z poniższych przypadków?
// Wyjaśnij, dlaczego w niektórych przypadkach wyniki różnią się.

// ========================== UWAGA =============================
// Zapis 
// (impression) ? console.log('A') : console.log('B');
// Jest skróconą wersją:
// if (impression) {
//     console.log('A');
// } else {
//     console.log('B');
// }
// ==============================================================

function isEquals(val_1, val_2) {
    (val_1 == val_2) ? console.log('A') : console.log('B');
    (val_1 === val_2) ? console.log('C') : console.log('D');
}

isEquals(2, '2');    //A, D    
isEquals(null, undefined);   //A, D
isEquals(undefined, NaN);    //B, D
isEquals(['a', 'b', 'c'], ['b', 'c', 'd']);  //B, D
isEquals(0, '');     //A, D
isEquals('0', '');   //B, D
isEquals(+0, -0);    //A, C
isEquals(0, false);  //A, D
isEquals(0, 'false');    //B, D
isEquals([1, 2], '1,2'); //A, D

// Wyniki różnią się, ponieważ nie zawsze kiedy dwa argumenty mają tą samą wartość mają też ten sam typ

console.log(!!false);   //false
console.log(!!true);    //true
console.log(!!undefined);   //false
console.log(!!null);    //false

// ========================= Zadanie 2 =========================
// Jaki będzie efekt działania poniższego fragmentu kodu?
// Wyjaśnij wynik

const person = {
    firstName: 'Jan',
    lastName: 'Kowalski'
}

console.log(person); // Wyświetli się obiekt "person"
// person = {}; // Wystąpi błąd próby przypisania nowej wartości do stałej
console.log(person); // Wyświetli się obiekt "person"

// ========================= Zadanie 3 =========================
// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

let number = 3;
console.log(number); {
    let number = 4;
    console.log(number);
}
console.log(number);

// Najpierw zostanie wyświetlona liczba "3", potem "4" a potem "3". Dzieje się tak z powodu 
// zasięgu blokowego zmiennej number

// ========================= Zadanie 4 =========================
// Czym się różnią poniższe dwa fragmenty kodu?
// Jak działa operator '...'?

const arr = [1, 2];
const newArr1 = [arr, 3, 4];
console.log(newArr1);
const newArr2 = [...arr, 3, 4];
console.log(newArr2);

// Najpierw zostanie wyświetlone [ [1, 2], 3, 4], a następnie [1, 2, 3, 4]. Operator '...' "rozwija" tablicę i 
// powoduje przekazanie jej elementów, a nie całej tablicy

// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

const word = 'javascript';
const arrWord = [...word];
console.log(arrWord);

// Zostanie zwrócona tablica [ 'j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't' ], ponieważ napis 'javascript' zostanie
// "rozwinięty" do pojedynczych znaków

// ========================= Zadanie 5 =========================
// Zapoznaj się z kodem poniżej. Jaki będzie jego wynik i dlaczego?

var hello = 'Hello world!';
var result = hello / 2;

result; 

Number.isNaN(result);   // 'result' przyjmie wartość NaN, więc to sprawdzenie przyjmie wartość 'true'
Number.isNaN(hello);    // 'hello' nie jest NaN, więc to sprawdzenie zwróci 'false'

// ========================= Zadanie 6 =========================
// Zapoznaj się z przykładami poniżej. Jaka jest różnica między var a let/const?

var car = 'BMW';

function showCar() {
    car = 'Audi';
    // model = 'A5';
    console.log('Great car!');
}

showCar();

car;
// model;

// przy próbie przypisania wartości do zmiennej 'model' w funkcji showCar() oraz przy późniejszym odwołaniu się do 
// tej zmiennej wystąpi błąd, ponieważ ta zmienna nie została wcześniej zdefiniowana. Po wywołaniu wartość zmiennej
// car = 'Audi'.

// -------

var name = 'Bryan';

(function differentName() {
    var name = 'Adam';
    console.log(name);
})();

console.log(name);

// Zmienna 'name' w funkcji differentName() obowiązuje w zakresie blokowym tej funkcji, a funkcja 'name' na górze
// obowiązuje w całym fragmencie tego programu, dlatego najpierw przy wywołaniu funkcji wyświetli się 'Adam', a potem
// 'Bryan' 

// -------

if (true) {
    var a = 2;
}
console.log(a);

if (true) {
    const b = 2;
}
// console.log(b);

// Ponieważ 'b' jest stałą, to jej zasięg ogranicza się do warunku w którym została zdefiniowana, więc przy próbie
// odwołania się do niej za warunkiem powstaje błąd

// -------

for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);

for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);

// Po wykonaniu się pierwszej pętli, zmienna i ciągle ma swoją wartość poza pętlą, ponieważ jest określona jako 'var',
// console.log(i) wyświetla jej wartość (10). W drugiej pętli zmienna let obowiązuje tylko wewnątrz pętli, ale 
// po niej znowu wyświetlona jest wartość zmiennej określonej przez var.

// -------

var test = "var1";
var test = "var2";

let test2 = "let1";
// let test2 = "let2";

// Zmienna zadeklarowana przez 'var' może zostać ponownie zadeklarowana z tą samą nazwą, natomiast przy próbie takiego
// zadeklarowania zmiennej 'let' występuje błąd 

// ========================= Zadanie 7 =========================
// Do czego używany jest 'use strict' w pierwszej linijce skryptu?

// Poprzez 'use strict' wymuszamy przestrzeganie zasad pisania kodu w JavaScript, a także upewniamy się,
// że błędy zostaną wykryte i zgłoszone, a nie pozostaną 'niezauważone'