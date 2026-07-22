# Microtask Queue

## Why do we need the Microtask Queue?

The Callback Queue is not the only queue in JavaScript.

Some asynchronous callbacks have **higher priority** than normal callbacks.

These callbacks are stored in the **Microtask Queue**.

The Event Loop always processes the Microtask Queue before the Callback Queue.

---

# Definition

> The Microtask Queue stores high-priority asynchronous callbacks such as Promise callbacks and `queueMicrotask()` callbacks.

The Event Loop always empties the entire Microtask Queue before processing any callback from the Callback Queue.

---

# Two Queues

```text
                Browser

                    │
                    ▼

        +----------------------+
        | Microtask Queue      |
        +----------------------+

        +----------------------+
        | Callback Queue       |
        +----------------------+

                    │
                    ▼

               Event Loop

                    │
                    ▼

               Call Stack
```

---

# Which APIs use which Queue?

## Callback Queue (Macrotask Queue)

Examples

- `setTimeout()`
- `setInterval()`
- DOM Events
- MessageChannel

---

## Microtask Queue

Examples

- `Promise.then()`
- `Promise.catch()`
- `Promise.finally()`
- `queueMicrotask()`
- `MutationObserver`

---

# Priority Rule

```text
Call Stack Empty

↓

Event Loop

↓

Check Microtask Queue First

↓

If Not Empty

↓

Execute ALL Microtasks

↓

Then Check Callback Queue
```

The Microtask Queue always has higher priority.

---

# Example

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

---

# Dry Run

## Step 1

Execute

```javascript
console.log("Start");
```

Output

```text
Start
```

---

## Step 2

JavaScript encounters

```javascript
setTimeout(...)
```

JavaScript hands it to the Browser.

The Browser starts the timer.

After the timer completes,

the callback will enter the

```text
Callback Queue
```

---

## Step 3

JavaScript encounters

```javascript
Promise.resolve().then(...)
```

The Promise is already resolved.

The callback passed to

```javascript
.then()
```

is placed into the

```text
Microtask Queue
```

Current State

```text
Microtask Queue

↓

Promise Callback
```

---

## Step 4

Execute

```javascript
console.log("End");
```

Output

```text
Start
End
```

The Call Stack becomes empty.

---

## Step 5

The Event Loop checks

```text
Microtask Queue
```

It contains

```text
Promise Callback
```

The Event Loop moves it to the Call Stack.

The JavaScript Engine executes it.

Output

```text
Promise
```

---

## Step 6

The Microtask Queue is now empty.

The Event Loop checks

```text
Callback Queue
```

It contains

```text
Timeout Callback
```

The Event Loop moves it to the Call Stack.

The JavaScript Engine executes it.

Output

```text
Timeout
```

---

Final Output

```text
Start
End
Promise
Timeout
```

---

# Promise Chaining

```javascript
Promise.resolve()
    .then(() => console.log("P1"))
    .then(() => console.log("P2"));
```

Important

Initially,

only the first callback is added to the Microtask Queue.

```text
Microtask Queue

↓

P1
```

When

```text
P1
```

finishes executing,

the second

```javascript
.then()
```

becomes eligible.

Only then is

```text
P2
```

added to the Microtask Queue.

Execution

```text
P1

↓

P2
```

---

# Characteristics

✅ Higher priority than the Callback Queue.

✅ Stores Promise callbacks.

✅ Stores `queueMicrotask()` callbacks.

✅ Processed immediately after the Call Stack becomes empty.

✅ Completely emptied before any Callback Queue task executes.

---

# Common Interview Questions

## Q1

```javascript
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

Output

```text
Start
End
Promise
Timeout
```

Reason

The Event Loop processes the entire Microtask Queue before the Callback Queue.

---

## Q2

Which queue has higher priority?

Answer

```text
Microtask Queue
```

---

## Q3

Which APIs use the Microtask Queue?

Answer

- `Promise.then()`
- `Promise.catch()`
- `Promise.finally()`
- `queueMicrotask()`

---

## Q4

Which APIs use the Callback Queue?

Answer

- `setTimeout()`
- `setInterval()`
- DOM Events

---

## Q5

Suppose

```text
Microtask Queue

↓

Promise 1

↓

Promise 2

↓

Promise 3

-----------------------

Callback Queue

↓

Timeout 1

↓

Timeout 2
```

Execution Order

```text
Promise 1

↓

Promise 2

↓

Promise 3

↓

Timeout 1

↓

Timeout 2
```

Reason

The Event Loop completely empties the Microtask Queue before processing the Callback Queue.

---

# Golden Rules

## Rule 1

The Event Loop always checks the Microtask Queue first.

---

## Rule 2

The Microtask Queue has higher priority than the Callback Queue.

---

## Rule 3

The Event Loop completely empties the Microtask Queue before processing even one Callback Queue task.

---

## Rule 4

Only Promise callbacks go into the Microtask Queue.

The Promise object itself does **not** go into the queue.

---

## Rule 5

In Promise chaining,

only the first `.then()` callback is initially scheduled.

The next `.then()` callback is scheduled only after the previous callback finishes.

---

# Difference

| Feature | Microtask Queue | Callback Queue |
|---------|-----------------|----------------|
| Priority | Higher | Lower |
| Processed By | Event Loop | Event Loop |
| Executed By | JavaScript Engine | JavaScript Engine |
| Examples | `Promise.then()`, `catch()`, `finally()`, `queueMicrotask()` | `setTimeout()`, `setInterval()`, DOM Events |

---

# Memory Trick

```text
Call Stack Empty

↓

Event Loop

↓

Microtask Queue

↓

Execute ALL Microtasks

↓

Microtask Queue Empty?

↓

YES

↓

Callback Queue

↓

Execute ONE Callback

↓

Repeat
```