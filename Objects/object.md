# 📘 JavaScript Objects

---

# What is an Object?

An **Object** is a collection of **properties (key-value pairs)** used to group related data and behavior into a single entity.

```javascript
const person = {
    name: "Ashu",
    age: 24
};
```

---

# Why do we use Objects?

Instead of creating multiple variables,

```javascript
let name = "Ashu";
let age = 24;
let city = "Delhi";
```

we can group related data together.

```javascript
const person = {
    name: "Ashu",
    age: 24,
    city: "Delhi"
};
```

Objects help organize related information in a single place.

---

# Object Property

```javascript
const person = {
    name: "Ashu"
};
```

```text
Property

Key   -> name

Value -> "Ashu"
```

An object consists of **properties**, where each property is a **key-value pair**.

---

# Accessing Properties

## Dot Notation

```javascript
person.name
```

---

## Bracket Notation

```javascript
person["name"]
```

Both return

```text
Ashu
```

---

# Objects can store any data type

```javascript
const person = {

    name: "Ashu",             // String

    age: 24,                  // Number

    isAdmin: false,           // Boolean

    skills: ["JS", "React"],  // Array

    address: {
        city: "Delhi"
    },                        // Object

    greet() {
        console.log("Hello");
    }                         // Function
};
```

---

# Objects are Reference Types ⭐⭐⭐⭐⭐

Variables do **not** store the object itself.

They store a **reference (memory address)** to the object.

```javascript
let person = {
    name: "Ashu"
};

let another = person;
```

Memory Representation

```text
        Stack                        Heap

person  ──────────────┐
                      │
                      ▼
                 +----------------+
                 | name : "Ashu"  |
                 +----------------+
                      ▲
                      │
another ──────────────┘
```

There is only **one object** in memory.

Both variables point to the same object.

---

# Modifying an Object

```javascript
let person = {
    name: "Ashu"
};

let another = person;

another.name = "John";

console.log(person.name);
console.log(another.name);
```

Output

```text
John
John
```

---

## Why?

We modified the existing object.

The reference did **not** change.

Memory

```text
        Stack                        Heap

person  ──────────────┐
                      │
                      ▼
                 +----------------+
                 | name : "John"  |
                 +----------------+
                      ▲
                      │
another ──────────────┘
```

---

# Changing the Reference

```javascript
let person = {
    name: "Ashu"
};

let another = person;

another = {
    name: "John"
};

console.log(person.name);
console.log(another.name);
```

Output

```text
Ashu
John
```

---

## Why?

A **new object** is created.

Only `another` points to the new object.

`person` still points to the old object.

Memory Representation

```text
        Stack                           Heap

person ───────────────┐           +----------------+
                      │           | name : "Ashu"  |
                      ▼           +----------------+

another ──────────────┐           +----------------+
                      │           | name : "John"  |
                      ▼           +----------------+
```

---

# Modifying Object vs Changing Reference

## Modifying Object

```javascript
another.name = "John";
```

✔ Same object

✔ Reference remains the same

✔ Object is modified

---

## Changing Reference

```javascript
another = {
    name: "John"
};
```

✔ New object created

✔ Reference changes

✔ Old object remains unchanged

---

# Interview Questions

## What is an Object?

An Object is a collection of properties (key-value pairs) used to group related data and behavior into a single entity.

---

## What is a Property?

A Property is a key-value pair inside an object.

```javascript
name: "Ashu"
```

Key

```text
name
```

Value

```text
"Ashu"
```

---

## Why are Objects called Reference Types?

Because variables do not store the actual object.

They store the memory address (reference) where the object is located.

---

## Why do both variables change when one object is modified?

Because both variables point to the same object in memory.

Modifying the object through one reference affects the same shared object.

---

## What is the difference between modifying an object and changing its reference?

### Modifying Object

```javascript
obj.name = "John";
```

The same object is updated.

---

### Changing Reference

```javascript
obj = {
    name: "John"
};
```

A completely new object is created and the variable now points to the new object.

---

# ⭐ Quick Revision

### Object

Collection of properties (key-value pairs).

---

### Property

A key-value pair inside an object.

---

### Dot Notation

```javascript
person.name
```

---

### Bracket Notation

```javascript
person["name"]
```

---

### Objects are Reference Types

Variables store the **reference**, not the actual object.

---

### Modifying Object

```javascript
obj.name = "John";
```

✔ Same Object

✔ Same Reference

---

### Changing Reference

```javascript
obj = {
    name: "John"
};
```

✔ New Object

✔ New Reference