# JavaScript Fundamentals

# 03 - Type Conversion (Type Coercion)

---

# 📖 Definition

Type Conversion is the process of converting a value from one data type to another.

There are **2 types**:

- **Implicit Type Conversion (Type Coercion)** → JavaScript converts automatically.
- **Explicit Type Conversion** → Developer converts manually.

---

# Types of Conversion

| Type | Who Performs It? | Example |
|-------|------------------|---------|
| Implicit | JavaScript Engine | `"5" + 2` |
| Explicit | Developer | `Number("5")` |

---

# Implicit Type Conversion (Type Coercion)

JavaScript automatically converts values when performing operations.

## String Conversion

```javascript
"5" + 2
// "52"
```

```javascript
10 + "20"
// "1020"
```

> If one operand is a string, `+` performs **string concatenation**.

---

## Number Conversion

```javascript
"10" - 5
// 5
```

```javascript
"10" * 2
// 20
```

```javascript
"20" / 2
// 10
```

> `-`, `*`, `/`, `%` always try to convert operands to numbers.

---

## Boolean Conversion

```javascript
true + 1
// 2
```

```javascript
false + 10
// 10
```

```javascript
true * 5
// 5
```

| Boolean | Converted To |
|----------|--------------|
| `true` | `1` |
| `false` | `0` |

---

## Null Conversion

```javascript
null + 5
// 5
```

```javascript
Number(null)
// 0
```

---

## Undefined Conversion

```javascript
undefined + 5
// NaN
```

```javascript
Number(undefined)
// NaN
```

---

# Explicit Type Conversion

The developer manually converts the value.

---

## Convert to Number

```javascript
Number("100")
// 100
```

```javascript
Number("10.5")
// 10.5
```

```javascript
Number(true)
// 1
```

```javascript
Number(false)
// 0
```

```javascript
Number(null)
// 0
```

```javascript
Number(undefined)
// NaN
```

```javascript
Number("Hello")
// NaN
```

---

## Convert to String

```javascript
String(100)
// "100"
```

```javascript
String(true)
// "true"
```

```javascript
String(null)
// "null"
```

```javascript
String(undefined)
// "undefined"
```

---

## Convert to Boolean

| Value | Boolean |
|--------|----------|
| 0 | false |
| "" | false |
| null | false |
| undefined | false |
| NaN | false |
| All Other Values | true |

Examples

```javascript
Boolean(1)
// true
```

```javascript
Boolean("")
// false
```

```javascript
Boolean("Hello")
// true
```

---

# parseInt()

Extracts an integer.

```javascript
parseInt("100")
// 100
```

```javascript
parseInt("100px")
// 100
```

```javascript
parseInt("10.55")
// 10
```

```javascript
parseInt("Hello")
// NaN
```

---

# parseFloat()

Extracts a floating-point number.

```javascript
parseFloat("10.55")
// 10.55
```

```javascript
parseFloat("10.55px")
// 10.55
```

---

# Unary Plus (+)

Converts a value into a number.

```javascript
+"10"
// 10
```

```javascript
+true
// 1
```

```javascript
+false
// 0
```

```javascript
+"Hello"
// NaN
```

---

# Equality Operators

## Loose Equality (`==`)

Performs type coercion before comparison.

```javascript
5 == "5"
// true
```

```javascript
false == 0
// true
```

```javascript
null == undefined
// true
```

---

## Strict Equality (`===`)

Checks both value and type.

```javascript
5 === "5"
// false
```

```javascript
5 === 5
// true
```

---

# Object to Primitive Conversion

When an object participates in an operation, JavaScript tries to convert it to a primitive.

```javascript
const obj = {
    valueOf() {
        return 10;
    }
};

console.log(obj + 5);
// 15
```

Priority:

1. `Symbol.toPrimitive`
2. `valueOf()`
3. `toString()`

---

# Common Conversion Table

| Expression | Result |
|------------|--------|
| `"5" + 2` | `"52"` |
| `"5" - 2` | `3` |
| `"5" * 2` | `10` |
| `"5" / 2` | `2.5` |
| `true + 1` | `2` |
| `false + 10` | `10` |
| `null + 1` | `1` |
| `undefined + 1` | `NaN` |
| `Number("")` | `0` |
| `Boolean("")` | `false` |
| `Boolean(" ")` | `true` |
| `Boolean([])` | `true` |
| `Boolean({})` | `true` |

---

# Interview Traps

## Trap 1

```javascript
"5" + 5
```

Result

```javascript
"55"
```

---

## Trap 2

```javascript
"5" - 5
```

Result

```javascript
0
```

---

## Trap 3

```javascript
true + true
```

Result

```javascript
2
```

---

## Trap 4

```javascript
Number("")
```

Result

```javascript
0
```

---

## Trap 5

```javascript
Boolean("false")
```

Result

```javascript
true
```

Reason:

Any non-empty string is truthy.

---

## Trap 6

```javascript
null == undefined
```

Result

```javascript
true
```

---

## Trap 7

```javascript
null === undefined
```

Result

```javascript
false
```

---

# Best Practices

✅ Prefer `===` over `==`.

✅ Convert values explicitly using `Number()`, `String()`, or `Boolean()`.

✅ Avoid relying on implicit type coercion in production code.

✅ Use `parseInt()` or `parseFloat()` only when parsing strings that may contain non-numeric characters (e.g., `"100px"`).

---

# Senior Interview Questions

1. Difference between Implicit and Explicit Type Conversion.
2. Why does `"5" + 2` return `"52"`?
3. Why does `"5" - 2` return `3`?
4. Difference between `Number()` and `parseInt()`.
5. Explain `==` vs `===`.
6. Why is `null == undefined` true?
7. How does JavaScript convert objects to primitives?
8. When should you avoid implicit type coercion?

---

# Quick Revision

- Type Conversion = Converting one data type to another.
- Implicit → JavaScript converts automatically.
- Explicit → Developer converts manually.
- `+` with a string → String Concatenation.
- `-`, `*`, `/`, `%` → Number Conversion.
- `Number(null)` → `0`
- `Number(undefined)` → `NaN`
- `Boolean("")` → `false`
- `Boolean("false")` → `true`
- Prefer `===` over `==`.
- `parseInt()` extracts integers.
- `parseFloat()` extracts decimals.
- Unary `+` converts values to numbers.