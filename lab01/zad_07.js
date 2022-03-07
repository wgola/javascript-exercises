const tablica = [1, 5, 6, 5, 5, 1, 5];

const ile = [];

for (let i = 0; i < tablica.length; i++) {
    let wystapienia = 0;
    for (let j = 0; j < tablica.length; j++) {
        if (tablica[i] == tablica[j]) {
            wystapienia++;
        }
    }
    ile[i] = wystapienia;
}

for (let i = 0; i < tablica.length; i++) {
    let odp = " razy";
    if (ile[i] == 1) {
        odp = " raz";
    }
    console.log(tablica[i] + " występuje " + ile[i] + odp)
}