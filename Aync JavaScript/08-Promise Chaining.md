# Promise Chaining

## Why do we need Promise Chaining?

Many asynchronous operations depend on the result of previous operations.

Example

```text
Get User

↓

Get Orders

↓

Get Payment
```

Instead of nesting callbacks, Promises allow us to chain asynchronous operations using multiple `.then()` methods.

---

# Definition

> Promise Chaining means attaching multiple `.then()` methods, where the output of one `.then()` becomes the input of the next `.then()`.

Execution Flow

```text
Promise

↓

then()

↓

then()

↓

then()
```

---

# Example

```javascript
Promise.resolve(1)
    .then(value => value + 1)
    .then(value => value + 1)
    .then(value => console.log(value));
```

Output

```text
3
```

---

# Dry Run

```javascript
Promise.resolve(1)
    .then(value => value + 1)
    .then(value => value + 1)
    .then(value => console.log(value));
```

### Step 1

Initial Promise

```text
Promise A

↓

Fulfilled

↓

1
```

---

### Step 2

First `.then()`

Receives

```text
1
```

Returns

```javascript
2
```

Since every `.then()` returns a **new Promise**

```text
Promise B

↓

Fulfilled

↓

2
```

---

### Step 3

Second `.then()`

Receives

```text
2
```

Returns

```javascript
3
```

A new Promise is created.

```text
Promise C

↓

Fulfilled

↓

3
```

---

### Step 4

Third `.then()`

Receives

```text
3
```

Executes

```javascript
console.log(3);
```

Output

```text
3
```

---

# Every `.then()` Returns a New Promise

This is the most important rule of Promise Chaining.

```text
Promise A

↓

.then()

↓

Promise B

↓

.then()

↓

Promise C

↓

.then()

↓

Promise D
```

Every `.then()` creates a completely new Promise.

---

# Returning a Value

```javascript
Promise.resolve(5)
    .then(value => {
        return value * 2;
    })
    .then(value => {
        console.log(value);
    });
```

Output

```text
10
```

Reason

The first `.then()` returns

```text
10
```

The new Promise becomes fulfilled with

```text
10
```

The next `.then()` receives

```text
10
```

---

# Returning Nothing

```javascript
Promise.resolve(5)
    .then(value => {
        console.log(value);
    })
    .then(value => {
        console.log(value);
    });
```

Output

```text
5
undefined
```

Reason

The first callback does not explicitly return anything.

JavaScript automatically returns

```javascript
undefined
```

So the next Promise becomes fulfilled with

```text
undefined
```

Therefore, the next `.then()` receives

```text
undefined
```

---

# Promise Chain Flow

```javascript
Promise.resolve(2)
    .then(value => value + 3)
    .then(value => value * 2)
    .then(value => console.log(value));
```

Execution

```text
Promise A

↓

2

↓

First .then()

↓

Returns 5

↓

Promise B

↓

5

↓

Second .then()

↓

Returns 10

↓

Promise C

↓

10

↓

Third .then()

↓

console.log(10)
```

Output

```text
10
```

---

# Why wasn't P2 initially in the Microtask Queue?

Example

```javascript
Promise.resolve()
    .then(() => console.log("P1"))
    .then(() => console.log("P2"));
```

Initially

```text
Microtask Queue

↓

P1
```

Question

Why isn't

```text
P2
```

already in the queue?

Reason

`P2` depends on the Promise returned by the first `.then()`.

Only after

```text
P1
```

finishes,

the Promise returned by the first `.then()` becomes fulfilled.

Only then does JavaScript schedule

```text
P2
```

into the Microtask Queue.

Execution

```text
P1

↓

P2
```

---

# Characteristics

✅ Every `.then()` returns a new Promise.

✅ The return value of one `.then()` becomes the fulfilled value of the new Promise.

✅ The next `.then()` receives the fulfilled value of the previous Promise.

✅ If nothing is returned, JavaScript automatically returns `undefined`.

---

# Common Interview Questions

## Q1

```javascript
Promise.resolve(2)
    .then(value => value + 3)
    .then(value => console.log(value));
```

Output

```text
5
```

---

## Q2

```javascript
Promise.resolve(10)
    .then(value => {
        console.log(value);
    })
    .then(value => {
        console.log(value);
    });
```

Output

```text
10
undefined
```

Reason

The first callback implicitly returns `undefined`.

---

## Q3

```javascript
Promise.resolve("A")
    .then(value => {
        console.log(value);
        return "B";
    })
    .then(value => {
        console.log(value);
        return "C";
    })
    .then(value => {
        console.log(value);
    });
```

Output

```text
A
B
C
```

---

# Golden Rules

## Rule 1

Every `.then()` returns a **new Promise**.

---

## Rule 2

The value returned from a `.then()` callback becomes the fulfilled value of the new Promise.

---

## Rule 3

The next `.then()` receives the fulfilled value of the previous Promise.

---

## Rule 4

If a callback does not return anything, JavaScript automatically returns `undefined`.

---

## Rule 5

Promise chains execute sequentially because each `.then()` depends on the Promise returned by the previous `.then()`.

---

# Memory Trick

```text
Promise A

↓

.then()

↓

Returns Value

↓

Promise B

↓

.then()

↓

Returns Value

↓

Promise C

↓

.then()

↓

Promise Continues...
```