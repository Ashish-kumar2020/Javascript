# JavaScript Fundamentals

# 05 - Operators

---

# 📖 Definition

Operators are special symbols that perform operations on one or more operands (values or variables).

```javascript
let sum = 10 + 20;
```

Here,

- `+` → Operator
- `10`, `20` → Operands

---

# Types of Operators

| Operator Type | Purpose |
|---------------|---------|
| Arithmetic | Mathematical calculations |
| Assignment | Assign values |
| Comparison | Compare values |
| Logical | Combine conditions |
| Nullish | Handle null/undefined |
| Ternary | Conditional expression |
| Bitwise | Binary operations |
| String | Concatenation |
| Type | Check data types |
| Relational | Check property existence |

---

# 1. Arithmetic Operators

Used for mathematical operations.

| Operator | Description | Example |
|----------|-------------|---------|
| `+` | Addition | `10 + 5` |
| `-` | Subtraction | `10 - 5` |
| `*` | Multiplication | `10 * 5` |
| `/` | Division | `10 / 5` |
| `%` | Modulus | `10 % 3` |
| `**` | Exponentiation | `2 ** 3` |

### Examples

```javascript
10 + 20
// 30

20 - 5
// 15

5 * 10
// 50

10 / 2
// 5

10 % 3
// 1

2 ** 4
// 16
```

---

# Increment & Decrement

## Pre Increment

```javascript
let a = 5;

++a;

console.log(a);
```

Output

```javascript
6
```

---

## Post Increment

```javascript
let a = 5;

a++;

console.log(a);
```

Output

```javascript
6
```

---

### Difference

```javascript
let a = 5;

console.log(++a);
```

Output

```javascript
6
```

---

```javascript
let a = 5;

console.log(a++);
```

Output

```javascript
5
```

Then `a` becomes `6`.

---

# 2. Assignment Operators

Used to assign values.

| Operator | Example | Equivalent |
|----------|----------|------------|
| `=` | `a = 5` | Assign |
| `+=` | `a += 2` | `a = a + 2` |
| `-=` | `a -= 2` | `a = a - 2` |
| `*=` | `a *= 2` | `a = a * 2` |
| `/=` | `a /= 2` | `a = a / 2` |
| `%=` | `a %= 2` | `a = a % 2` |
| `**=` | `a **= 2` | `a = a ** 2` |

---

# 3. Comparison Operators

Return a boolean.

| Operator | Description |
|----------|-------------|
| `==` | Loose Equality |
| `===` | Strict Equality |
| `!=` | Loose Inequality |
| `!==` | Strict Inequality |
| `>` | Greater Than |
| `<` | Less Than |
| `>=` | Greater Than or Equal |
| `<=` | Less Than or Equal |

---

### Examples

```javascript
5 == "5"
// true
```

```javascript
5 === "5"
// false
```

```javascript
10 > 5
// true
```

```javascript
5 <= 5
// true
```

---

# Why Prefer `===`?

`==` performs **type coercion**, which can lead to unexpected results.

```javascript
false == 0
// true
```

```javascript
"" == 0
// true
```

```javascript
[] == false
// true
```

Using `===` avoids these surprises.

---

# 4. Logical Operators

| Operator | Description |
|----------|-------------|
| `&&` | AND |
| `||` | OR |
| `!` | NOT |

---

### AND (`&&`)

Returns the first falsy value or the last value.

```javascript
10 && 20
// 20

0 && 20
// 0
```

---

### OR (`||`)

Returns the first truthy value or the last value.

```javascript
0 || 100
// 100

"Hello" || "World"
// "Hello"
```

---

### NOT (`!`)

```javascript
!true
// false

!0
// true
```

---

# 5. Nullish Coalescing (`??`)

Returns the right-hand value **only if** the left-hand value is `null` or `undefined`.

```javascript
const name = null ?? "Guest";
// "Guest"
```

```javascript
const count = 0 ?? 100;
// 0
```

### Why use `??` instead of `||`?

```javascript
0 || 100
// 100 ❌
```

```javascript
0 ?? 100
// 0 ✅
```

`||` treats all falsy values as missing.

`??` treats only `null` and `undefined` as missing.

