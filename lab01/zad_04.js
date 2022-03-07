const lista = [15, 5, 3];

let czy_dodatnie = true;

for (let i = 0; i < lista.length; i++) {
    if (lista[i] < 0) {
        czy_dodatnie = false;
        break;
    }
}

if (czy_dodatnie) {
    for (let i = 0; i < lista.length; i++) {
        for (let j = 0; j < lista.length-1; j++) {
            if (lista[j] > lista[j+1]) {
                let tmp = lista[j];
                lista[j] = lista[j+1];
                lista[j+1] = tmp;
            }
        }
    }
    if (lista[0] + lista[1] >= lista[3]) {
        console.log("Można zbudować trójkąt");
    } else {
        console.log("Nie można zbudować trójkąta");
    }
} else {
    console.log("Liczby w tablicy nie są dodatnie");
}