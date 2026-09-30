// a collection of possible operators include ones that aren't in the examples
class Operators {
    static [Symbol.addition](a, b) { } // +
    static [Symbol.subtraction](a, b) { } // -
    static [Symbol.multiplication](a, b) { } // *
    static [Symbol.division](a, b) { } // /
    static [Symbol.modulo](a, b) { } // %
    static [Symbol.exponent](a, b) { } // **
    static [Symbol.increment](a) { } // ++
    static [Symbol.decrement](a) { } // --

    static [Symbol.bitwiseAnd](a, b) { } // &
    static [Symbol.bitwiseOr](a, b) { } // |
    static [Symbol.bitShiftLeft](a, b) { } // <<
    static [Symbol.bitShiftRight](a, b) { } // >>
    static [Symbol.zeroFill](a, b) { } // >>>
    static [Symbol.bitwiseNot](a) { } // ~

    static [Symbol.equality](a, b) { } // ==. implicitly returns !(a != b) if Symbol.inequality has been implemented or follow custom implementation
    static [Symbol.inequality](a, b) { } // !=. implicitly returns !(a == b) if Symbol.equality has been implemented or follow custom implementation
    static [Symbol.strictEquality](a, b) { } // ===. implicitly returns !(a !== b) if Symbol.strictInequality has been implemented or follow custom implementation
    static [Symbol.strictInequality](a, b) { } // !==. implicitly returns !(a === b) if Symbol.strictEquality has been implemented or follow custom implementation
    static [Symbol.greaterThan](a, b) { } // >
    static [Symbol.lessThan](a, b) { } // <
    static [Symbol.greaterThanOrEqualTo](a, b) { } // >=. implicitly returns (a > b || a === b) if Symbol.strictEquality (or Symbol.equality, Symbol.strictEquality take precedent if both have been implemented) and Symbol.greaterThan have been implemented or follow custom implementation
    static [Symbol.lessThanOrEqualTo](a, b) { } // <=. implicitly returns (a < b || a === b) if Symbol.strictEquality (or Symbol.equality, Symbol.strictEquality take precedent if both have been implemented) and Symbol.lessThan have been implemented or follow custom implementation
    static [Symbol.hasInstance](a) { } // instanceof. this is already existed in vanilla javascript but i wanted to include it as an example of operator overloading

    static [Symbol.ofType](a) { } // typeof

    // generally, allowing overloading those operators isn't a good idea as it can cause more confusion, but it could be a possibility, for whatever reason
    static [Symbol.inPlaceAddition](a, b) { } // +=
    static [Symbol.inPlaceSubtraction](a, b) { } // -=
    static [Symbol.inPlaceMultiplication](a, b) { } // *=
    static [Symbol.inPlaceDivision](a, b) { } // /=
    static [Symbol.inPlaceModulo](a, b) { } // %=
    static [Symbol.inPlaceExponent](a, b) { } // **=
    static [Symbol.nullish](a, b) { } // ??
}