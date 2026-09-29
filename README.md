# JavaScript Operator Overloading Concept

This repository contains concept code exploring what operator overloading in JavaScript might look like. The general concept follows closely with JavaScript philosophy, with type checking being manual in the body of each operator. This concept is heavily inspired by the already built-in `Symbol.toPrimitive` (use to coerce a value to a primi) and `Symbol.hasInstance` (used to overload the `instanceof` operator).

> **Important:** The code in this repository is illustrative and will not run as written in standard JavaScript. JavaScript does not provide the `Symbol.add`, `Symbol.subtract`, or related operator hooks shown here. The examples only work if a runtime, compiler, or transformation implements the concept with the same syntax and behavior described in the code.

## Example

[`example1.js`](example1.js) sketches a `Vector2` class with proposed hooks for addition, subtraction, multiplication (a dot product), division by a number, and equality. The `console.log` statements show the intended results; they are not a guarantee of what a standard JavaScript engine will produce.

[`example2.js`](example2.js) sketches operator hooks for set union, intersection, difference, symmetric difference, and subset/superset checks, delegating to the corresponding `Set` methods. The operator syntax and hook symbols are conceptual; they are not available in standard JavaScript.

## Running the code

There is no standard JavaScript setup that makes these examples work unchanged. To execute them, you would first need an implementation of the concept that defines the operator hooks and translates or evaluates overloaded operators accordingly. Without that implementation, treat the files as design sketches, not runnable programs.