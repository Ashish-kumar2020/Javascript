# JavaScript Fundamentals

# 06 - Template Literals

---

# 📖 Definition

Template Literals (Template Strings) are a modern way of creating strings in JavaScript.

Introduced in **ES6**, they provide:

- String interpolation
- Multi-line strings
- Embedded expressions
- Tagged templates

They are enclosed using **backticks (` `)** instead of single (`'`) or double (`"`).

```javascript
const name = "Ashu";

console.log(`Hello ${name}`);
```

Output

```javascript
Hello Ashu
```

---

# Why were Template Literals introduced?

Before ES6, developers used string concatenation.

```javascript
const name = "Ashu";

const message = "Hello " + name + " Welcome!";
```

Problems:

- Hard to read
- Difficult to maintain
- Error-prone with multiple variables

Template literals solve these issues by allowing expressions directly inside strings.

---

# Syntax

```javascript
`Text ${expression}`
```

Anything inside `${}` is evaluated as a JavaScript expression.

---

# String Interpolation

```javascript
const name = "Ashu";
const age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);
```

Output

```javascript
My name is Ashu and I am 25 years old.
```

---

# Expressions Inside Template Literals

Any valid JavaScript expression can be used.

```javascript
const a = 10;
const b = 20;

console.log(`${a + b}`);
```

Output

```javascript
30
```

---

```javascript
console.log(`${10 * 5}`);
```

Output

```javascript
50
```

---

```javascript
console.log(`${true && false}`);
```

Output

```javascript
false
```

---

# Function Calls

```javascript
function greet(name) {
    return `Hello ${name}`;
}

console.log(`${greet("Ashu")}`);
```

Output

```javascript
Hello Ashu
```

---

# Object Properties

```javascript
const user = {
    name: "Ashu",
    age: 25
};

console.log(`${user.name}`);
```

Output

```javascript
Ashu
```

---

# Array Access

```javascript
const colors = ["Red", "Blue", "Green"];

console.log(`${colors[1]}`);
```

Output

```javascript
Blue
```

---

# Multi-line Strings

Before ES6

```javascript
const text =
"Hello\n" +
"World";
```

After ES6

```javascript
const text = `
Hello
World
`;
```

Output

```text
Hello
World
```

No need for `\n`.

---

# Nested Template Literals

```javascript
const firstName = "Ashu";
const lastName = "Singh";

console.log(`Welcome ${`${firstName} ${lastName}`}`);
```

Output

```javascript
Welcome Ashu Singh
```

---

# Ternary Operator Inside Template Literals

```javascript
const age = 20;

console.log(`${age >= 18 ? "Adult" : "Minor"}`);
```

Output

```javascript
Adult
```

---

# Optional Chaining Example

```javascript
const user = {
    name: "Ashu"
};

console.log(`${user.address?.city}`);
```

Output

```javascript
undefined
```

---

# Tagged Templates

A tagged template allows a function to process a template literal before it becomes a string.

Syntax

```javascript
tagFunction`Hello ${name}`
```

Example

```javascript
function tag(strings, value) {
    console.log(strings);
    console.log(value);
}

const name = "Ashu";

tag`Hello ${name}`;
```

Output

```javascript
["Hello ", ""]
Ashu
```

---

# Why Tagged Templates?

Used for:

- HTML templating
- SQL query builders
- CSS-in-JS libraries
- Internationalization (i18n)
- Custom formatting

Popular libraries:

- styled-components
- lit-html

---

# Escaping Backticks

Use a backslash.

```javascript
console.log(`This is a \`backtick\``);
```

Output

```javascript
This is a `backtick`
```

---

# Comparison

### String Concatenation

```javascript
const name = "Ashu";

const text = "Hello " + name;
```

---

### Template Literal

```javascript
const name = "Ashu";

const text = `Hello ${name}`;
```

Cleaner and easier to read.

---

# Performance

For most applications, the performance difference between string concatenation and template literals is negligible.

Choose template literals for readability and maintainability.

---

# Common Mistakes

### Mistake 1

Using single quotes instead of backticks.

❌

```javascript
'Hello ${name}'
```

Output

```javascript
Hello ${name}
```

Interpolation doesn't work.

---

✅

```javascript
`Hello ${name}`
```

---

### Mistake 2

Forgetting `${}`

❌

```javascript
`Hello name`
```

---

✅

```javascript
`Hello ${name}`
```

---

### Mistake 3

Using statements inside `${}`

❌

```javascript
`${if(true){}}
```

Statements are not allowed.

Only expressions.

---

# 💡 Why?

### Why does `${}` only allow expressions?

Because JavaScript evaluates the content inside `${}` and expects it to return a value.

Expressions produce values.

Statements do not.

Examples

Expression ✅

```javascript
10 + 20
```

Statement ❌

```javascript
if (true) {}
```

---

# Real-World Use Cases

### API URLs

```javascript
const id = 10;

fetch(`/users/${id}`);
```

---

### Dynamic HTML

```javascript
const name = "Ashu";

const html = `
<h1>${name}</h1>
`;
```

---

### Logging

```javascript
console.log(`User ${user.name} logged in`);
```

---

### Error Messages

```javascript
throw new Error(`User ${id} not found`);
```

---

# Interview Questions

### Q1. Difference between template literals and string concatenation?

Template literals improve readability, support interpolation, and allow multi-line strings.

---

### Q2. What is string interpolation?

Embedding JavaScript expressions inside a string using `${}`.

---

### Q3. Can we execute functions inside `${}`?

Yes.

Any expression is allowed.

---

### Q4. Can we use `if` statements inside `${}`?

No.

Only expressions are allowed.

---

### Q5. What are tagged templates?

Functions that receive and process template literals before producing the final string.

---

### Q6. Why are template literals preferred?

- Better readability
- Cleaner syntax
- Multi-line support
- Dynamic content generation

---

# Quick Revision

- Introduced in ES6.
- Uses backticks (` `).
- `${}` performs string interpolation.
- Supports expressions.
- Supports function calls.
- Supports object and array access.
- Supports multi-line strings.
- Tagged templates allow custom processing.
- `${}` accepts expressions, not statements.
- Preferred over string concatenation for readability.