// an example of the possible implementation and invocation of operator overload
class Vector2 {
    x;
    y;

    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    [Symbol.toPrimitive](hint) {
        if(hint === "string") 
            return `Vector2(${this.x}, ${this.y})`;
        
        return null;
    }

    // maybe the first argument of the operators is guarantee to be an instance of the class by the javascript engine
    // so in this example `a` would always be a vector while `b` can be anything and needed to perform a manual type check in order to response accordingly (proceed with the operation/throw error/etc...)

    static [Symbol.add](a, b) {
        return new Vector2(a.x + b.x, a.y + b.y);
    }

    static [Symbol.subtract](a, b) {
        return new Vector2(a.x - b.x, a.y - b.y);
    }

    static [Symbol.multiply](a, b) {
        // for vector * number
        if(typeof b === "number")
            return new Vector2(a.x * b + a.y * b);

        // for calculating dot product, assuming `b` is a vector
        return a.x * b.x + a.y * b.y;
    }

    // with `a` as a vector, and b as a number
    static [Symbol.divide](a, b) {
        return new Vector2(a.x / b, a.y / b);
    }

    static [Symbol.equality](a, b) {
        return a.x === b.x && a.y === b.y;
    }

    static [Symbol.inequality](a, b) {
        return a.x !== b.x || a.y !== b.y;
        /**
         * or `return !(a == b);` if the equality code is too complex to reimplement
         * could be infer by the javascript engine as `!(a == b)` and being able to skip implementation of this method, vice versa with `Symbol.equality`
         * could also be applied to strict versions of these operators (!== and ===)
         */
    }

    static [Symbol.strictEquality](a, b) { /* strict equality if needed */ }
    static [Symbol.strictInequality](a, b) { /* strict inequality if needed */ }

    // another possible way to implement operator overloading (inspired by c++-style operator overloading) or just syntatic sugar that get converted back to Symbol hooks under the hood by the engine, applies to the other operators
    // maybe overloadings are implicitly static so there will be no need for the static keyword every time
    static operator +(a, b) {
        return new Vector2(a.x + b.x, a.y + b.y);
    }
}

const a = new Vector2(1, 10);
const b = new Vector2(5, 11);

console.log(a + b); // Vector2(6, 21)
console.log(a - b); // Vector2(-4, -1)
console.log(a * b); // 115
console.log(a / 2); // Vector2(0.5, 5)
console.log(a == b); // false
console.log(a != b); // true