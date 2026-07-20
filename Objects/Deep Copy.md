# 📘 JavaScript Deep Copy

---

# What is Deep Copy?

A **Deep Copy** creates completely independent copies of an object, including all nested objects.

No references are shared.

---

# Why do we need Deep Copy?

Spread Operator performs a **Shallow Copy**.

It copies only the first level.

Nested objects remain shared.

```javascript
const person = {
    name: "Ashu",
    address: {
        city: "Delhi"
    }
};

const another = {
    ...person
};

another.address.city = "Mumbai";

console.log(person.address.city);
```

Output

```text
Mumbai
```

Because both objects share the same nested object.

---

# Deep Copy

```javascript
const person = {
    name: "Ashu",
    address: {
        city: "Delhi"
    }
};

const another = structuredClone(person);

another.address.city = "Mumbai";

console.log(person.address.city);
console.log(another.address.city);
```

Output

```text
Delhi
Mumbai
```

---

# Why?

Deep Copy creates completely new objects.

Memory

```text
Original

Person
 │
 ▼
Outer Object
 │
 ▼
Address
 │
 ▼
Nested Object

----------------------------

Deep Copy

Another
 │
 ▼
New Outer Object
 │
 ▼
New Address
 │
 ▼
New Nested Object
```

Nothing is shared.

---

# Creating a Deep Copy

## Modern JavaScript

```javascript
const copy = structuredClone(obj);
```

Recommended way for deep copying supported data types.

---

## Older Method

```javascript
const copy = JSON.parse(JSON.stringify(obj));
```

Works for simple objects but has limitations.

---

# JSON Method Limitations

The following values are **not preserved** correctly:

- Functions
- Date
- Map
- Set
- RegExp
- undefined
- Symbol

Because of these limitations, prefer

```javascript
structuredClone(obj);
```

---

# Shallow Copy vs Deep Copy

| Shallow Copy | Deep Copy |
|--------------|-----------|
| Copies first level only | Copies entire object recursively |
| Nested objects are shared | Nested objects are independent |
| References are copied | New references are created |
| Spread Operator | `structuredClone()` |

---

# Memory Comparison

## Shallow Copy

```text
Person
 │
 ▼
Outer Object
 │
 ▼
Address
 ▲
 │
Another
 │
 ▼
Outer Object
```

✔ New outer object

❌ Shared nested object

---

## Deep Copy

```text
Person
 │
 ▼
Outer Object
 │
 ▼
Address

-------------------

Another
 │
 ▼
Outer Object
 │
 ▼
Address
```

✔ New outer object

✔ New nested object

Nothing is shared.

---

# React Example

Updating nested state using only Spread creates a **Shallow Copy**.

```javascript
const updatedUser = {
    ...user
};
```

Nested objects are still shared.

For deeply nested objects, every nested level must also be copied (or use utilities like Immer).

---

# Interview Questions

## What is Deep Copy?

A Deep Copy creates completely independent copies of an object, including all nested objects.

---

## What is the difference between Shallow Copy and Deep Copy?

### Shallow Copy

- Copies only the first level.
- Nested objects are shared.

### Deep Copy

- Copies the complete object recursively.
- Nested objects are independent.

---

## Does the Spread Operator perform a Deep Copy?

No.

The Spread Operator performs a **Shallow Copy**.

---

## How do you create a Deep Copy in modern JavaScript?

```javascript
const copy = structuredClone(obj);
```

---

## Why is `JSON.parse(JSON.stringify())` not recommended?

Because it cannot correctly copy:

- Functions
- Date
- Map
- Set
- RegExp
- undefined
- Symbol

---

# ⭐ Quick Revision

## Deep Copy

Copies the complete object recursively.

---

## Nested Objects

✔ New Object

✔ New Reference

---

## Modern Method

```javascript
structuredClone(obj);
```

---

## Shallow Copy

```javascript
const copy = {
    ...obj
};
```

✔ First level copied

❌ Nested objects shared

---

## Deep Copy

```javascript
const copy = structuredClone(obj);
```

✔ Everything copied

✔ Nothing shared

---

## Memory Trick

```text
Shallow Copy

Outer Object ✅

Nested Object ❌ Shared

--------------------------

Deep Copy

Outer Object ✅

Nested Object ✅

Everything Independent
```