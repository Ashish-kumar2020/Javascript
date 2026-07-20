# 📘 JavaScript Spread Operator (`...`)

---

# What is the Spread Operator?

The **Spread Operator (`...`)** expands the elements of an array or the properties of an object into another array or object.

It is commonly used for:

- Copying Arrays
- Copying Objects
- Merging Arrays
- Merging Objects
- Updating Objects (React State)

---

# Spread with Arrays

## Copy an Array

```javascript
const arr = [10, 20, 30];

const newArr = [...arr];

console.log(newArr);
```

Output

```text
[10, 20, 30]
```

Internally

```javascript
const newArr = [10, 20, 30];
```

---

# Add New Elements

```javascript
const arr = [10, 20];

const newArr = [...arr, 30];

console.log(newArr);
```

Output

```text
[10, 20, 30]
```

---

# Merge Arrays

```javascript
const arr1 = [1, 2];

const arr2 = [3, 4];

const arr3 = [...arr1, ...arr2];

console.log(arr3);
```

Output

```text
[1, 2, 3, 4]
```

---

# Spread with Objects

```javascript
const person = {
    name: "Ashu",
    age: 24
};

const another = {
    ...person
};

console.log(another);
```

Output

```javascript
{
    name: "Ashu",
    age: 24
}
```

Internally

```javascript
const another = {
    name: "Ashu",
    age: 24
};
```

---

# Objects are Reference Types

```javascript
let person = {
    name: "Ashu"
};

let another = person;
```

Memory

```text
person ─────┐
            ▼
        { name: "Ashu" }
            ▲
another ────┘
```

Both variables point to the **same object**.

---

# Spread Creates a New Object

```javascript
const person = {
    name: "Ashu"
};

const another = {
    ...person
};

another.name = "John";

console.log(person.name);
console.log(another.name);
```

Output

```text
Ashu
John
```

Memory

```text
person  ─────► { name: "Ashu" }

another ────► { name: "John" }
```

Spread creates a **new object**, so modifying one object does not affect the other.

---

# Property Override Order ⭐⭐⭐⭐⭐

When duplicate properties exist,

> **The last property wins.**

---

## Example 1

```javascript
const person = {
    name: "Ashu",
    age: 24
};

const updated = {
    age: 30,
    ...person
};

console.log(updated);
```

Internally

```javascript
const updated = {
    age: 30,
    name: "Ashu",
    age: 24
};
```

Output

```javascript
{
    name: "Ashu",
    age: 24
}
```

The spread comes later and overrides `age: 30`.

---

## Example 2

```javascript
const person = {
    name: "Ashu",
    age: 24
};

const updated = {
    ...person,
    age: 30
};

console.log(updated);
```

Internally

```javascript
const updated = {
    name: "Ashu",
    age: 24,
    age: 30
};
```

Output

```javascript
{
    name: "Ashu",
    age: 30
}
```

The last `age` property overrides the previous one.

---

# React Example

Updating state

```javascript
setUser({
    ...user,
    name: "John"
});
```

Why?

Because

```javascript
{
    ...user,
    name: "John"
}
```

becomes

```javascript
{
    name: "Ashu",
    age: 24,

    name: "John"
}
```

The last property (`name`) overrides the previous value.

---

# Incorrect Order

```javascript
setUser({
    name: "John",
    ...user
});
```

Internally

```javascript
{
    name: "John",

    name: "Ashu",

    age: 24
}
```

Output

```javascript
{
    name: "Ashu",
    age: 24
}
```

The spread overrides the updated value.

---

# Interview Questions

## What is the Spread Operator?

The Spread Operator (`...`) expands the elements of an array or the properties of an object into another array or object.

---

## What are the uses of the Spread Operator?

- Copy Arrays
- Copy Objects
- Merge Arrays
- Merge Objects
- Update Objects (React State)

---

## Does Spread create a new object?

Yes.

Spread creates a **new object**, but it performs a **shallow copy**.

---

## Why doesn't modifying the copied object affect the original object?

Because Spread creates a new object with a different reference.

---

## What happens if duplicate properties exist?

The **last property wins**.

Example

```javascript
const obj = {
    a: 1,
    a: 2
};
```

Output

```javascript
{
    a: 2
}
```

---

## Why do React developers write?

```javascript
{
    ...user,
    name: "John"
}
```

To preserve all existing properties while overriding only the required property.

---

# ⭐ Quick Revision

## Copy Array

```javascript
const copy = [...arr];
```

---

## Merge Arrays

```javascript
const merged = [...arr1, ...arr2];
```

---

## Copy Object

```javascript
const copy = {
    ...person
};
```

---

## Merge Objects

```javascript
const merged = {
    ...obj1,
    ...obj2
};
```

---

## Property Override

```javascript
{
    ...user,
    name: "John"
}
```

✔ Last property wins.

---

## React

```javascript
setUser({
    ...user,
    name: "John"
});
```

✔ Preserve old properties

✔ Update only the required property