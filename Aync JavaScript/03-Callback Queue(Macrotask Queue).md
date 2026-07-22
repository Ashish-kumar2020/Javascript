# Callback Queue

## Why do we need the Callback Queue?

When the browser finishes an asynchronous task (like a timer), the callback **cannot execute immediately**.

Why?

Because only the **Call Stack** can execute JavaScript.

If the Call Stack is busy, the callback must wait somewhere.

That waiting place is called the **Callback Queue**.

---

# Definition

> The Callback Queue is a FIFO (First In, First Out) queue that stores completed asynchronous callbacks waiting to be executed.

The Callback Queue **does not execute JavaScript**.

It only stores callbacks until the Call Stack becomes available.

---

# Browser Runtime Flow

```text
JavaScript Engine
        │
        ▼
   Call Stack
        │
        ▼
Encounter setTimeout()
        │
        ▼
 Browser Web APIs
        │
        ▼
 Timer Completes
        │
        ▼
 Callback Queue
```

---

# Example

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Hello");
}, 1000);

console.log("End");
```

---

# Dry Run

## Step 1

JavaScript executes

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

JavaScript hands the timer to the Browser Web APIs.

The browser starts the timer.

---

## Step 3

JavaScript continues.

```javascript
console.log("End");
```

Output

```text
Start
End
```

---

## Step 4

After 1000 ms

The Browser notices the timer has completed.

The callback

```javascript
() => {
    console.log("Hello");
}
```

is moved to the

```text
Callback Queue
```

Current State

```text
Callback Queue

↓

console.log("Hello")
```

The callback is **waiting**.

It is **not executing**.

---

# FIFO (First In First Out)

Callbacks enter and leave the queue in the same order.

Example

```text
Callback Queue

↓

Task A

↓

Task B

↓

Task C
```

Execution Order

```text
Task A

↓

Task B

↓

Task C
```

The first callback added is the first callback removed.

---

# Can the Callback Queue execute JavaScript?

No.

The Callback Queue only stores callbacks.

Only the **Call Stack** executes JavaScript.

---

# Busy Call Stack

Suppose

```javascript
while (true) {}
```

is running.

The Browser completes a timer.

The callback enters the Callback Queue.

Current State

```text
Call Stack

↓

while(true)
```

```text
Callback Queue

↓

Hello
```

Since the Call Stack never becomes empty,

the callback waits forever.

---

# Responsibilities

## Callback Queue

- Stores completed callbacks.
- Maintains FIFO order.
- Waits until the Call Stack is available.
- Never executes JavaScript.

---

# Characteristics

✅ FIFO (First In First Out).

✅ Stores asynchronous callbacks.

✅ Does not execute JavaScript.

✅ Waits until the Call Stack becomes empty.

---

# Common Interview Questions

## Q1

After `setTimeout()` finishes,

where does the callback go?

Answer

```text
Callback Queue
```

---

## Q2

Can the Callback Queue execute JavaScript?

Answer

```text
No
```

Only the Call Stack executes JavaScript.

---

## Q3

```javascript
while (true) {}
```

The Callback Queue contains

```text
Hello
```

Will `"Hello"` execute?

Answer

```text
No
```

Reason

The Call Stack never becomes empty.

The callback keeps waiting in the Callback Queue.

---

## Q4

Suppose the Callback Queue contains

```text
Task A

↓

Task B
```

Which task executes first?

Answer

```text
Task A
```

Reason

The Callback Queue follows FIFO.

---

# Golden Rules

## Rule 1

The Callback Queue stores callbacks.

---

## Rule 2

The Callback Queue never executes JavaScript.

---

## Rule 3

Only the Call Stack executes JavaScript.

---

## Rule 4

Callbacks wait until the Call Stack becomes empty.

---

## Rule 5

The Callback Queue follows FIFO.

---

# Memory Trick

```text
Browser Finishes Task

↓

Callback Queue

↓

Wait...

↓

Wait...

↓

Call Stack Becomes Empty

↓

Event Loop Moves Callback

↓

Call Stack Executes Callback
```