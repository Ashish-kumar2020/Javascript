# 📘 JavaScript Functions Module

---

# Function Declaration

## Definition

A **Function Declaration** is a function defined using the `function` keyword with a function name. It is **fully hoisted**, so it can be called before its declaration.

### Example

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Output

```text
Hello
```

---

## Interview Questions

### 1. What is a Function Declaration?

A Function Declaration is a function defined using the `function` keyword with a function name. It is fully hoisted and can be invoked before its declaration.

---

### 2. Why can Function Declarations be called before their declaration?

Because during the memory creation phase, JavaScript stores the **entire function** in memory.

---

# Function Expression

## Definition

A **Function Expression** is a function assigned to a variable. Only the variable is hoisted according to its declaration (`var`, `let`, or `const`), not the function assignment.

### Example

```javascript
const greet = function () {
    console.log("Hello");
};

greet();
```

Output

```text
Hello
```

---

## Interview Questions

### 1. What is a Function Expression?

A Function Expression is a function assigned to a variable. Unlike Function Declarations, it cannot be invoked before its assignment.

---

### 2. What happens if we call a Function Expression before its declaration?

#### Using `var`

```javascript
greet();

var greet = function () {};
```

Output

```text
TypeError: greet is not a function
```

Reason:

During memory creation,

```text
greet → undefined
```

---

#### Using `let` / `const`

```javascript
greet();

const greet = function () {};
```

Output

```text
ReferenceError
```

Reason:

The variable is inside the **Temporal Dead Zone (TDZ)**.

---

# Function Declaration vs Function Expression

| Function Declaration | Function Expression |
|----------------------|--------------------|
| Fully hoisted | Variable only is hoisted |
| Can be called before declaration | Cannot be called before assignment |
| Named function | Function stored inside a variable |

---

## Interview Questions

### Difference between Function Declaration and Function Expression?

A Function Declaration is fully hoisted because the complete function is stored during the memory creation phase.

A Function Expression stores a function inside a variable. Only the variable is hoisted, while the function assignment happens during the execution phase.

---

# First-Class Functions

## Definition

JavaScript treats functions as **values**. A function can be:

- Stored in a variable
- Passed as an argument
- Returned from another function

Because of these features, JavaScript is called a **First-Class Function Language**.

---

### Store in a Variable

```javascript
function greet() {
    console.log("Hello");
}

const fn = greet;
```

---

### Pass as an Argument

```javascript
function execute(fn) {
    fn();
}

execute(greet);
```

---

### Return from a Function

```javascript
function outer() {
    return function () {
        console.log("Hello");
    };
}

outer()();
```

---

## Interview Questions

### 1. Why is JavaScript called a First-Class Function language?

JavaScript is called a First-Class Function language because functions are treated like values. They can be stored in variables, passed as arguments, and returned from functions.

---

### 2. What is the difference between `greet` and `greet()`?

```javascript
greet
```

Represents the **function itself (function reference).**

```javascript
greet()
```

Executes the function and returns its return value.

---

# Callback Functions

## Definition

A **Callback Function** is a function passed as an argument to another function that is invoked later by the receiving function.

---

### Example

```javascript
function greet() {
    console.log("Hello");
}

function execute(fn) {
    fn();
}

execute(greet);
```

Here,

```text
greet
```

is the **Callback Function**.

---

## Interview Questions

### 1. What is a Callback Function?

A Callback Function is a function passed as an argument to another function and executed later by that function.

---

### 2. Is every function passed as an argument a callback?

Only if the receiving function invokes it later.

---

### 3. Is every callback a First-Class Function?

Yes.

Because callbacks are passed as arguments, which is possible due to First-Class Functions.

---

# Higher-Order Functions

## Definition

A **Higher-Order Function** is a function that:

- Accepts one or more functions as arguments
- OR
- Returns another function

---

### Example 1

```javascript
function greet() {
    console.log("Hello");
}

function execute(fn) {
    fn();
}

execute(greet);
```

Here,

```text
execute
```

is the **Higher-Order Function**.

---

### Example 2

```javascript
function outer() {
    return function () {
        console.log("Hello");
    };
}
```

Since `outer()` returns another function, it is also a Higher-Order Function.

---

## Interview Questions

### 1. What is a Higher-Order Function?

A Higher-Order Function is a function that accepts one or more functions as arguments or returns another function.

---

### 2. Why is `setTimeout()` a Higher-Order Function?

Because it accepts a callback function and decides when to execute it.

---

### 3. Difference between Callback Function and Higher-Order Function?

| Callback Function | Higher-Order Function |
|-------------------|----------------------|
| Passed as an argument | Receives or returns functions |
| Invoked later | Decides when to invoke the callback |

---

# Relationship

```text
                 First-Class Function
                (Functions are values)
                         │
        ┌────────────────┴────────────────┐
        │                                 │
Store in variable                 Pass as argument
        │                                 │
        │                          Callback Function
        │                                 │
        └────────────────┬────────────────┘
                         │
                         ▼
               Higher-Order Function
        (Receives callback or returns one)
```