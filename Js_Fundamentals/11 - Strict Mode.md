# JavaScript Fundamentals

# 11 - Strict Mode (`"use strict"`)

---

# 📖 Definition

**Strict Mode** is a special JavaScript mode that enables **stricter parsing and error handling**.

It helps developers write **safer, cleaner, and more predictable** JavaScript code by converting many silent errors into actual errors.

Introduced in **ES5 (2009)**.

---

# 🤔 Why was Strict Mode introduced?

Before ES5, JavaScript was very forgiving.

Many coding mistakes were silently ignored.

Example

```javascript
name = "Ashu";

console.log(name);
```

Output

```javascript
Ashu
```

Why?

JavaScript automatically creates a global variable.

This can cause:

- Memory leaks
- Global namespace pollution
- Hard-to-debug bugs

Strict Mode prevents this.

---

# Enabling Strict Mode

## Entire Script

```javascript
"use strict";

let name = "Ashu";
```

The directive must appear at the top of the file.

---

## Inside a Function

```javascript
function demo() {

    "use strict";

    console.log("Hello");

}
```

Only that function runs in Strict Mode.

---

# 💡 Why?

JavaScript reads `"use strict"` as a **directive**, not a normal string.

If it appears at the beginning of a script or function, the JavaScript engine switches to Strict Mode for that scope.

---

# Feature 1 - Prevents Accidental Global Variables

Without Strict Mode

```javascript
function demo() {

    age = 25;

}

demo();

console.log(age);
```

Output

```javascript
25
```

A global variable is created.

---

With Strict Mode

```javascript
"use strict";

function demo() {

    age = 25;

}

demo();
```

Output

```text
ReferenceError: age is not defined
```

---

# Feature 2 - Duplicate Parameter Names Not Allowed

Without Strict Mode

```javascript
function demo(a, a) {

}
```

Allowed in non-strict mode (legacy behavior).

---

With Strict Mode

```javascript
"use strict";

function demo(a, a) {

}
```

Output

```text
SyntaxError
```

---

# Feature 3 - Assignment to Read-Only Properties

```javascript
"use strict";

const obj = {};

Object.defineProperty(obj, "id", {
    value: 1,
    writable: false
});

obj.id = 2;
```

Output

```text
TypeError
```

Without Strict Mode, this assignment fails silently.

---

# Feature 4 - Deleting Variables or Functions

```javascript
"use strict";

let name = "Ashu";

delete name;
```

Output

```text
SyntaxError
```

You can delete object properties, but not variables.

---

# Feature 5 - `this` Behavior

Without Strict Mode

```javascript
function demo() {
    console.log(this);
}

demo();
```

Output (Browser)

```javascript
window
```

---

With Strict Mode

```javascript
"use strict";

function demo() {
    console.log(this);
}

demo();
```

Output

```javascript
undefined
```

---

# 💡 Why?

In non-strict mode, JavaScript automatically binds `this` to the global object.

In Strict Mode, JavaScript does **not** perform this automatic binding.

This prevents accidental access to the global object.

---

# Feature 6 - Reserved Keywords

Strict Mode reserves some keywords for future JavaScript versions.

Example

```javascript
"use strict";

let public = 10;
```

Output

```text
SyntaxError
```

Some reserved words include:

- `public`
- `private`
- `protected`
- `implements`
- `interface`
- `package`

---

# Feature 7 - Octal Literals

Without Strict Mode

```javascript
let num = 010;
```

Legacy JavaScript interprets this as an octal number.

---

With Strict Mode

```javascript
"use strict";

let num = 010;
```

Output

```text
SyntaxError
```

Modern JavaScript uses:

```javascript
0o10
```

---

# Feature 8 - Duplicate Object Properties

Historically, duplicate object property names were problematic.

Modern JavaScript allows them, but the last property wins.

```javascript
const user = {
    name: "Ashu",
    name: "John"
};

console.log(user.name);
```

Output

```javascript
John
```

Strict Mode does not change this in modern JavaScript.

---

# Strict Mode in ES Modules

Every **ES Module** automatically runs in Strict Mode.

Example

```javascript
// app.js

export const name = "Ashu";
```

No need to write:

```javascript
"use strict";
```

---

# Strict Mode in Classes

All JavaScript classes are automatically executed in Strict Mode.

```javascript
class User {

}
```

No `"use strict"` required.

---

# When Should You Use Strict Mode?

For older JavaScript files (non-module scripts), use it.

For:

- ES Modules
- React
- Node.js (ESM)
- Modern bundlers (Vite, Webpack, Next.js)

Strict Mode is already enabled automatically.

---

# Common Mistakes

### Mistake 1

Adding `"use strict"` after other statements.

❌

```javascript
let a = 10;

"use strict";
```

Ignored.

---

### Mistake 2

Expecting `this` to refer to `window`.

```javascript
"use strict";

function demo() {
    console.log(this);
}
```

Output

```javascript
undefined
```

---

### Mistake 3

Creating variables without declarations.

```javascript
"use strict";

name = "Ashu";
```

Throws

```text
ReferenceError
```

---

# Interview Traps

### Trap 1

```javascript
"use strict";

x = 10;
```

Output

```text
ReferenceError
```

---

### Trap 2

```javascript
"use strict";

function demo() {
    console.log(this);
}

demo();
```

Output

```javascript
undefined
```

---

### Trap 3

```javascript
"use strict";

function demo(a, a) {}
```

Output

```text
SyntaxError
```

---

### Trap 4

```javascript
"use strict";

delete x;
```

Output

```text
SyntaxError
```

---

# Strict Mode vs Non-Strict Mode

| Feature | Non-Strict | Strict |
|---------|------------|---------|
| Accidental Globals | ✅ Allowed | ❌ Error |
| Duplicate Parameters | ✅ Allowed | ❌ Error |
| `this` in Function | Global Object (`window` in browsers) | `undefined` |
| Silent Errors | Ignored | Throws Errors |
| Reserved Keywords | Some allowed | Restricted |
| Octal Literals (`010`) | Legacy support | ❌ Error |

---

# Best Practices

✅ Use ES Modules whenever possible—they enable Strict Mode automatically.

✅ Always declare variables with `let`, `const`, or `var`.

✅ Prefer `const` by default and `let` when reassignment is needed.

✅ Don't rely on `this` being the global object.

---

# Senior Interview Questions

1. Why was Strict Mode introduced?
2. How do you enable Strict Mode?
3. What happens if you assign to an undeclared variable?
4. How does `this` behave differently in Strict Mode?
5. Are ES Modules in Strict Mode?
6. Are JavaScript classes in Strict Mode?
7. Why is Strict Mode useful for large applications?

---

# Quick Revision

- Introduced in ES5.
- Enabled with `"use strict"` at the top of a script or function.
- Converts many silent errors into actual errors.
- Prevents accidental global variables.
- Disallows duplicate parameter names.
- `this` in a regular function becomes `undefined`.
- ES Modules automatically use Strict Mode.
- JavaScript classes automatically use Strict Mode.
- Recommended for legacy scripts; automatic in modern JavaScript modules.