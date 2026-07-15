# JavaScript Fundamentals

# 02 - Data Types

---

# 📖 Definition

A **data type** defines the kind of value a variable can store and determines the operations that can be performed on that value.

Every value in JavaScript has a data type.

```javascript
let name = "Ashu";     // String
let age = 25;          // Number
let isAdmin = false;   // Boolean
```

---

# 🤔 Why do Data Types exist?

Computers store everything as binary (0s and 1s).

JavaScript needs a way to understand:

- How much memory to allocate
- How to interpret the stored bits
- Which operations are valid on a value

Example:

```javascript
10 + 20
```

JavaScript performs mathematical addition.

Whereas,

```javascript
"10" + "20"
```

JavaScript performs string concatenation.

The behavior changes because the data types are different.

---

# JavaScript is Dynamically Typed

Unlike Java or C++, JavaScript does **not** require declaring a variable's type.

```javascript
let value = 10;

value = "Hello";

value = true;

value = {};

value = [];
```

The same variable can hold different types of values.

---

# Primitive vs Non-Primitive Data Types

JavaScript has **8 data types**.

## Primitive Data Types (7)

Primitive values are immutable and stored by value.

- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- BigInt

---

## Non-Primitive Data Type (1)

Reference type

- Object

Everything that isn't a primitive is an object.

Examples:

```javascript
{}
[]
function(){}
new Date()
new Map()
new Set()
```

---

# Memory Representation

```
Primitive

Stack

+------+
| 100  |
+------+

Variable

a ---> 100

----------------------------

Reference Type

Stack

person --------+

Heap           |
               |
        +----------------+
        | name : "Ashu"  |
        | age : 24       |
        +----------------+
```

Primitive values are copied.

Objects are referenced.

---

# Primitive Data Types

---

# 1. String

Represents textual data.

```javascript
let name = "Ashu";
```

Single quotes

```javascript
'Hello'
```

Double quotes

```javascript
"Hello"
```

Template literals

```javascript
`Hello`
```

---

## String is Immutable

```javascript
let str = "Hello";

str[0] = "Y";

console.log(str);
```

Output

```javascript
Hello
```

Strings cannot be modified.

Instead,

```javascript
str = "Yellow";
```

creates a new string.

---

## typeof

```javascript
typeof "Hello"
```

Output

```javascript
"string"
```

---

# 2. Number

JavaScript has only one numeric type.

```javascript
let age = 25;

let pi = 3.14;

let negative = -50;
```

All are Numbers.

Unlike Java,

No separate

- int
- float
- double
- long

Everything is Number.

---

## Special Numeric Values

### Infinity

```javascript
10 / 0
```

Output

```javascript
Infinity
```

---

### -Infinity

```javascript
-10 / 0
```

Output

```javascript
-Infinity
```

---

### NaN

Means

```
Not a Number
```

Example

```javascript
Number("Hello")
```

Output

```javascript
NaN
```

---

Interesting Property

```javascript
NaN === NaN
```

Output

```javascript
false
```

Reason

NaN is never equal to anything.

Even itself.

---

Check correctly

```javascript
Number.isNaN(value)
```

---

typeof

```javascript
typeof 25
```

Output

```javascript
number
```

---

# 3. Boolean

Represents logical values.

```javascript
true

false
```

Example

```javascript
let isLoggedIn = true;
```

---

typeof

```javascript
typeof true
```

Output

```javascript
boolean
```

---

# 4. Undefined

A variable declared but not assigned.

```javascript
let age;

console.log(age);
```

Output

```javascript
undefined
```

---

typeof

```javascript
typeof undefined
```

Output

```javascript
undefined
```

---

# 5. Null

Represents intentional absence of value.

```javascript
let user = null;
```

Meaning

```
There is no user.
```

---

## Historical Bug

```javascript
typeof null
```

Output

```javascript
object
```

This is a well-known bug in JavaScript that remains for backward compatibility.

Interview favorite.

---

Difference

```javascript
undefined
```

means

> Value not assigned

Whereas

```javascript
null
```

means

> Value intentionally empty

---

# 6. Symbol

Introduced in ES6.

Creates unique identifiers.

```javascript
const id1 = Symbol();

const id2 = Symbol();

console.log(id1 === id2);
```

Output

```javascript
false
```

Every Symbol is unique.

---

Common Use Cases

- Object property keys
- Avoid property name collisions
- Internal framework implementations

---

typeof

```javascript
typeof Symbol()
```

Output

```javascript
symbol
```

---

# 7. BigInt

Introduced to handle numbers larger than Number.MAX_SAFE_INTEGER.

```javascript
const big = 123456789012345678901234567890n;
```

Notice

```
n
```

at the end.

---

Example

```javascript
Number.MAX_SAFE_INTEGER
```

Output

```javascript
9007199254740991
```

Anything larger may lose precision.

BigInt solves this.

---

typeof

