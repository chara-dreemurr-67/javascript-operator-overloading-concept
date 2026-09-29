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

        // for calculating dot product, assuming b is a vector
        return a.x * b.x + a.y * b.y;
    }

    // with 'a' as a vector, and b as a number
    static [Symbol.divide](a, b) {
        return new Vector2(a.x / b, a.y / b);
    }

    static [Symbol.equality](a, b) {
        return a.x === b.x && a.y === b.y;
    }

    static [Symbol.inequality](a, b) {
        return a.x !== b.x || a.y !== b.y;
    }

    static [Symbol.strictEquality](a, b) { /* strict equality if needed */ }
    static [Symbol.strictInequality](a, b) { /* strict inequality if needed */ }
}

const a = new Vector2(1, 10);
const b = new Vector2(5, 11);

console.log(a + b); // Vector2(6, 21)
console.log(a - b); // Vector2(-4, -1)
console.log(a * b); // 115
console.log(a / 2); // Vector2(0.5, 5)
console.log(a == b); // false
console.log(a != b); // true