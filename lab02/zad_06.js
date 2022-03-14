'use strict';

const cat = { 
    name: 'Filemon', 
    age: 6 
}

cat.description = "Kot ma na imię " + cat.name + " i ma " + cat.age + " lat.";

cat.breed = "pers";

cat.colour = "biała";

cat.description += " Rasa tego kota to: " + cat.breed + ". Jego sierść jest " + cat.colour + ".";

console.log(cat)