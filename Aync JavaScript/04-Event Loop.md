# Event Loop

## Why do we need the Event Loop?

After the Browser finishes an asynchronous task, the callback is placed in the **Callback Queue**.

However, the Callback Queue **cannot execute JavaScript**.

Only the **Call Stack** can execute JavaScript.

So who moves callbacks from the Callback Queue to the Call Stack?

The answer is the **Event Loop**.

---

# Definition

> The Event Loop continuously checks whether the Call Stack is empty. If the Call Stack is empty, it moves a callback from the Callback Queue to the Call Stack.

The Event Loop **does not execute JavaScript**.

It only moves callbacks.

---

# Browser Runtime Architecture

```text
                Browser

                    │
                    ▼

             Browser Web APIs

                    │
                    ▼

             Callback Queue

                    │
                    ▼

              Event Loop

                    │
                    ▼

              Call Stack

                    │
                    ▼

          JavaScript Engine Executes
```

---

# How the Event Loop Works

The Event Loop repeatedly asks one question.

```text
Is the Call Stack empty?
```

If

```text
NO
```

↓

```text
Wait
```

If

```text
YES
```

↓

```text
Move one callback

from Callback Queue

to Call Stack
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

Call Stack becomes empty.

---

## Step 2

JavaScript encounters

```javascript
setTimeout(...)
```

JavaScript hands the timer to the Browser Web APIs.

The Browser starts the timer.

JavaScript immediately continues.

---

## Step 3

JavaScript executes

```javascript
console.log("End");
```

Output

```text
Start
End
```

Call Stack becomes empty.

---

## Step 4

After 1000 ms

The Browser finishes the timer.

The callback is moved to the

```text
Callback Queue
```

Current State

```text
Callback Queue

↓

console.log("Hello")
```

---

## Step 5

The Event Loop checks

```text
Is the Call Stack empty?
```

Answer

```text
Yes
```

The Event Loop moves the callback

```text
Callback Queue

↓

Call Stack
```

---

## Step 6

The JavaScript Engine executes

```javascript
console.log("Hello");
```

Output

```text
Start
End
Hello
```

Execution completes.

---

# Responsibilities

## Event Loop

- Continuously checks the Call Stack.
- Waits until the Call Stack becomes empty.
- Moves callbacks from the Callback Queue to the Call Stack.
- Never executes JavaScript.

---

# Responsibilities of Each Component

| Component | Responsibility |
|-----------|----------------|
| JavaScript Engine | Executes JavaScript |
| Call Stack | Executes one function at a time |
| Browser Web APIs | Handle timers, DOM, fetch, etc. |
| Callback Queue | Stores completed callbacks |
| Event Loop | Moves callbacks to the Call Stack |

---

# Characteristics

✅ Runs continuously.

✅ Checks whether the Call Stack is empty.

✅ Moves callbacks one at a time.

✅ Does not execute JavaScript.

---

# Common Interview Questions

## Q1

Who executes JavaScript?

Answer

```text
JavaScript Engine (through the Call Stack)
```

---

## Q2

What is the primary responsibility of the Event Loop?

Answer

```text
Check whether the Call Stack is empty and move callbacks from the Callback Queue to the Call Stack.
```

---

## Q3

Does the Event Loop execute callbacks?

Answer

```text
No
```

Reason

The Event Loop only moves callbacks.

The JavaScript Engine executes them.

---

## Q4

Suppose the Callback Queue contains

```text
Task A

↓

Task B
```

The Call Stack becomes empty.

Questions

Who moves the first callback?

Answer

```text
Event Loop
```

Which callback is moved first?

Answer

```text
Task A
```

Who executes it?

Answer

```text
JavaScript Engine
```

---

## Q5

Suppose the Call Stack is busy executing

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

The Event Loop cannot move callbacks until the Call Stack becomes empty.

---

# Golden Rules

## Rule 1

The Event Loop never executes JavaScript.

---

## Rule 2

Only the JavaScript Engine executes JavaScript.

---

## Rule 3

The Event Loop continuously checks whether the Call Stack is empty.

---

## Rule 4

If the Call Stack is empty,

the Event Loop moves one callback

from the Callback Queue

to the Call Stack.

---

## Rule 5

Callbacks are executed only after reaching the Call Stack.

---

# Complete Flow

```text
JavaScript Code

↓

Call Stack

↓

Encounter setTimeout()

↓

Browser Web APIs

↓

Timer Starts

↓

Timer Finishes

↓

Callback Queue

↓

Event Loop

↓

Call Stack

↓

JavaScript Engine Executes Callback
```

---

# Memory Trick

```text
Browser Finishes Task

↓

Callback Queue

↓

Event Loop Checks

↓

Call Stack Empty?

↓

YES

↓

Move Callback

↓

JavaScript Engine Executes
```