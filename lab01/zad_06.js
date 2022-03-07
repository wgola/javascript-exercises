const tablica = [5, true, "Ala"];

for (let i = 0; i < tablica.length; i++) {
    let typ = typeof tablica[i];
    if (typ == "number") {
        console.log(tablica[i] + " -> liczba");
    } else if (typ == "string") {
        console.log("\"" + tablica[i] + "\" -> tekst");
    } else {
        console.log(tablica[i] + " -> " + typ);
    }
}