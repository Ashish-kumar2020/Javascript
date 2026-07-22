# Browser Runtime

## Why do we need Browser Runtime?

JavaScript is **single-threaded**.

If JavaScript had to handle timers, network requests, DOM events, etc. by itself, it would block execution.

Instead, the **browser provides additional components** that work with the JavaScript Engine.

These components together are called the **Browser Runtime**.

---

# Browser Runtime Architecture

```text
+----------------------------------------+
|              Browser                   |
|                                        |
|  +-------------------------------+     |
|  |      JavaScript Engine        |     |
|  |                               |     |
|  |      Call Stack               |     |
|  +-------------------------------+     |
|                                        |
|  Web APIs                             |
|  - setTimeout()                       |
|  - fetch()                            |
|  - DOM                               |
|  - addEventListener()                 |
|                                        |
|  Callback Queue                       |
|                                        |
|  Event Loop                           |
+----------------------------------------+
```

---

# JavaScript Engine

The JavaScript Engine is responsible for executing JavaScript code.

Responsibilities

- Reads JavaScript code.
- Compiles and executes code.
- Maintains the Call Stack.

Popular JavaScript Engines

| Browser | Engine |
|----------|---------|
| Chrome | V8 |
| Edge | V8 |
| Node.js | V8 |
| Firefox | SpiderMonkey |
| Safari | JavaScriptCore |

---

# Call Stack

The Call Stack is a stack data structure used by the JavaScript Engine to execute JavaScript functions.

Characteristics

- LIFO (Last In First Out)
- Executes one function at a time
- Part of the JavaScript Engine

Example

```javascript
console.log("Hello");
```

Execution

```text
Push console.log()

↓

Execute

↓

Pop console.log()

↓

Stack Empty
```

---

# Web APIs

Web APIs are **not part of JavaScript**.

They are provided by the browser.

Examples

- `setTimeout()`
- `setInterval()`
- `fetch()`
- `DOM`
- `addEventListener()`
- `requestAnimationFrame()`

Whenever JavaScript encounters one of these APIs, it hands the work to the browser.

---

# Example

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Hello");
}, 1000);

console.log("End");
```

Execution

Step 1

```javascript
console.log("Start");
```

Output

```text
Start
```

---

Step 2

JavaScript encounters

```javascript
setTimeout(...)
```

JavaScript does **not** start the timer.

Instead it asks the browser:

```text
Please start a timer for 1000 ms.
```

The browser starts the timer inside **Web APIs**.

---

Step 3

JavaScript immediately continues executing.

```javascript
console.log("End");
```

Output

```text
Start
End
```

JavaScript never waits.

---

Step 4

After 1000 ms

The browser notices the timer has completed.

The callback is **not executed immediately**.

Instead, it is sent to the **Callback Queue**.

---

# Responsibilities

## JavaScript Engine

- Executes JavaScript
- Maintains the Call Stack

---

## Call Stack

- Executes one function at a time
- Runs synchronous JavaScript

---

## Browser Web APIs

- Start timers
- Handle network requests
- Handle DOM events
- Handle browser-specific functionality

---

# Characteristics

✅ JavaScript Engine executes JavaScript.

✅ Call Stack executes one function at a time.

✅ Browser provides Web APIs.

✅ Web APIs are not part of JavaScript.

✅ JavaScript hands browser-related work to Web APIs.

---

# Common Interview Questions

## Q1

Who starts the timer for `setTimeout()`?

Answer

```text
Browser Web APIs
```

---

## Q2

Who executes

```javascript
console.log("End");
```

Answer

```text
JavaScript Engine
```

Reason

JavaScript never waits for the timer.

---

## Q3

Does JavaScript wait during `setTimeout()`?

Answer

```text
No
```

Reason

JavaScript hands the timer to the browser and immediately continues executing the next statement.

---

# Golden Rules

## Rule 1

JavaScript executes JavaScript.

---

## Rule 2

The browser executes browser-specific APIs.

---

## Rule 3

`setTimeout()` timer is started by the Browser Web APIs.

---

## Rule 4

JavaScript never waits for `setTimeout()`.

---

## Rule 5

Web APIs are not part of JavaScript.

---

# Memory Trick

```text
JavaScript Engine

↓

Call Stack

↓

Encounter setTimeout()

↓

Browser Web APIs

↓

Timer Starts

↓

JavaScript Continues Executing
```