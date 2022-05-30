import fetch from "node-fetch";
'use strict';

/* 
Zadanie 1.1
Za pomocą funkcji fetch wykonaj zapytanie metodą GET pod następujący url: https://jsonplaceholder.typicode.com/posts
Jako pierwszy callback - sprawdź, czy response jest poprawny (status równy 200). Jeśli tak, to zwróć response, w przeciwnym wypadku wypisz błąd w konsoli.
Jako następny callback - użyj destrukcji obiektów, aby wypisać w konsoli zmienną 'data' i 'headers'.
*/

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.status === 200 ? response : console.log("Błąd")).then(response => {
//   const { headers, body, ...reszta } = response;
//   console.log(body);
//   console.log("---");
//   console.log(headers);
// })

/* 
Zadanie 1.2 
Stwórz funkcję, która przyjmuje jako parametr obiekt takiej postaci:
{
    idUser: (pole typu int)
    title: (pole typu string)
    completed: (pole typu boolean)
}

Następnie wysyła taki obiekt za pomocą funkcji fetch pod url: https://jsonplaceholder.typicode.com/todos
Jeśli dodanie zakończy się sukcesem - wyświetli w konsoli komunikat 'Dodano' i wyświetli id dodanego obiektu. W przeciwnym wypadku wypisze błąd.
*/

function wyslij(obiekt) {
  fetch('https://jsonplaceholder.typicode.com/todos', { 
    method: 'POST',
    body: JSON.stringify({
      idUser: obiekt.idUser,
      title: obiekt.title,
      completed: obiekt.completed
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(response => response.ok ? console.log(`Dodano ${obiekt.idUser}`) : console.log("Błąd"))
}

const obiekt = {
  idUser: 5,
  title: "tytuł",
  completed: true
};

wyslij(obiekt);