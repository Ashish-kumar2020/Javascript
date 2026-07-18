# 📘 Closures

## Definition

A **Closure** is a function bundled together with its lexical environment.

OR

A Closure is created when an inner function remembers and retains access to the variables of its outer function even after the outer function has finished executing.

---

## Why do Closures work?

Closures work because of **Lexical Scoping**.

Every function remembers the lexical environment in which it was created through a hidden `[[Environment]]` reference.

---

## Example

```javascript
function outer() {

    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const fn = outer();

fn();
fn();
fn();
```

Output

```text
1
2
3
```

---

## Interview Questions

### What is a Closure?

A Closure is a function bundled together with its lexical environment.

---

### Why isn't the outer variable destroyed?

Although the Function Execution Context is destroyed, the Lexical Environment is kept alive because the returned function still has a hidden reference to it.

---

### What topics are used inside Closures?

- Execution Context
- Lexical Environment
- Scope Chain
- First-Class Functions

---

# 📘 Data Hiding

## Definition

Data Hiding is the technique of restricting direct access to variables and exposing them only through specific functions.

Implemented using **Closures**.

---

## Example

```javascript
function createBankAccount() {

    let balance = 1000;

    return {

        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }

    };
}
```

---

## Why is `balance` private?

Because it belongs to the lexical environment of `createBankAccount()` and can only be accessed through the returned functions.

---

## Interview Question

### How is Data Hiding implemented in JavaScript?

Using Closures by keeping variables private inside a function and exposing only the required methods.

---

# 📘 Memoization

## Definition

Memoization is an optimization technique that stores previously computed results so repeated calculations are avoided.

Implemented using **Closures**.

---

## Example

```javascript
function memoizedSquare() {

    const cache = {};

    return function (n) {

        if (cache[n]) {
            return cache[n];
        }

        cache[n] = n * n;

        return cache[n];
    };
}
```

---

## Why does `cache` survive?

Because the returned function forms a Closure over the `cache` object.

---

## Interview Question

### What is Memoization?

Memoization is an optimization technique that caches computed results using Closures.

---

# 📘 Currying

## Definition

Currying is the technique of converting a function with multiple arguments into a sequence of functions, each taking one argument.

---

## Normal Function

```javascript
function add(a, b) {
    return a + b;
}
```

---

## Curried Function

```javascript
function add(a) {

    return function (b) {

        return a + b;

    };

}
```

Usage

```javascript
add(10)(20);
```

Output

```text
30
```

---

## Why does it work?

The returned function remembers the previous arguments using **Closures**.

---

## Interview Question

### What is Currying?

Currying converts a multi-argument function into multiple single-argument functions using Closures.

---

# 📘 Once Function

## Definition

A Once Function is a function that executes only once.

Implemented using **Closures**.

---

## Example

```javascript
function once(fn) {

    let executed = false;

    return function () {

        if (executed) return;

        executed = true;

        return fn();

    };

}
```

---

## Usage

```javascript
const greet = once(() => console.log("Hello"));

greet();
greet();
greet();
```

Output

```text
Hello
```

---

## Why does it work?

The returned function remembers the value of `executed` using a Closure.

---

## Interview Question

### What is a Once Function?

A Once Function is a Higher-Order Function that uses Closures to remember whether a function has already been executed.

# ⭐ Quick Revision

## Closures

Function + Lexical Environment

---

## Data Hiding

Closures → Private Variables

---

## Memoization

Closures → Cache Results

---

## Currying

Closures → Remember Previous Arguments

---

## Once Function

Closures → Remember Execution State