```javascript
typeof 10n
```

Output

```javascript
bigint
```

---

# Reference Type

---

# Object

Objects store multiple values.

```javascript
const person = {
    name: "Ashu",
    age: 24
};
```

---

Arrays are Objects

```javascript
const arr = [1,2,3];
```

---

Functions are Objects

```javascript
function greet(){}
```

---

Dates are Objects

```javascript
new Date();
```

---

Maps

```javascript
new Map();
```

---

Sets

```javascript
new Set();
```

---

Everything above returns

```javascript
typeof value
```

Output

```javascript
object
```

Except

```javascript
typeof function(){}
```

Output

```javascript
function
```

Internally,

functions are still objects.

---

# typeof Operator

Returns the type of a value.

Examples

```javascript
typeof "Hello"
```

Output

```javascript
string
```

---

```javascript
typeof 10
```

Output

```javascript
number
```

---

```javascript
typeof true
```

Output

```javascript
boolean
```

---

```javascript
typeof undefined
```

Output

```javascript
undefined
```

---

```javascript
typeof null
```

Output

```javascript
object
```

(Historical bug)

---

```javascript
typeof {}
```

Output

```javascript
object
```

---

```javascript
typeof []
```

Output

```javascript
object
```

Arrays are objects.

To check arrays

```javascript
Array.isArray(value)
```

---

```javascript
Array.isArray([1,2,3])
```

Output

```javascript
true
```

---

```javascript
typeof function(){}
```

Output

```javascript
function
```

---

# instanceof Operator

Checks whether an object is created from a specific constructor.

```javascript
const arr = [];

console.log(arr instanceof Array);
```

Output

```javascript
true
```

---

Example

```javascript
const person = {};

console.log(person instanceof Object);
```

Output

```javascript
true
```

---

# Primitive vs Reference Comparison

Primitive

```javascript
let a = 10;

let b = a;

b = 20;

console.log(a);
```

Output

```javascript
10
```

Copied by value.

---

Reference

```javascript
const person1 = {
    name: "Ashu"
};

const person2 = person1;

person2.name = "John";

console.log(person1.name);
```

Output

```javascript
John
```

Both variables point to the same object.

---

# Common Mistakes

### Mistake 1

```javascript
typeof null
```

Expect

```
null
```

Reality

```
object
```

---

### Mistake 2

```javascript
typeof []
```

Returns

```
object
```

Use

```javascript
Array.isArray()
```

---

### Mistake 3

```javascript
NaN === NaN
```

Returns

```
false
```

Use

```javascript
Number.isNaN()
```

---

### Mistake 4

```javascript
0.1 + 0.2
```

Output

```javascript
0.30000000000000004
```

Floating-point precision issue.

---

# 🌍 Real-World Use Cases

### String

- User names
- Emails
- URLs

### Number

- Prices
- Scores
- IDs (small)

### Boolean

- Login status
- Feature flags

### Null

- API returns no data

### Undefined

- Optional function parameters

### Symbol

- Unique object keys
- Library internals

### BigInt

- Financial systems
- Scientific calculations
- Cryptography

### Object

- API responses
- User profiles
- Configuration objects

---

# 🎯 Interview Questions

### Q1. How many data types are there in JavaScript?

There are **8**:

- 7 Primitive
- 1 Reference (Object)

---

### Q2. Why is JavaScript called dynamically typed?

Because variables can hold values of different data types without explicit type declarations.

---

### Q3. Why does `typeof null` return `"object"`?

It is a historical implementation bug retained for backward compatibility.

---

### Q4. Why does `typeof []` return `"object"`?

Arrays are specialized objects.

Use:

```javascript
Array.isArray()
```

to identify arrays.

---

### Q5. Difference between `typeof` and `instanceof`?

| typeof | instanceof |
|---------|------------|
| Checks the primitive type or basic classification of a value | Checks whether an object inherits from a constructor's prototype |
| Works with primitives | Works with objects |
| Returns a string | Returns a boolean |

---

# 🔑 Key Takeaways

- JavaScript has **8 data types**.
- Primitive values are stored by value and are immutable.
- Objects are stored by reference.
- `typeof null` returning `"object"` is a historical bug.
- Arrays are objects; use `Array.isArray()` to detect them.
- Functions are callable objects.
- `BigInt` is used for integers larger than `Number.MAX_SAFE_INTEGER`.
- Use `typeof` for basic type checks and `instanceof` for object inheritance checks.

---

# ❓ Practice Questions

1. What is the output?

```javascript
typeof null
```

---

2. What is the output?

```javascript
typeof []
```

---

3. How would you correctly check if a value is an array?

---

4. Why does `NaN === NaN` return `false`?

---

5. Explain the difference between primitive and reference data types with an example.

---

6. What is the difference between `typeof` and `instanceof`?

---

7. When would you use `BigInt` instead of `Number`?

---

8. Why are strings considered immutable in JavaScript?