---

# 6. Ternary Operator (`? :`)

Short form of `if...else`.

```javascript
condition ? value1 : value2;
```

Example

```javascript
const age = 20;

const result = age >= 18
    ? "Adult"
    : "Minor";
```

---

# 7. String Operator

`+` concatenates strings.

```javascript
"Hello" + " World"
// "Hello World"
```

---

# 8. typeof Operator

Returns the type of a value.

```javascript
typeof "Hello"
// string

typeof 10
// number

typeof []
// object

typeof null
// object (historical bug)
```

---

# 9. instanceof Operator

Checks if an object inherits from a constructor.

```javascript
[] instanceof Array
// true

{} instanceof Object
// true
```

---

# 10. in Operator

Checks if a property exists in an object.

```javascript
const user = {
    name: "Ashu",
    age: 25
};

"name" in user
// true

"city" in user
// false
```

---

# 11. delete Operator

Deletes an object property.

```javascript
const user = {
    name: "Ashu",
    age: 25
};

delete user.age;

console.log(user);
```

Output

```javascript
{
    name: "Ashu"
}
```

> It removes the property, not the object itself.

---

# 12. void Operator

Evaluates an expression and always returns `undefined`.

```javascript
void 0
// undefined
```

Commonly seen in:

```html
<a href="javascript:void(0)">Click</a>
```

Modern applications rarely need it.

---

# 13. Bitwise Operators (Overview)

Operate on the binary representation of numbers.

| Operator | Description |
|----------|-------------|
| `&` | AND |
| `|` | OR |
| `^` | XOR |
| `~` | NOT |
| `<<` | Left Shift |
| `>>` | Right Shift |
| `>>>` | Unsigned Right Shift |

> These are useful in low-level programming, graphics, permissions, and performance-sensitive code.

---

# Operator Precedence

JavaScript follows operator precedence rules.

Example

```javascript
2 + 3 * 4
// 14
```

Equivalent to

```javascript
2 + (3 * 4)
```

Use parentheses to make expressions easier to read.

```javascript
(2 + 3) * 4
// 20
```

---

# Interview Traps

### Trap 1

```javascript
"5" + 2
```

Result

```javascript
"52"
```

---

### Trap 2

```javascript
"5" - 2
```

Result

```javascript
3
```

---

### Trap 3

```javascript
5 == "5"
```

Result

```javascript
true
```

---

### Trap 4

```javascript
5 === "5"
```

Result

```javascript
false
```

---

### Trap 5

```javascript
0 || 100
```

Result

```javascript
100
```

---

### Trap 6

```javascript
0 ?? 100
```

Result

```javascript
0
```

---

### Trap 7

```javascript
typeof null
```

Result

```javascript
"object"
```

---

### Trap 8

```javascript
++a
```

Returns the incremented value.

```javascript
a++
```

Returns the original value, then increments.

---

# Best Practices

✅ Prefer `===` over `==`.

✅ Use `??` instead of `||` for default values when `0`, `false`, or `""` are valid.

✅ Avoid relying on implicit type coercion.

✅ Use parentheses to improve readability in complex expressions.

---

# Senior Interview Questions

1. Difference between `==` and `===`.
2. Explain pre-increment vs post-increment.
3. Difference between `||` and `??`.
4. Why does `"5" + 2` return a string?
5. What is operator precedence?
6. When would you use the `in` operator?
7. What does the `delete` operator do?
8. Why does `typeof null` return `"object"`?

---

# Quick Revision

- Operators perform operations on operands.
- Arithmetic → `+ - * / % **`
- Assignment → `= += -= *= /=`
- Comparison → `== === != !== > < >= <=`
- Logical → `&& || !`
- Prefer `===` over `==`.
- `&&` → First falsy or last value.
- `||` → First truthy or last value.
- `??` → Falls back only for `null` or `undefined`.
- Ternary → Short form of `if...else`.
- `typeof` → Returns the type of a value.
- `instanceof` → Checks the prototype chain.
- `in` → Checks property existence.
- `delete` → Removes an object property.
- `void` → Always returns `undefined`.
- Use parentheses to avoid precedence-related bugs.