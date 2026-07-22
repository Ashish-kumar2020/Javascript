# Promise Consumers (`then`, `catch`, `finally`)

## Why do we need Promise Consumers?

A Promise stores its result internally.

To access the fulfilled value or rejection reason, we use **Promise Consumers**.

They are:

- `then()`
- `catch()`
- `finally()`

---

# then()

## Definition

> `then()` is used to consume the fulfilled value of a Promise.

Think of it as:

```text
Promise Fulfilled

↓

then()

↓

Receive Value
```

---

# Syntax

```javascript
promise.then((value) => {

});
```

---

# Example

```javascript
const promise = Promise.resolve("Hello");

promise.then((value) => {
    console.log(value);
});
```

Output

```text
Hello
```

---

# Dry Run

```javascript
const promise = Promise.resolve("Hello");

promise.then(value => {
    console.log(value);
});
```

Step 1

Promise State

```text
Fulfilled
```

---

Step 2

JavaScript encounters

```javascript
.then(...)
```

The callback is **registered**.

It is **not executed immediately**.

---

Step 3

The callback is placed into the

```text
Microtask Queue
```

---

Step 4

The Call Stack becomes empty.

The Event Loop checks the

```text
Microtask Queue
```

The callback is moved to the

```text
Call Stack
```

---

Step 5

JavaScript Engine executes

```javascript
console.log(value);
```

Output

```text
Hello
```

---

# Important

Even if the Promise is **already fulfilled**,

```javascript
Promise.resolve("Hello")
```

the `.then()` callback **does not execute immediately**.

It is always scheduled as a **Microtask**.

Example

```javascript
console.log("A");

Promise.resolve("B").then(value => {
    console.log(value);
});

console.log("C");
```

Output

```text
A
C
B
```

Reason

The `.then()` callback is placed into the Microtask Queue.

---

# catch()

## Definition

> `catch()` is used to consume the rejection reason of a Promise.

Think of it as

```text
Promise Rejected

↓

catch()

↓

Receive Error
```

---

# Syntax

```javascript
promise.catch((error) => {

});
```

---

# Example

```javascript
const promise = Promise.reject("Network Error");

promise.catch((error) => {
    console.log(error);
});
```

Output

```text
Network Error
```

---

# Dry Run

Step 1

Promise State

```text
Rejected
```

---

Step 2

JavaScript encounters

```javascript
.catch(...)
```

The callback is registered.

---

Step 3

The callback is placed into the

```text
Microtask Queue
```

---

Step 4

The Event Loop moves it to the Call Stack.

---

Step 5

JavaScript Engine executes

```javascript
console.log(error);
```

Output

```text
Network Error
```

---

# finally()

## Definition

> `finally()` executes after the Promise is settled, regardless of whether it was fulfilled or rejected.

Think

```text
Promise Settled

↓

finally()

↓

Cleanup
```

---

# Syntax

```javascript
promise.finally(() => {

});
```

---

# Example (Fulfilled)

```javascript
Promise.resolve("Success")
    .then(value => console.log(value))
    .finally(() => console.log("Cleanup"));
```

Output

```text
Success
Cleanup
```

---

# Example (Rejected)

```javascript
Promise.reject("Error")
    .catch(error => console.log(error))
    .finally(() => console.log("Cleanup"));
```

Output

```text
Error
Cleanup
```

---

# Important

`finally()` does **not** receive

- fulfilled value
- rejected reason

Example

```javascript
Promise.resolve("Hello")
    .finally((value) => {
        console.log(value);
    });
```

Output

```text
undefined
```

Reason

`finally()` is only meant for cleanup work.

---

# Typical Use Cases

Use `finally()` for

- Hide loading spinner
- Stop loader
- Close database connection
- Release resources
- Cleanup logic

---

# Queue Used

All Promise consumers use the

```text
Microtask Queue
```

Methods

- `then()`
- `catch()`
- `finally()`

---

# Characteristics

## then()

✅ Executes only when the Promise is fulfilled.

✅ Receives the fulfilled value.

✅ Callback is placed into the Microtask Queue.

---

## catch()

✅ Executes only when the Promise is rejected.

✅ Receives the rejection reason.

✅ Callback is placed into the Microtask Queue.

---

## finally()

✅ Executes whether the Promise is fulfilled or rejected.

✅ Does not receive the value or error.

✅ Callback is placed into the Microtask Queue.

---

# Common Interview Questions

## Q1

```javascript
const promise = Promise.resolve("JavaScript");

promise.then(value => {
    console.log(value);
});
```

Output

```text
JavaScript
```

Promise State

```text
Fulfilled
```

Queue

```text
Microtask Queue
```

---

## Q2

```javascript
const promise = Promise.reject("Network Error");

promise.catch(error => {
    console.log(error);
});
```

Output

```text
Network Error
```

Promise State

```text
Rejected
```

Queue

```text
Microtask Queue
```

---

## Q3

```javascript
Promise.resolve("Success")
    .then(value => console.log(value))
    .finally(() => console.log("Done"));
```

Output

```text
Success
Done
```

Reason

`finally()` executes after the Promise settles.

---

## Q4

```javascript
console.log("A");

Promise.resolve("B")
    .then(value => console.log(value));

console.log("C");
```

Output

```text
A
C
B
```

Reason

The `.then()` callback is always scheduled in the Microtask Queue.

---

# Difference

| Method | Executes On | Receives | Queue |
|---------|-------------|----------|-------|
| `then()` | Fulfilled Promise | Value | Microtask Queue |
| `catch()` | Rejected Promise | Error | Microtask Queue |
| `finally()` | Fulfilled or Rejected Promise | Nothing | Microtask Queue |

---

# Golden Rules

## Rule 1

`then()` handles fulfilled Promises.

---

## Rule 2

`catch()` handles rejected Promises.

---

## Rule 3

`finally()` always executes after the Promise settles.

---

## Rule 4

`finally()` does not receive the fulfilled value or rejection reason.

---

## Rule 5

`then()`, `catch()`, and `finally()` callbacks are always scheduled in the **Microtask Queue**.

---

## Rule 6

Even if a Promise is already fulfilled,

its `.then()` callback is **never executed immediately**.

It is always scheduled as a Microtask.

---

# Memory Trick

```text
Promise

↓

Fulfilled

↓

then()

---------------------

Rejected

↓

catch()

---------------------

Settled

↓

finally()

---------------------

All Three

↓

Microtask Queue

↓

Event Loop

↓

Call Stack

↓

JavaScript Engine Executes
```