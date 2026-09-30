// an example of the possibily of operator overloading
// as in the built-in Set class
class Set {
    // existing codes

    // python-like set operations
    // wrappers for existing set operations introduced in es2025

    // set union
    static [Symbol.bitwiseOr](a, b) {
        // calling the es2025 Set.prototype.union()
        return a.union(b);
    }
    
    // set intersection
    static [Symbol.bitwiseAnd](a, b) {
        // calling the es2025 Set.prototype.intersection()
        return a.intersection(b);
    }

    // set difference
    static [Symbol.subtraction](a, b) {
        // calling the es2025 Set.prototype.difference()
        return a.difference(b);
    }

    // set symmetric difference
    static [Symbol.bitwiseXor](a, b) {
        // calling the es2025 Set.prototype.symmetricDifference()
        return a.symmetricDifference(b);
    }

    // these aren't part of python but i think they would be good additionitions

    // check if a is subset of b
    static [Symbol.bitShiftRight](a, b) {
        // calling the es2025 Set.prototype.isSubsetOf()
        return a.isSubsetOf(b);
    }

    // check if a is superset of b
    static [Symbol.bitShiftLeft](a, b) {
        // calling the es2025 Set.prototype.isSupersetOf()
        return a.isSupersetOf(b);
    }

    // maybe a isDisjointFrom operator here although i ran out of operators to use that actually make sense
}