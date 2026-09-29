# JavaScript Operator Overloading Concept

This repository contains concept code exploring what operator overloading in JavaScript might look like. The general concept follows closely with JavaScript philosophy, with type checking being manual in the body of each operator. This concept is heavily inspired by the already built-in `Symbol.toPrimitive` (use to coerce a value to a primitive) and `Symbol.hasInstance` (used to overload the `instanceof` operator).

> **Important:** The code in this repository is illustrative and will not run as written in standard JavaScript. JavaScript does not provide the `Symbol.add`, `Symbol.subtract`, or related operator hooks shown here. The examples only work if a runtime, compiler, or transformation implements the concept with the same syntax and behavior described in the code.

## Example

[`example1.js`](example1.js) sketches proposed operator hooks for `Vector2` addition, subtraction, multiplication by a number, vector dot products, division by a number, and equality/inequality. It also includes placeholders for strict equality and inequality hooks. The `console.log` statements show intended results; they are not a guarantee of what a standard JavaScript engine will produce.

[`example2.js`](example2.js) sketches operator hooks for set union, intersection, difference, symmetric difference, and subset/superset checks, delegating to the corresponding `Set` methods. The operator syntax and hook symbols are conceptual; they are not available in standard JavaScript.

## Running the code

There is no standard JavaScript setup that makes these examples work unchanged. To execute them, you would first need an implementation of the concept that defines the operator hooks and translates or evaluates overloaded operators accordingly. Without that implementation, treat the files as design sketches, not runnable programs.
