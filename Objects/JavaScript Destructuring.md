# 📘 JavaScript Destructuring

---

# What is Destructuring?

Destructuring is a JavaScript syntax that allows us to extract properties from objects or elements from arrays into individual variables in a concise way.

---

# Object Destructuring

Instead of

```javascript
const person = {
    name: "Ashu",
    age: 24
};

const name = person.name;
const age = person.age;
```

We can write

```javascript
const person = {
    name: "Ashu",
    age: 24
};

const { name, age } = person;
```

Internally

```javascript
const name = person.name;
const age = person.age;
```

---

# Renaming Variables

We can store the property in a different variable name.

```javascript
const person = {
    name: "Ashu"
};

const { name: fullName } = person;

console.log(fullName);
```

Output

```text
Ashu
```

Internally

```javascript
const fullName = person.name;
```

---

# Important

```javascript
const { name: fullName } = person;
```

This does **NOT** create a variable called `name`.

Only `fullName` is created.

```javascript
console.log(name);
```

Output

```text
ReferenceError
```

---

# Default Values

If a property does not exist, we can provide a default value.

```javascript
const person = {
    name: "Ashu"
};

const { age = 24 } = person;

console.log(age);
```

Output

```text
24
```

If the property exists, the default value is ignored.

```javascript
const person = {
    age: 30
};

const { age = 24 } = person;

console.log(age);
```

Output

```text
30
```

---

# Array Destructuring

Instead of

```javascript
const arr = [10, 20, 30];

const first = arr[0];
const second = arr[1];
const third = arr[2];
```

We can write

```javascript
const arr = [10, 20, 30];

const [first, second, third] = arr;
```

Internally

```javascript
const first = arr[0];
const second = arr[1];
const third = arr[2];
```

---

# Skipping Elements

```javascript
const arr = [10, 20, 30, 40];

const [first, , third] = arr;

console.log(first);
console.log(third);
```

Output

```text
10
30
```

---

# Nested Object Destructuring

```javascript
const person = {
    name: "Ashu",
    address: {
        city: "Delhi",
        pincode: 110001
    }
};

const {
    address: { city }
} = person;

console.log(city);
```

Output

```text
Delhi
```

---

# Function Parameter Destructuring

Instead of

```javascript
function greet(person) {
    console.log(person.name);
    console.log(person.age);
}
```

We can write

```javascript
function greet({ name, age }) {
    console.log(name);
    console.log(age);
}

greet({
    name: "Ashu",
    age: 24
});
```

Output

```text
Ashu
24
```

---

# React Example

```jsx
function Card({ title, price, image }) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{price}</p>
        </div>
    );
}
```

Internally, React is doing something similar to:

```jsx
function Card(props) {
    const { title, price, image } = props;
}
```

---

# Interview Questions

## What is Destructuring?

Destructuring is a JavaScript syntax used to extract properties from objects or elements from arrays into individual variables.

---

## What is Object Destructuring?

Extracting object properties into variables.

```javascript
const { name, age } = person;
```

---

## What is Array Destructuring?

Extracting array elements into variables.

```javascript
const [a, b, c] = arr;
```

---

## How do you rename variables while destructuring?

```javascript
const { name: fullName } = person;
```

Internally

```javascript
const fullName = person.name;
```

---

## How do you provide default values?

```javascript
const { age = 24 } = person;
```

Default values are used only when the property is `undefined` or does not exist.

---

## How do you skip array elements?

```javascript
const [first, , third] = arr;
```

---

## Why is destructuring commonly used in React?

It makes props easier to read and avoids repeatedly writing `props.propertyName`.

---

# ⭐ Quick Revision

## Object Destructuring

```javascript
const { name, age } = person;
```

↓

```javascript
const name = person.name;
const age = person.age;
```

---

## Rename

```javascript
const { name: fullName } = person;
```

↓

```javascript
const fullName = person.name;
```

---

## Default Value

```javascript
const { age = 24 } = person;
```

---

## Array Destructuring

```javascript
const [a, b, c] = arr;
```

---

## Skip Elements

```javascript
const [a, , c] = arr;
```

---

## Nested Destructuring

```javascript
const {
    address: { city }
} = person;
```

---

## Function Parameter Destructuring

```javascript
function greet({ name, age }) {}
```

---

## React

```jsx
function Card({ title, price }) {}
```