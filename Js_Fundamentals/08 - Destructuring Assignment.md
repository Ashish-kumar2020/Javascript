# JavaScript Fundamentals

# 08 - Destructuring Assignment

---

# 📖 Definition

Destructuring is an ES6 feature that allows you to **extract values from arrays or properties from objects** and assign them to variables in a concise way.

Instead of accessing values individually, destructuring lets you unpack them in a single statement.

---

# 🤔 Why was Destructuring introduced?

Before ES6

```javascript
const user = {
    name: "Ashu",
    age: 25
};

const name = user.name;
const age = user.age;
```

Problems

- Repetitive code
- Difficult to read with deeply nested objects
- Common in API responses and React props

After ES6

```javascript
const { name, age } = user;
```

Cleaner and easier to maintain.

---

# Types of Destructuring

- Object Destructuring
- Array Destructuring

---

# Object Destructuring

## Basic Syntax

```javascript
const user = {
    name: "Ashu",
    age: 25
};

const { name, age } = user;

console.log(name);
console.log(age);
```

Output

```javascript
Ashu
25
```

---

# 💡 Why?

Object destructuring matches **property names**, **not positions**.

```javascript
const obj = {
    b: 2,
    a: 1
};

const { a, b } = obj;
```

Output

```javascript
1
2
```

Even though `b` appears first in the object, JavaScript matches by **key name**.

---

# Renaming Variables

Sometimes the variable name should differ from the property name.

```javascript
const user = {
    name: "Ashu"
};

const {
    name: username
} = user;

console.log(username);
```

Output

```javascript
Ashu
```

---

# Default Values

Used when a property does not exist.

```javascript
const user = {
    name: "Ashu"
};

const {
    city = "Delhi"
} = user;

console.log(city);
```

Output

```javascript
Delhi
```

---

# Existing Property Overrides Default

```javascript
const user = {
    city: "Noida"
};

const {
    city = "Delhi"
} = user;
```

Output

```javascript
Noida
```

---

# Nested Object Destructuring

```javascript
const user = {
    profile: {
        city: "Delhi"
    }
};

const {
    profile: {
        city
    }
} = user;

console.log(city);
```

Output

```javascript
Delhi
```

---

# Mixed Renaming

```javascript
const user = {
    profile: {
        city: "Delhi"
    }
};

const {
    profile: {
        city: location
    }
} = user;

console.log(location);
```

Output

```javascript
Delhi
```

---

# Rest Properties

Collect remaining properties.

```javascript
const user = {
    name: "Ashu",
    age: 25,
    city: "Delhi"
};

const {
    name,
    ...rest
} = user;
```

Output

```javascript
name
// Ashu

rest
// {
//   age:25,
//   city:"Delhi"
// }
```

---

# Array Destructuring

Unlike objects,

Arrays use **position**, not property names.

---

## Basic Example

```javascript
const colors = [
    "Red",
    "Blue",
    "Green"
];

const [
    first,
    second
] = colors;
```

Output

```javascript
first
// Red

second
// Blue
```

---

# Skipping Values

```javascript
const numbers = [
    10,
    20,
    30
];

const [
    first,
    ,
    third
] = numbers;
```

Output

```javascript
10
30
```

---

# Default Values

```javascript
const arr = [
    10
];

const [
    a,
    b = 20
] = arr;
```

Output

```javascript
10
20
```

---

# Swapping Variables

One of the biggest advantages.

Without destructuring

```javascript
let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;
```

With destructuring

```javascript
let a = 10;
let b = 20;

[a, b] = [b, a];
```

Output

```javascript
20
10
```

---

# Rest Operator in Arrays

```javascript
const numbers = [
    10,
    20,
    30,
    40
];

const [
    first,
    ...rest
] = numbers;
```

Output

```javascript
first
//10

rest
//[20,30,40]
```

---

# Function Parameter Destructuring

Very common in React.

```javascript
function greet({
    name,
    age
}) {
    console.log(name);
}
```

Call

```javascript
greet({
    name: "Ashu",
    age: 25
});
```

---

React Example

```javascript
function Card({
    title,
    price
}) {
    return (
        <h1>{title}</h1>
    );
}
```

Instead of

```javascript
function Card(props) {
    return (
        <h1>{props.title}</h1>
    );
}
```

---

# Destructuring Function Return Values

```javascript
function getUser() {
    return {
        name: "Ashu",
        age: 25
    };
}

const {
    name,
    age
} = getUser();
```

---

Array Return

```javascript
function getCoordinates() {
    return [10,20];
}

const [
    x,
    y
] = getCoordinates();
```

---

# 💡 Why?

Object Destructuring

Matches

```
Property Name
```

Array Destructuring

Matches

```
Position
```

Remember this for interviews.

---

# Common Mistakes

### Mistake 1

```javascript
const {
    city
} = {};
```

Output

```javascript
undefined
```

No error.

---

### Mistake 2

```javascript
const {
    address:{
        city
    }
} = {};
```

Output

```text
TypeError
```

Reason

`address` is undefined.

Use Optional Chaining before destructuring if necessary.

---

### Mistake 3

Wrong property name

```javascript
const user = {
    name:"Ashu"
};

const {
    username
} = user;
```

Output

```javascript
undefined
```

---

### Mistake 4

Array order matters.

```javascript
const [
    second,
    first
] = [1,2];
```

Output

```javascript
second
//1

first
//2
```

---

# Interview Traps

### Trap 1

```javascript
const {
    name="Guest"
} = {
    name:"Ashu"
};
```

Output

```javascript
Ashu
```

Default values are ignored when the property exists.

---

### Trap 2

```javascript
const [
    a=10
] = [5];
```

Output

```javascript
5
```

---

### Trap 3

```javascript
const [
    a=10
] = [];
```

Output

```javascript
10
```

---

### Trap 4

```javascript
const {
    name
} = null;
```

Output

```text
TypeError
```

Cannot destructure `null` or `undefined`.

---

# Best Practices

✅ Use object destructuring for API responses.

✅ Use parameter destructuring in React components.

✅ Use default values to avoid `undefined`.

✅ Use meaningful variable renaming.

✅ Avoid deep destructuring if readability suffers.

---

# Real-World Use Cases

## API Response

```javascript
const {
    data,
    status
} = response;
```

---

## React Props

```javascript
function Button({
    text,
    onClick
}) {}
```

---

## Redux

```javascript
const {
    user,
    loading
} = state;
```

---

## Custom Hooks

```javascript
const {
    data,
    error,
    isLoading
} = useQuery();
```

---

# Senior Interview Questions

1. Why was destructuring introduced?
2. Difference between object and array destructuring.
3. How do default values work?
4. Difference between renaming and default values.
5. How does nested destructuring work?
6. What is Rest Property?
7. Why is destructuring heavily used in React?
8. Why does destructuring `null` throw an error?

---

# Quick Revision

- Introduced in ES6.
- Used to unpack arrays and objects.
- Object destructuring matches **property names**.
- Array destructuring matches **positions**.
- Supports default values.
- Supports variable renaming.
- Supports nested destructuring.
- Supports Rest (`...rest`).
- Makes React props and API handling cleaner.
- Cannot destructure `null` or `undefined`.