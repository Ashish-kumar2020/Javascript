# JavaScript Fundamentals

# 04 - Truthy & Falsy Values

---

# 📖 Definition

Every value in JavaScript has an **inherent boolean value**.

When a value is used in a boolean context (e.g., `if`, `while`, logical operators), JavaScript automatically converts it to either **`true`** or **`false`**.

This automatic conversion is known as **Boolean Coercion**.

---

# How JavaScript Evaluates Conditions

Whenever JavaScript encounters:

- `if`
- `while`
- `for`
- Ternary Operator
- `&&`
- `||`
- `!`

It internally performs:

```javascript
Boolean(value)
```

Example

```javascript
if ("Hello") {
    console.log("Executed");
}
```

Internally

```javascript
if (Boolean("Hello")) {
    console.log("Executed");
}
```

---

# Falsy Values

JavaScript has **only 8 falsy values**.

| Value | Type |
|--------|------|
| false | Boolean |
| 0 | Number |
| -0 | Number |
| 0n | BigInt |
| "" | Empty String |
| null | Null |
| undefined | Undefined |
| NaN | Number |

Everything else is **truthy**.

---

# Truthy Values

Examples

```javascript
true

1

-10

3.14

"Hello"

" "

[]

{}

function(){}

Symbol()

10n
```

All of the above evaluate to `true`.

---

# Boolean Conversion

Use the `Boolean()` function to explicitly check truthiness.

```javascript
Boolean(1)
// true
```

```javascript
Boolean(0)
// false
```

```javascript
Boolean("Hello")
// true
```

```javascript
Boolean("")
// false
```

```javascript
Boolean([])
// true
```

```javascript
Boolean({})
// true
```

---

# Empty Objects & Arrays

A common interview trap.

```javascript
Boolean([])
// true
```

```javascript
Boolean({})
// true
```

Although they are empty, they are still **objects**, and **all objects are truthy**.

---

# Empty String vs Space

```javascript
Boolean("")
// false
```

```javascript
Boolean(" ")
// true
```

An empty string is falsy.

A string containing even one space is truthy.

---

# Logical AND (`&&`)

Returns the **first falsy value**.

If no falsy value exists, returns the **last value**.

Examples

```javascript
true && true
// true
```

```javascript
10 && 20
// 20
```

```javascript
0 && 20
// 0
```

```javascript
"Hello" && 100
// 100
```

```javascript
null && "Hello"
// null
```

---

# Logical OR (`||`)

Returns the **first truthy value**.

If no truthy value exists, returns the **last value**.

Examples

```javascript
0 || 10
// 10
```

```javascript
"" || "Guest"
// "Guest"
```

```javascript
false || true
// true
```

```javascript
null || undefined
// undefined
```

---

# Logical NOT (`!`)

Negates a boolean value.

```javascript
!true
// false
```

```javascript
!false
// true
```

Non-boolean values are first converted using `Boolean()`.

```javascript
!"Hello"
// false
```

```javascript
!0
// true
```

---

# Double NOT (`!!`)

A quick way to convert any value into a boolean.

```javascript
!!"Hello"
// true
```

```javascript
!!0
// false
```

Equivalent to

```javascript
Boolean(value)
```

---

# Short-Circuit Evaluation

JavaScript stops evaluating as soon as the result is known.

---

## AND (`&&`)

```javascript
false && console.log("Hello");
```

Output

Nothing.

The second operand is never executed.

---

## OR (`||`)

```javascript
true || console.log("Hello");
```

Output

Nothing.

The second operand is skipped.

---

# Practical Examples

## Default Values (Traditional)

```javascript
const username = input || "Guest";
```

If `input` is falsy, `"Guest"` is used.

⚠️ Problem:

```javascript
const count = 0;

const value = count || 100;

// 100
```

`0` is a valid value but is treated as falsy.

Use **Nullish Coalescing (`??`)** instead (covered in the next topic).

---

## Conditional Execution

```javascript
isLoggedIn && showDashboard();
```

Instead of

```javascript
if (isLoggedIn) {
    showDashboard();
}
```

---

# Truthy/Falsy Conversion Table

| Value | Boolean(value) |
|--------|----------------|
| false | false |
| true | true |
| 0 | false |
| 1 | true |
| -1 | true |
| "" | false |
| " " | true |
| "Hello" | true |
| null | false |
| undefined | false |
| NaN | false |
| [] | true |
| {} | true |
| function(){} | true |
| Symbol() | true |
| 0n | false |
| 1n | true |

---

# Interview Traps

## Trap 1

```javascript
Boolean([])
```

Result

```javascript
true
```

---

## Trap 2

```javascript
Boolean({})
```

Result

```javascript
true
```

---

## Trap 3

```javascript
Boolean(" ")
```

Result

```javascript
true
```

---

## Trap 4

```javascript
0 || 100
```

Result

```javascript
100
```

---

## Trap 5

```javascript
0 && 100
```

Result

```javascript
0
```

---

## Trap 6

```javascript
!!"Hello"
```

Result

```javascript
true
```

---

## Trap 7

```javascript
!![]
```

Result

```javascript
true
```

---

# Best Practices

✅ Know the **8 falsy values** by heart.

✅ Prefer `??` over `||` when `0`, `false`, or `""` are valid values.

✅ Use `&&` for conditional execution.

✅ Use `Boolean()` or `!!` when you explicitly need a boolean.

---

# Senior Interview Questions

1. What is Boolean coercion?
2. Name all the falsy values in JavaScript.
3. Why is `[]` truthy?
4. Why is `{}` truthy?
5. Difference between `&&` and `||`.
6. Explain short-circuit evaluation.
7. Difference between `Boolean(value)` and `!!value`.
8. Why can `||` cause bugs with default values?

---

# Quick Revision

- JavaScript automatically converts values to boolean in conditional contexts.
- There are **only 8 falsy values**:
  - `false`
  - `0`
  - `-0`
  - `0n`
  - `""`
  - `null`
  - `undefined`
  - `NaN`
- Everything else is truthy.
- `&&` → Returns the **first falsy value** or the **last value**.
- `||` → Returns the **first truthy value** or the **last value**.
- `!` negates a boolean value.
- `!!value` is equivalent to `Boolean(value)`.
- Empty arrays `[]` and empty objects `{}` are **truthy**.
- Use `??` instead of `||` when `0`, `false`, or `""` are valid values.