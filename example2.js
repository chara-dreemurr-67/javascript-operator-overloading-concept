// another example, this one containing bitwise operators
class Vector3 extends Vector2 {
    z;

    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    }

    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }

    [Symbol.toPrimitive](hint) {
        if(hint === "string") 
            return `Vector3(${this.x}, ${this.y}, ${this.z})`;
        
        return null;
    }

    static [Symbol.addition](a, b) {
        return new Vector3(a.x + b.x, a.y + b.y, a.z + b.z);
    }

    static [Symbol.subtraction](a, b) {
        return new Vector3(a.x - b.x, a.y - b.y, a.z - b.z);
    }

    static [Symbol.multiplication](a, b) {
        // for vector * number
        if(typeof b === "number")
            return new Vector3(a.x * b, a.y * b, a.z * b);

        // for calculating dot product, assuming `b` is a vector
        return a.x * b.x + a.y * b.y + a.z * b.z;
    }

    // with `a` as a vector, and b as a number
    static [Symbol.division](a, b) {
        return new Vector3(a.x / b, a.y / b, a.z / b);
    }

    // for cross product
    static [Symbol.bitwiseAnd](a, b) {
        return new Vector3(
            a.y * b.z - a.z * b.y,
            a.z * b.x - a.x * b.z,
            a.x * b.y - a.y * b.x
        );
    }

    // for vector normalization, although an explicit `.normalize` method would be prefer for clarity
    static [Symbol.bitwiseNot](a) {
        return a / a.length;
    }

    static [Symbol.equality](a, b) {
        return a.x === b.x && a.y === b.y && a.z === b.z;
    }

    static [Symbol.inequality](a, b) {
        return a.x !== b.x || a.y !== b.y || a.z !== b.z;
        /**
         * or `return !(a == b);` if the equality code is too complex to reimplement
         * could be infer by the javascript engine as `!(a == b)` and being able to skip implementation of this method, vice versa with `Symbol.equality`
         * could also be applied to strict versions of these operators (!== and ===)
         */
    }

    static [Symbol.strictEquality](a, b) { /* strict equality if needed */ }
    static [Symbol.strictInequality](a, b) { /* strict inequality if needed */ }
}

const a = new Vector3(1, 10, 8);
const b = new Vector3(5, 11, 9);
const c = new Vector3(10, 10, 10);

console.log(a + b); // Vector3(6, 21, 17)
console.log(a - b); // Vector3(-4, -1, -1)
console.log(a * b); // 187
console.log(a * 5); // Vector3(5, 50, 40)
console.log(a / 2); // Vector3(0.5, 5, 4)
console.log(a & b); // Vector3(2, 31, -39)
console.log(~c); // roughly Vector3(0.577, 0.577, 0.577)
console.log(a == b); // false
console.log(a != b); // true