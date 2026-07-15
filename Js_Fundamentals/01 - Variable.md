# JavaScript Fundamentals

---

# 1. Variables (`var`, `let`, `const`)

## 📖 Definition

Variables are named containers used to store values in memory.

```javascript
let name = "Ashu";
const age = 25;
var city = "Delhi";
```

---

## 🤔 Why do we have `var`, `let`, and `const`?

Initially, JavaScript only had `var`. As applications became larger, developers faced several problems:

- Variables leaking outside block scopes
- Accidental redeclaration
- Confusing hoisting behavior
- Bugs caused by shared mutable state

To solve these issues, ES6 introduced `let` and `const`.

---

# `var`

## Characteristics

- Function Scoped
- Can be redeclared
- Can be reassigned
- Hoisted and initialized with `undefined`
- Becomes a property of the global object when declared globally

### Example

```javascript
var a = 10;
var a = 20;
a = 30;

console.log(a); // 30
```

---

## Function Scope

```javascript
function demo() {
    var x = 10;
}

console.log(x);
```

### Output

```text
ReferenceError: x is not defined
```

Explanation:

`x` exists only inside the function.

---

## Block Scope

```javascript
if (true) {
    var x = 10;
}

console.log(x);
```

### Output

```javascript
10
```

Explanation:

`var` ignores block scope (`if`, `for`, `while`, etc.).

---

# `let`

## Characteristics

- Block Scoped
- Cannot be redeclared in the same scope
- Can be reassigned
- Hoisted but remains in the Temporal Dead Zone (TDZ)

### Example

```javascript
let age = 20;

age = 25;

console.log(age);
```

### Output

```javascript
25
```

---

### Redeclaration

```javascript
let age = 20;
let age = 30;
```

### Output

```text
SyntaxError: Identifier 'age' has already been declared
```

---

## Block Scope Example

```javascript
if (true) {
    let x = 10;
}

console.log(x);
```

### Output

```text
ReferenceError: x is not defined
```

Explanation:

`let` exists only inside the block.

---

# `const`

## Characteristics

- Block Scoped
- Cannot be redeclared
- Cannot be reassigned
- Hoisted but remains in the Temporal Dead Zone (TDZ)

### Example

```javascript
const PI = 3.14;

console.log(PI);
```

---

## Reassignment

```javascript
const PI = 3.14;

PI = 5;
```

### Output

```text
TypeError: Assignment to constant variable.
```

---

# Objects with `const`

A common interview question.

### Valid

```javascript
const person = {
    name: "Ashu"
};

person.name = "John";

console.log(person);
```

### Output

```javascript
{
    name: "John"
}
```

Explanation:

The object reference is constant, not the object's contents.

---

### Invalid

```javascript
const person = {
    name: "Ashu"
};

person = {};
```

### Output

```text
TypeError: Assignment to constant variable.
```

---

# 📊 Comparison Table

| Feature | var | let | const |
|----------|-----|-----|-------|
| Scope | Function | Block | Block |
| Redeclaration | ✅ | ❌ | ❌ |
| Reassignment | ✅ | ✅ | ❌ |
| Hoisted | ✅ | ✅ | ✅ |
| Temporal Dead Zone | ❌ | ✅ | ✅ |
| Global Object Property | ✅ (global scope) | ❌ | ❌ |

---

# ⚠️ Common Mistakes

## Mistake 1

```javascript
const arr = [];

arr.push(10);
```

Many developers think this throws an error.

### Reality

It is completely valid.

The array reference remains unchanged.

---

## Mistake 2

```javascript
const arr = [];

arr = [1, 2, 3];
```

### Output

```text
TypeError
```

Reason:

The reference itself is being changed.

---

## Mistake 3

```javascript
if (true) {
    var count = 10;
}

console.log(count);
```

Output

```javascript
10
```

Many developers incorrectly assume `var` is block scoped.

---

# 🌍 Real-World Example

```javascript
const API_URL = "https://api.example.com";

let currentPage = 1;

function nextPage() {
    currentPage++;
}
```

Why?

- `API_URL` should never change → `const`
- `currentPage` changes over time → `let`

---

# 🎯 Interview Questions

### Q1. Difference between `var`, `let`, and `const`?

- `var` is function scoped.
- `let` and `const` are block scoped.
- `var` allows redeclaration.
- `let` allows reassignment.
- `const` allows neither reassignment nor redeclaration.

---

### Q2. Why was `let` introduced?

To solve the problems caused by `var`, especially lack of block scope and accidental redeclaration.

---

### Q3. Why is `const` preferred?

Because immutable references make code more predictable and reduce accidental bugs.

---

### Q4. Can a `const` object be modified?

Yes.

Its properties can change, but the reference cannot.

---

### Q5. Which should you use?

- Use **`const`** by default.
- Use **`let`** only when reassignment is required.
- Avoid **`var`** in modern JavaScript unless maintaining legacy code.

---

# 🔑 Key Takeaways

- `var` is function scoped.
- `let` and `const` are block scoped.
- `const` prevents reassignment, not object mutation.
- `let` and `const` live inside the Temporal Dead Zone (TDZ).
- Prefer `const` by default.
- Use `let` only when values need to change.
- Avoid `var` in modern JavaScript.

---

# ❓ Practice Questions

1. What will be the output?

```javascript
if (true) {
    var a = 10;
}

console.log(a);
```

---

2. What will be the output?

```javascript
if (true) {
    let a = 10;
}

console.log(a);
```

---

3. Is this valid?

```javascript
const user = {
    name: "Ashu"
};

user.name = "Alex";
```

---

4. Which keyword should you use for configuration values?

---

5. Explain the difference between reassignment and mutation.