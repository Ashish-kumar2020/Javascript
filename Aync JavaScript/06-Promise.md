# Promises

## Why were Promises introduced?

Before Promises, asynchronous code was written using nested callbacks.

Example

```javascript
getUser(function(user) {
    getOrders(user.id, function(orders) {
        getPayment(orders[0], function(payment) {
            console.log(payment);
        });
    });
});
```

This is called **Callback Hell**.

Problems

- Difficult to read.
- Difficult to maintain.
- Deep nesting.
- Difficult error handling.

Promises solve these problems by providing a cleaner way to handle asynchronous operations.

---

# Definition

> A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation.

The important word is

```text
Eventually
```

The result is not available immediately.

It will become available in the future.

---

# Promise States

Every Promise is always in one of three states.

```text
Pending

↓

Fulfilled

OR

Rejected
```

---

## 1. Pending

The asynchronous operation is still running.

Example

```text
Downloading File...

↓

Pending
```

---

## 2. Fulfilled

The asynchronous operation completed successfully.

Example

```text
Payment Successful

↓

Fulfilled
```

---

## 3. Rejected

The asynchronous operation failed.

Example

```text
Network Error

↓

Rejected
```

---

# State Transition

A Promise starts in the

```text
Pending
```

state.

It can move to

```text
Fulfilled
```

or

```text
Rejected
```

```text
Pending

↓

Fulfilled
```

OR

```text
Pending

↓

Rejected
```

A Promise can **never** change its state again after it is settled.

---

# Creating a Promise

```javascript
const promise = new Promise((resolve, reject) => {

});
```

The Promise constructor receives a function called the **executor function**.

The executor function has two parameters.

```javascript
resolve

reject
```

---

# resolve()

`resolve()` indicates that the asynchronous operation completed successfully.

Example

```javascript
const promise = new Promise((resolve, reject) => {
    resolve("Payment Successful");
});
```

State

```text
Pending

↓

Fulfilled
```

Stored Result

```text
Payment Successful
```

---

# reject()

`reject()` indicates that the asynchronous operation failed.

Example

```javascript
const promise = new Promise((resolve, reject) => {
    reject("Payment Failed");
});
```

State

```text
Pending

↓

Rejected
```

Stored Reason

```text
Payment Failed
```

---

# Dry Run

```javascript
const promise = new Promise((resolve, reject) => {
    resolve("Hello");
});
```

Step 1

Promise is created.

```text
State

↓

Pending
```

---

Step 2

JavaScript executes

```javascript
resolve("Hello");
```

State changes

```text
Pending

↓

Fulfilled
```

Stored Result

```text
Hello
```

Execution completes.

---

# Another Example

```javascript
const promise = new Promise((resolve, reject) => {
    reject("Network Error");
});
```

State

```text
Pending

↓

Rejected
```

Stored Reason

```text
Network Error
```

---

# Promise Internals

A Promise internally stores two things.

```text
Promise

↓

State

↓

Pending
Fulfilled
Rejected

------------------------

Result

↓

Value (Fulfilled)

OR

Reason (Rejected)
```

Example

```javascript
resolve("Hello");
```

Internal State

```text
State

↓

Fulfilled

----------------

Result

↓

Hello
```

---

Example

```javascript
reject("Network Error");
```

Internal State

```text
State

↓

Rejected

----------------

Reason

↓

Network Error
```

---

# Important Rule

Only the **first** call to `resolve()` or `reject()` has any effect.

Example

```javascript
const promise = new Promise((resolve, reject) => {

    resolve("Success");

    reject("Failure");

    resolve("Again");

});
```

Final State

```text
Fulfilled
```

Stored Result

```text
Success
```

Reason

The Promise was already settled after the first `resolve()`.

All later calls are ignored.

---

# Characteristics

✅ Promise is a JavaScript object.

✅ Represents the future result of an asynchronous operation.

✅ Starts in the Pending state.

✅ Can become either Fulfilled or Rejected.

✅ Once settled, its state never changes.

✅ Stores either a fulfilled value or a rejection reason.

---

# Common Interview Questions

## Q1

```javascript
const promise = new Promise((resolve, reject) => {
    resolve("Done");
});
```

Output

```text
Initial State

↓

Pending

Final State

↓

Fulfilled

Stored Result

↓

Done
```

---

## Q2

```javascript
const promise = new Promise((resolve, reject) => {
    reject("Error");
});
```

Output

```text
Initial State

↓

Pending

Final State

↓

Rejected

Stored Reason

↓

Error
```

---

## Q3

```javascript
const promise = new Promise((resolve, reject) => {

    resolve("A");

    reject("B");

    resolve("C");

});
```

Final State

```text
Fulfilled
```

Stored Result

```text
A
```

Reason

The Promise was settled after the first `resolve()`.

Subsequent `resolve()` and `reject()` calls are ignored.

---

# Golden Rules

## Rule 1

Every Promise starts in the **Pending** state.

---

## Rule 2

A Promise can transition only once.

```text
Pending

↓

Fulfilled
```

OR

```text
Pending

↓

Rejected
```

---

## Rule 3

Once a Promise is settled, its state cannot change.

---

## Rule 4

`resolve()` fulfills the Promise.

---

## Rule 5

`reject()` rejects the Promise.

---

## Rule 6

Only the first call to `resolve()` or `reject()` has any effect.

---

# Memory Trick

```text
Promise Created

↓

Pending

↓

resolve()

↓

Fulfilled

------------------------

OR

↓

reject()

↓

Rejected

------------------------

State Can Never Change Again
```