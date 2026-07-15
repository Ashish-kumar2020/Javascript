# JavaScript Fundamentals

# 10 - Default Parameters

---

# 📖 Definition

Default Parameters allow you to assign **default values to function parameters**.

If the caller doesn't provide a value (or passes `undefined`), JavaScript uses the default value.

Introduced in **ES6**.

---

# 🤔 Why were Default Parameters introduced?

Before ES6

```javascript
function greet(name) {
    name = name || "Guest";

    console.log(name);
}

greet();
```

Output

```javascript
Guest
```

Problem

```javascript
greet("");
```

Output

```javascript
Guest
```

`""` is a valid value, but `||` treats it as falsy.

Default Parameters solve this problem.

---

# Syntax

```javascript
function functionName(parameter = defaultValue) {

}
```

---

# Basic Example

```javascript
function greet(name = "Guest") {
    console.log(name);
}

greet();
```

Output

```javascript
Guest
```

---

Passing a value

```javascript
greet("Ashu");
```

Output

```javascript
Ashu
```

---

# When are Default Values Used?

Only when the argument is:

- `undefined`
- Not provided

---

Example

```javascript
function demo(a = 10) {
    console.log(a);
}

demo(undefined);
```

Output

```javascript
10
```

---

```javascript
demo();
```

Output

```javascript
10
```

---

```javascript
demo(null);
```

Output

```javascript
null
```

> 💡 **Why?**
>
> `null` is an actual value.
>
> Only `undefined` triggers the default parameter.

---

# Multiple Default Parameters

```javascript
function add(a = 0, b = 0) {
    return a + b;
}

add();
```

Output

```javascript
0
```

---

```javascript
add(10);
```

Output

```javascript
10
```

---

```javascript
add(10, 20);
```

Output

```javascript
30
```

---

# Expressions as Default Values

Default values can be expressions.

```javascript
function demo(a = 10 + 20) {
    console.log(a);
}

demo();
```

Output

```javascript
30
```

---

# Function Calls as Defaults

```javascript
function getRole() {
    return "Developer";
}

function createUser(role = getRole()) {
    console.log(role);
}

createUser();
```

Output

```javascript
Developer
```

---

# Previous Parameters

Default values can use previous parameters.

```javascript
function multiply(a, b = a * 2) {
    console.log(b);
}

multiply(10);
```

Output

```javascript
20
```

---

## Invalid Example

```javascript
function demo(a = b, b = 10) {}
```

Output

```text
ReferenceError
```

Why?

Parameters are initialized **from left to right**.

At the time `a` is evaluated, `b` does not exist yet.

---

# Objects as Default Parameters

```javascript
function createUser(user = {}) {
    console.log(user);
}

createUser();
```

Output

```javascript
{}
```

---

# Destructuring with Default Parameters

```javascript
function greet({
    name = "Guest"
} = {}) {

    console.log(name);

}

greet();
```

Output

```javascript
Guest
```

---

Why use `= {}`?

Without it

```javascript
greet();
```

would try to destructure

```javascript
undefined
```

causing

```text
TypeError
```

---

# Arrays as Default Parameters

```javascript
function printNumbers(
    numbers = []
){

    console.log(numbers);

}
```

---

# Evaluation Time

Default values are evaluated **every time the function is called**.

Example

```javascript
function getId() {
    return Math.random();
}

function demo(id = getId()) {
    console.log(id);
}

demo();
demo();
```

Output

```javascript
0.45
0.81
```

Different values every call.

---

# Default Parameters vs `||`

### Old Way

```javascript
function demo(value){

value=value||10;

}
```

Problem

```javascript
demo(0);
```

Result

```javascript
10
```

Wrong.

---

### Modern Way

```javascript
function demo(
value=10
){}
```

Now

```javascript
demo(0);
```

Output

```javascript
0
```

Correct.

---

# Rest + Default Parameters

```javascript
function demo(
a=10,
...numbers
){

console.log(a);

console.log(numbers);

}

demo(
undefined,
20,
30
);
```

Output

```javascript
10

[20,30]
```

---

# 💡 Why?

Default parameters are evaluated **before** the function body executes.

JavaScript creates a parameter scope, initializes parameters, applies defaults if necessary, and then runs the function body.

---

# Real-World Examples

## API Requests

```javascript
function fetchUsers(
page=1,
limit=10
){

}
```

---

## React Components

```javascript
function Button({

type="button"

}){

}
```

---

## Configuration

```javascript
function connect({

host="localhost",
port=3000

}={}){

}
```

---

# Common Mistakes

### Mistake 1

Using `||`

```javascript
value=value||10;
```

Use default parameters instead.

---

### Mistake 2

Expecting `null` to trigger the default.

```javascript
demo(null);
```

Result

```javascript
null
```

---

### Mistake 3

Using a later parameter as a default.

```javascript
function demo(
a=b,
b=10
){}
```

Throws

```text
ReferenceError
```

---

### Mistake 4

Destructuring without a fallback object.

```javascript
function demo({
name
}){}
```

Calling

```javascript
demo();
```

Throws

```text
TypeError
```

---

# Interview Traps

### Trap 1

```javascript
function demo(a=10){

console.log(a);

}

demo(undefined);
```

Output

```javascript
10
```

---

### Trap 2

```javascript
demo(null);
```

Output

```javascript
null
```

---

### Trap 3

```javascript
function demo(
a=5,
b=a*2
){

console.log(b);

}

demo();
```

Output

```javascript
10
```

---

### Trap 4

```javascript
function demo({

name="Guest"

}={}){

console.log(name);

}

demo();
```

Output

```javascript
Guest
```

---

# Best Practices

✅ Prefer default parameters over `||`.

✅ Use `{}` as a fallback when destructuring function parameters.

✅ Use meaningful default values.

✅ Avoid complex expressions as defaults unless necessary.

---

# Senior Interview Questions

1. Why were Default Parameters introduced?
2. When are default values applied?
3. Why doesn't `null` trigger a default value?
4. Can one parameter use another parameter as its default?
5. Why does `a = b` throw a `ReferenceError` if `b` comes later?
6. Why is `= {}` commonly used with object destructuring?
7. When are default expressions evaluated?

---

# Quick Revision

- Introduced in ES6.
- Applied only for `undefined` or missing arguments.
- `null` does **not** trigger the default.
- Default values can be expressions or function calls.
- Parameters are initialized **left to right**.
- Use `{}` when destructuring object parameters.
- Prefer default parameters over `value || defaultValue`.
- Default expressions are evaluated on every function call.