# 📘 JavaScript Rest Operator (`...`)

---

# What is the Rest Operator?

The **Rest Operator (`...`)** collects multiple values into a single array or object.

It is commonly used in:

- Array Destructuring
- Object Destructuring
- Function Parameters

---

# Rest with Arrays

```javascript
const arr = [10, 20, 30, 40];

const [a, ...rest] = arr;

console.log(a);
console.log(rest);
```

Output

```text
10
[20, 30, 40]
```

---

# Collect Remaining Elements

```javascript
const arr = [10, 20, 30, 40];

const [a, b, ...rest] = arr;

console.log(a);
console.log(b);
console.log(rest);
```

Output

```text
10
20
[30, 40]
```

The Rest Operator collects all remaining elements into a single array.

---

# Rest with Objects

```javascript
const person = {
    name: "Ashu",
    age: 24,
    city: "Delhi"
};

const { name, ...rest } = person;

console.log(name);
console.log(rest);
```

Output

```javascript
Ashu

{
    age: 24,
    city: "Delhi"
}
```

The Rest Operator collects the remaining properties into a new object.

---

# Rest in Function Parameters

```javascript
function sum(...numbers) {
    console.log(numbers);
}

sum(10, 20, 30, 40);
```

Output

```text
[10, 20, 30, 40]
```

The Rest Operator collects all function arguments into an array.

---

# Spread vs Rest

## Spread

Expands values.

```javascript
const arr = [10, 20, 30];

const copy = [...arr];
```

Think

```text
[10,20,30]

↓

10,20,30
```

One collection becomes multiple values.

---

## Rest

Collects values.

```javascript
const arr = [10, 20, 30];

const [a, ...rest] = arr;
```

Think

```text
10,20,30

↓

[10,20,30]
```

Multiple values become one collection.

---

# Easy Trick ⭐⭐⭐⭐⭐

## Spread

`...` is usually on the **right side** of `=`.

```javascript
const copy = [...arr];
```

It **expands** values.

---

## Rest

`...` is usually on the **left side** of `=`.

```javascript
const [a, ...rest] = arr;
```

It **collects** values.

---

# Function Example

```javascript
function print(first, ...others) {

    console.log(first);

    console.log(others);

}

print(10, 20, 30, 40);
```

Output

```text
10

[20, 30, 40]
```

---

# Interview Questions

## What is the Rest Operator?

The Rest Operator (`...`) collects multiple values into a single array or object.

---

## Where is the Rest Operator used?

- Array Destructuring
- Object Destructuring
- Function Parameters

---

## What is the difference between Spread and Rest?

### Spread

Expands elements or properties.

```javascript
const copy = [...arr];
```

---

### Rest

Collects remaining elements or properties.

```javascript
const [a, ...rest] = arr;
```

---

## Can the Rest Operator be used in function parameters?

Yes.

```javascript
function sum(...numbers) {}
```

All arguments are collected into the `numbers` array.

---

## What does this print?

```javascript
function greet(name, ...skills) {
    console.log(name);
    console.log(skills);
}

greet("Ashu", "JS", "React", "Node");
```

Output

```text
Ashu

["JS", "React", "Node"]
```

---

# ⭐ Quick Revision

## Rest

Collects values.

---

## Array

```javascript
const [a, ...rest] = arr;
```

---

## Object

```javascript
const { name, ...rest } = person;
```

---

## Function

```javascript
function sum(...numbers) {}
```

---

## Spread vs Rest

### Spread

```javascript
const copy = [...arr];
```

✔ Expand values

✔ Right side of `=`

---

### Rest

```javascript
const [a, ...rest] = arr;
```

✔ Collect values

✔ Left side of `=`

---

## Memory Trick

```text
Spread

One Collection
      ↓
Many Values

----------------------

Rest

Many Values
      ↓
One Collection
```