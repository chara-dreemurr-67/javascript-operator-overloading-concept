# JavaScript Operator Overloading Concept

This repository explores one possible design for operator overloading in JavaScript. The examples use proposed `Symbol` hooks, such as `Symbol.addition`, as static methods on a class. A hook receives the left and right operands and returns the result. This sketch assumes the runtime dispatches to the left operand's class; the method can then decide how to handle the right operand.

The idea takes inspiration from JavaScript's existing well-known symbols, including `Symbol.toPrimitive` for primitive conversion and `Symbol.hasInstance` for customizing `instanceof` checks. Unlike those symbols, the operator hooks in these examples do not exist in JavaScript.

> **Important:** These files are design sketches, not runnable JavaScript. Standard JavaScript does not define `Symbol.addition`, `Symbol.subtraction`, or the other proposed operator hooks, and it does not dispatch `+`, `*`, or other operators to user-defined methods. Running the files unchanged will not produce the intended behavior.

## Examples

- [`example1.js`](example1.js) sketches `Vector2` addition, subtraction, multiplication (scalar multiplication or dot product), division, normalization with `~`, and equality checks.
- [`example2.js`](example2.js) extends the vector sketch to `Vector3`, adding a cross product using `&` and showing the same proposed arithmetic and equality hooks.
- [`example3.js`](example3.js) sketches mapping set operations to operators: union (`|`), intersection (`&`), difference (`-`), symmetric difference (`^`), and subset/superset checks (`>>` and `<<`). The hooks delegate to the corresponding `Set` methods.
- [`operators.js`](operators.js) collects a broader list of possible operator hooks, including arithmetic, bitwise, comparison, equality, in-place assignment, `typeof`, `instanceof`, and nullish coalescing. Its methods are empty placeholders intended to show the scope of the proposal, not working overloads. Some listed behavior, such as `instanceof`, has already existed standard JavaScript.

The examples illustrate possible syntax and behavior, not a finalized operator-to-symbol API or verified output. In particular, a complete design would need to specify operand dispatch (including cases where only the right operand supports an operation), fallback behavior, type errors, interaction with subclasses, and which operators can be overloaded.

## Running the code

There is no standard JavaScript setup that runs these examples unchanged. Executing them as written would require a runtime, compiler, or source transformation that implements the proposed hooks and rewrites operator expressions to call them. Until such an implementation exists, use the examples only to discuss the design.
