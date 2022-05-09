"use strict";

class Fraction {
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    multiplyBy(arg) {
        if (typeof arg === "object") {
            this.numerator *= arg.numerator;
            this.denominator *= arg.denominator;
        }
        else {
            this.numerator *= arg;
        }
    }

    static multiply(arg1, arg2) {
        const num = arg1.numerator * arg2.numerator;
        const den = arg1.denominator * arg2.denominator;
        return new Fraction(num, den);
    }

    print() {
        console.log(this.numerator + "/" + this.denominator);
    }
}

const ulamek = Fraction.multiply(new Fraction(3, 5), new Fraction(3, 6));

ulamek.print();