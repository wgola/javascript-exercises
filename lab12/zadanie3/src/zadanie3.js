'use strict';

class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    diff(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    }

    multiplyBy(number) {
        this.x *= number;
        this.y *= number;
    }

    toString() {
        return `x: ${this.x} y: ${this.y}`
    }
}

class Ship {
    constructor(faction, position, strength, health) {
        this.faction = faction;
        this.position = position;
        this.strength = strength;
        this.health = health;
    }

    getDistance(enemyShip) {
        return new Promise((resolve, reject) => {
        if (this.position !== undefined && enemyShip.position !== undefined) {
            resolve(this.position.diff(enemyShip.position))
        }
        else reject("Błąd danych");
    })}

    checkHealth() {
        this.health < 0 ? console.log("Statek zniszczony!") : console.log(`Zdrowie wynosi ${this.health}`);
    }

    getDamage(amount) {
        this.health -= amount;
        this.checkHealth();
    }

    makeDamage(enemyShip) {
        enemyShip.getDamage(this.strength)
    }
}

class CreateRebelShip extends Ship {
    constructor(position, strength, health) {
        super("Rebel Alliance", position, strength, health);
    }

    hyperspeed() {
        this.position = undefined;
    }
}

class DeathStar extends Ship {
    constructor(position) {
        super("Empire", position, 1000, 99999);
        this.deathRayAvailable = true;
    }

    makeDamage(enemyShip) {
        return new Promise((resolve, reject) => {
            if (this.deathRayAvailable) {
                super.makeDamage(enemyShip);
                this.deathRayAvailable = false;
                setTimeout(() => this.deathRayAvailable = true, 2000);
            }
            else reject("Promień gwiazdy śmierci jest niedostępny")
        })
    }

}

const ship1 = new CreateRebelShip(new Vector2(5, 3), 20, 100);
const ship2 = new CreateRebelShip(new Vector2(5, 3), 20, 100);

const gwiazdaSmierci = new DeathStar(new Vector2(1203, 543));

gwiazdaSmierci.makeDamage(ship1);
gwiazdaSmierci.makeDamage(ship2).catch(error => console.log(error))

setTimeout(() => gwiazdaSmierci.makeDamage(ship1), 5000)