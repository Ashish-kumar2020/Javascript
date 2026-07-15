# JavaScript Fundamentals

# 07 - Optional Chaining (`?.`) & Nullish Coalescing (`??`)

---

# 📖 Definition

## Optional Chaining (`?.`)

Optional Chaining allows you to **safely access nested object properties** without throwing an error if an intermediate property is `null` or `undefined`.

If the value before `?.` is `null` or `undefined`, JavaScript **stops evaluating** and returns `undefined`.

---

## Nullish Coalescing (`??`)

Nullish Coalescing returns the **right-hand value only when the left-hand value is `null` or `undefined`.**

It is commonly used to provide **default values**.

---

# 🤔 Why were they introduced?

Before ES2020, accessing nested properties was tedious.

Example

```javascript
const city = user &&
             user.address &&
             user.address.city;
```

Or

```javascript
if (
    user &&
    user.address &&
    user.address.city
) {
    console.log(user.address.city);
}
```

Problems

- Hard to read
- Verbose
- Error-prone
- Difficult to maintain

ES2020 introduced

- Optional Chaining (`?.`)
- Nullish Coalescing (`??`)

to solve these issues.

---

# Optional Chaining (`?.`)

## Syntax

```javascript
object?.property
```

---

## Example

```javascript
const user = {
    name: "Ashu"
};

console.log(user?.name);
```

Output

```javascript
Ashu
```

---

## Missing Property

```javascript
const user = {
    name: "Ashu"
};

console.log(user?.age);
```

Output

```javascript
undefined
```

No error is thrown.

---

## Nested Properties

```javascript
const user = {
    profile: {
        address: {
            city: "Delhi"
        }
    }
};

console.log(user?.profile?.address?.city);
```

Output

```javascript
Delhi
```

---

## Safe Access

```javascript
const user = {};

console.log(user?.profile?.address?.city);
```

Output

```javascript
undefined
```

Without optional chaining

```javascript
console.log(user.profile.address.city);
```

Output

```text
TypeError
```

---

# 💡 Why?

JavaScript evaluates properties **left to right**.

Without `?.`

```javascript
user.profile.address.city
```

JavaScript immediately tries

```javascript
user.profile
```

If

```javascript
user.profile
```

is

```javascript
undefined
```

then

```javascript
undefined.address
```

causes

```text
TypeError
```

With

```javascript
user?.profile?.address
```

JavaScript stops immediately when it encounters `null` or `undefined`.

This behavior is called **Short-Circuiting**.

---

# Optional Chaining with Arrays

```javascript
const users = [
    { name: "Ashu" }
];

console.log(users[0]?.name);
```

Output

```javascript
Ashu
```

---

```javascript
console.log(users[10]?.name);
```

Output

```javascript
undefined
```

---

# Optional Chaining with Function Calls

Useful when a callback may not exist.

```javascript
const user = {
    greet() {
        console.log("Hello");
    }
};

user.greet?.();
```

Output

```javascript
Hello
```

---

If function doesn't exist

```javascript
const user = {};

user.greet?.();
```

Output

Nothing.

No error.

---

# Invalid Usage

Cannot assign using optional chaining.

❌

```javascript
user?.name = "John";
```

Output

```text
SyntaxError
```

---

# Nullish Coalescing (`??`)

Returns the right value only when the left value is

- null
- undefined

---

## Syntax

```javascript
left ?? right
```

---

## Example

```javascript
const username = null;

console.log(username ?? "Guest");
```

Output

```javascript
Guest
```

---

```javascript
const username = "Ashu";

console.log(username ?? "Guest");
```

Output

```javascript
Ashu
```

---

# Why not `||`?

Many developers use

```javascript
value || defaultValue
```

This causes bugs.

Example

```javascript
const count = 0;

console.log(count || 100);
```

Output

```javascript
100
```

Problem

`0` is a valid value.

But

```javascript
||
```

treats every falsy value as missing.

---

Using

```javascript
??
```

```javascript
const count = 0;

console.log(count ?? 100);
```

Output

```javascript
0
```

Correct.

---

# Difference between `||` and `??`

| Operator | Returns Default For |
|-----------|--------------------|
| `||` | Any falsy value |
| `??` | Only `null` and `undefined` |

---

### Example

```javascript
false || true
```

Output

```javascript
true
```

---

```javascript
false ?? true
```

Output

```javascript
false
```

---

### Example

```javascript
"" || "Hello"
```

Output

```javascript
Hello
```

---

```javascript
"" ?? "Hello"
```

Output

```javascript
""
```

---

# Short-Circuiting

Optional chaining

```javascript
user?.profile?.address
```

stops evaluation if

```javascript
user
```

is

```javascript
null
```

or

```javascript
undefined
```

---

Nullish Coalescing

```javascript
value ?? defaultValue
```

evaluates the right-hand side only if needed.

---

# Combining `?.` and `??`

Very common in React.

```javascript
const city =
user?.address?.city ?? "Unknown";
```

If

```javascript
city
```

doesn't exist

Output

```javascript
Unknown
```

---

# Real-World Examples

## API Response

```javascript
const city =
response?.data?.user?.address?.city;
```

---

## React Props

```javascript
const username =
props.user?.name ?? "Guest";
```

---

## Optional Callback

```javascript
props.onClose?.();
```

---

## Configuration

```javascript
const theme =
config?.theme ?? "light";
```

---

# Common Mistakes

### Mistake 1

Using

```javascript
||
```

instead of

```javascript
??
```

for defaults.

---

### Mistake 2

Assuming

```javascript
?. 
```

works for every falsy value.

It only stops for

- null
- undefined

---

### Mistake 3

Trying to assign using

```javascript
?.
```

❌

```javascript
user?.name = "John";
```

---

### Mistake 4

Mixing

```javascript
??
```

and

```javascript
||
```

without parentheses.

❌

```javascript
a ?? b || c
```

Output

```text
SyntaxError
```

Correct

```javascript
(a ?? b) || c
```

---

# Interview Traps

### Trap 1

```javascript
0 || 100
```

Result

```javascript
100
```

---

### Trap 2

```javascript
0 ?? 100
```

Result

```javascript
0
```

---

### Trap 3

```javascript
false || true
```

Result

```javascript
true
```

---

### Trap 4

```javascript
false ?? true
```

Result

```javascript
false
```

---

### Trap 5

```javascript
"" || "Hello"
```

Result

```javascript
Hello
```

---

### Trap 6

```javascript
"" ?? "Hello"
```

Result

```javascript
""
```

---

# Best Practices

✅ Use `?.` when accessing nested API responses.

✅ Use `??` instead of `||` for default values.

✅ Combine `?.` and `??` for cleaner code.

✅ Avoid deep property access without optional chaining.

---

# Senior Interview Questions

1. Why was Optional Chaining introduced?
2. Explain short-circuiting in Optional Chaining.
3. Difference between `||` and `??`.
4. Why does `0 || 100` return `100`?
5. Why does `0 ?? 100` return `0`?
6. Can Optional Chaining be used on function calls?
7. Can Optional Chaining be used for assignment?
8. Why does `a ?? b || c` throw a SyntaxError?

---

# Quick Revision

- `?.` safely accesses nested properties.
- Stops evaluation for `null` or `undefined`.
- Prevents `TypeError`.
- Works with properties, arrays, and function calls.
- Cannot be used on the left side of an assignment.
- `??` returns the default only for `null` or `undefined`.
- `||` returns the default for **any falsy value**.
- Combine `?.` and `??` for clean, safe property access.
- Always use parentheses when mixing `??` with `&&` or `||`.