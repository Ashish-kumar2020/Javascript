# 📘 JavaScript Shallow Copy

---

# What is Shallow Copy?

A **Shallow Copy** creates a new outer object, but nested objects are **not copied**.

Instead, the references of nested objects are copied.

---

# Example

```javascript
const person = {
    name: "Ashu",
    age: 24
};

const another = {
    ...person
};

console.log(person === another);
```

Output

```text
false
```

---

## Why?

Spread Operator creates a **new outer object**.

Memory

```text
person  ─────► Object A

another ───► Object B
```

Since both references are different,

```javascript
person === another
```

returns

```text
false
```

---

# Nested Objects

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
console.log(another.address.city);
```

Output

```text
Mumbai
Mumbai
```

---

# Why?

Spread copies only the **first level**.

The nested object is **not copied**.

Instead, its reference is copied.

Memory

```text
                 Heap

        +----------------------+
person ─►| name : "Ashu"        |
         | address ───────┐     |
         +----------------+     |
                                ▼
                         +---------------+
                         | city: "Delhi" |
                         +---------------+
                                ▲
                                │
another► +----------------+     |
         | name : "Ashu"  |-----┘
         | address -------|
         +----------------+
```

Both objects share the same nested object.

Changing one affects the other.

---

# Why is it called Shallow Copy?

Because only the **first level** is copied.

Nested objects remain shared.

```text
Level 1

✔ Copied

----------------------

Nested Objects

❌ Not Copied

✔ Reference Copied
```

---

# Shallow Copy vs Reference Assignment

## Reference Assignment

```javascript
const another = person;
```

Memory

```text
person ─────┐
            ▼
        Object
            ▲
another ────┘
```

Only **one object** exists.

---

## Shallow Copy

```javascript
const another = {
    ...person
};
```

Memory

```text
person ─────► Object A

another ───► Object B
```

Two outer objects exist.

---

# Shallow Copy Limitation

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
```

Both objects now become

```javascript
{
    name: "Ashu",
    address: {
        city: "Mumbai"
    }
}
```

Because `address` is shared.

---

# Interview Questions

## What is a Shallow Copy?

A Shallow Copy creates a new outer object but copies the references of nested objects instead of creating new nested objects.

---

## Does the Spread Operator perform a Deep Copy?

No.

Spread Operator performs a **Shallow Copy**.

---

## Why does changing a nested object affect both objects?

Because nested objects are **shared**.

Only their references are copied.

---

## Why does `person === another` return false?

Because Spread creates a **new outer object** with a different reference.

---

## What is copied during a Shallow Copy?

✔ Primitive values are copied.

✔ Object references are copied.

Nested objects are **not duplicated**.

---

# ⭐ Quick Revision

## Shallow Copy

Creates a new outer object.

---

## First Level

✔ Copied

---

## Nested Objects

❌ Not Copied

✔ Reference Copied

---

## Spread Operator

```javascript
const copy = {
    ...person
};
```

Performs a **Shallow Copy**.

---

## Memory

```text
Outer Object

✔ New

Nested Object

✔ Shared
```

---

## Equality

```javascript
person === another
```

Output

```text
false
```

Different outer object references.

---

## Biggest Limitation

Modifying a nested object changes it in **both** objects because they share the same reference.