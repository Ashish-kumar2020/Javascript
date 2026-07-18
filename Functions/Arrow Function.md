# 📘 Arrow Functions

---

# Definition

An **Arrow Function** is a shorter syntax for writing functions introduced in **ES6**.

```javascript
const add = (a, b) => {
    return a + b;
};
```

---

# Syntax

## Normal Function

```javascript
function add(a, b) {
    return a + b;
}
```

↓

## Arrow Function

```javascript
const add = (a, b) => {
    return a + b;
};
```

---

# Explicit Return

When using `{}`, you must explicitly write `return`.

```javascript
const add = (a, b) => {
    return a + b;
};
```

---

# Implicit Return

If the function contains only one expression, you can omit both `{}` and `return`.

```javascript
const add = (a, b) => a + b;
```

Equivalent to

```javascript
const add = (a, b) => {
    return a + b;
};
```

---

# Parameters

## No Parameters

```javascript
const greet = () => {
    console.log("Hello");
};
```

---

## One Parameter

Parentheses are optional.

```javascript
const square = x => x * x;
```

or

```javascript
const square = (x) => x * x;
```

Both are valid.

---

## Multiple Parameters

Parentheses are mandatory.

```javascript
const add = (a, b) => a + b;
```

---

# Returning an Object

## ❌ Wrong

```javascript
const getUser = () => {
    name: "Ashu";
};
```

Output

```text
undefined
```

Reason:

JavaScript treats `{}` after `=>` as a **function body (block)**, not as an object.

Internally it parses it as:

```javascript
{
    name:   // label
    "Ashu"; // expression
}
```

Since there is no `return`, the function returns `undefined`.

---

## ✅ Correct

```javascript
const getUser = () => ({
    name: "Ashu"
});
```

Output

```javascript
{
    name: "Ashu"
}
```

Reason:

Wrapping the object inside `()` tells JavaScript to treat it as an **object expression** instead of a function body.

---

# Arrow Functions and this

## Normal Function

```javascript
const person = {
    name: "Ashu",

    greet: function () {
        console.log(this.name);
    }
};

person.greet();
```

Output

```text
Ashu
```

Reason:

Normal functions create their own `this`.

Since the function is called as

```javascript
person.greet();
```

`this` refers to `person`.

---

## Arrow Function

```javascript
const person = {
    name: "Ashu",

    greet: () => {
        console.log(this.name);
    }
};

person.greet();
```

Output

```text
undefined
```

Reason:

Arrow functions **do not have their own `this`**.

They inherit `this` from their **surrounding lexical scope**.

In this example, the surrounding scope is the global scope, so `this` refers to the global object (`window` in browsers), not `person`.

---

# Normal Function vs Arrow Function

| Normal Function | Arrow Function |
|-----------------|----------------|
| Creates its own `this` | Does not create its own `this` |
| `this` depends on how the function is called | `this` is inherited from the surrounding lexical scope |
| Suitable for object methods | Not recommended for object methods |

---

# Interview Questions

## 1. What is an Arrow Function?

An Arrow Function is a shorter syntax for writing functions introduced in ES6. It also differs from normal functions because it does not have its own `this`.

---

## 2. What is the difference between Explicit Return and Implicit Return?

**Explicit Return**

```javascript
const add = (a, b) => {
    return a + b;
};
```

**Implicit Return**

```javascript
const add = (a, b) => a + b;
```

---

## 3. Why do we wrap an object inside parentheses in an Arrow Function?

Because `{}` after `=>` is treated as a function body (block).

Wrapping the object in `()` tells JavaScript to treat it as an object expression, allowing the object to be implicitly returned.

---

## 4. Why do Arrow Functions not have their own `this`?

Arrow functions inherit `this` from their surrounding lexical scope instead of creating their own `this`.

---

## 5. When should we avoid using Arrow Functions?

Avoid using Arrow Functions for object methods because they do not have their own `this`.

Example:

```javascript
const person = {
    name: "Ashu",

    greet: () => {
        console.log(this.name);
    }
};
```

Output

```text
undefined
```

Use a normal function instead.

---

# Interview Trick Questions

## Predict the Output

### Question 1

```javascript
const test = () => {
    x: 10;
};

console.log(test());
```

Output

```text
undefined
```

---

### Question 2

```javascript
const test = () => ({
    x: 10
});

console.log(test());
```

Output

```javascript
{ x: 10 }
```

---

### Question 3

```javascript
const obj = {
    name: "Ashu",

    normal: function () {
        console.log(this.name);
    },

    arrow: () => {
        console.log(this.name);
    }
};

obj.normal();
obj.arrow();
```

Output

```text
Ashu
undefined
```

Reason:

- `normal()` creates its own `this`, so `this === obj`.
- `arrow()` inherits `this` from the surrounding lexical scope (global scope), so `this !== obj`.