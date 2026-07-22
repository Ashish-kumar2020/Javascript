# reduce()

## Definition

`reduce()` executes a callback function **once for each element** in an array and **reduces the entire array into a single value**.

The final value can be:

- Number
- String
- Array
- Object
- Boolean
- Any other data type

---

# Syntax

```javascript
array.reduce(function(accumulator, currentValue, index, array) {

}, initialValue);
```

or

```javascript
array.reduce((accumulator, currentValue, index, array) => {

}, initialValue);
```

---

# Parameters

## accumulator (acc)

Stores the **partially built final result**.

Whatever is returned from the callback becomes the accumulator for the next iteration.

---

## currentValue

Current element being processed.

---

## index

Current index of the element.

---

## array

Reference to the original array.

---

## initialValue

The initial value of the accumulator.

If omitted:

- `acc = arr[0]`
- Iteration starts from `arr[1]`

If provided:

- `acc = initialValue`
- Iteration starts from `arr[0]`

---

# Mental Model

Before writing `reduce()`, ask yourself:

```text
What am I trying to build?
```

The answer determines the type of the accumulator.

| Final Result | Initial Value |
|--------------|---------------|
| Number | `0` |
| Array | `[]` |
| Object | `{}` |
| String | `""` |

---

# How reduce() Works

```javascript
const arr = [1,2,3,4];

const result = arr.reduce((acc, value) => {
    return acc + value;
}, 0);
```

---

Initial

```text
acc = 0
```

---

Iteration 1

```text
acc = 0
value = 1

↓

return 1
```

Next accumulator

```text
1
```

---

Iteration 2

```text
acc = 1
value = 2

↓

return 3
```

---

Iteration 3

```text
acc = 3
value = 3

↓

return 6
```

---

Iteration 4

```text
acc = 6
value = 4

↓

return 10
```

Final Output

```text
10
```

---

# Golden Rule

```text
Whatever you return

↓

becomes

↓

the accumulator for the next iteration.
```

---

# Without Initial Value

```javascript
const arr = [1,2,3];

const result = arr.reduce((acc, value) => {
    return acc + value;
});
```

JavaScript internally does:

```text
acc = arr[0]

↓

1
```

Iteration starts from:

```text
arr[1]
```

Dry Run

```text
acc = 1
value = 2

↓

3

↓

acc = 3
value = 3

↓

6
```

Output

```text
6
```

---

# With Initial Value

```javascript
const arr = [1,2,3];

const result = arr.reduce((acc, value) => {
    return acc + value;
}, 0);
```

Dry Run

```text
acc = 0
value = 1

↓

1

↓

3

↓

6
```

Output

```text
6
```

---

# Edge Cases

## Empty Array Without Initial Value

```javascript
[].reduce((acc, value) => acc + value);
```

Output

```text
TypeError: Reduce of empty array with no initial value
```

Reason:

There is no first element to initialize the accumulator.

---

## Empty Array With Initial Value

```javascript
[].reduce((acc, value) => acc + value, 100);
```

Output

```text
100
```

Reason:

The callback never executes.

The initial value is returned directly.

---

## Single Element Without Initial Value

```javascript
[5].reduce((acc, value) => acc + value);
```

Output

```text
5
```

Reason:

```text
acc = arr[0]

↓

5
```

There are no remaining elements, so the callback is never executed.

---

## Single Element With Initial Value

```javascript
[5].reduce((acc, value) => acc + value, 10);
```

Output

```text
15
```

Dry Run

```text
acc = 10
value = 5

↓

15
```

---

# Accumulator

The accumulator is **the partially built final result**.

It keeps growing after every iteration.

---

## Example 1 — Number

```text
0

↓

1

↓

3

↓

6

↓

10
```

---

## Example 2 — Array

```text
[]

↓

["Ashu"]

↓

["Ashu", "John"]

↓

["Ashu", "John", "Alice"]
```

---

## Example 3 — Object

```text
{}

↓

{
    1: {...}
}

↓

{
    1: {...},
    2: {...}
}

↓

{
    1: {...},
    2: {...},
    3: {...}
}
```

---

# Interview Rules

## Rule 1

```text
Accumulator = Partially Built Final Result
```

---

## Rule 2

```text
Whatever you return

↓

becomes

↓

the accumulator for the next iteration.
```

---

## Rule 3

Before writing `reduce()`, ask:

```text
What am I trying to build?
```

Then choose the initial value accordingly.

---

# Common Mistakes

❌ Thinking the accumulator is replaced every iteration.

✅ The accumulator keeps growing until the final result is built.

---

❌ Forgetting to return the accumulator.

```javascript
arr.reduce((acc, value) => {
    acc += value;
});
```

This causes the next iteration's accumulator to become `undefined`.

---

✅ Always return the accumulator (or the updated value).

```javascript
arr.reduce((acc, value) => {
    return acc + value;
}, 0);
```

---

# Comparison

| Method | Returns | Purpose |
|----------|----------|---------|
| `forEach()` | `undefined` | Perform side effects |
| `map()` | New array (same length) | Transform every element |
| `filter()` | New array (variable length) | Keep selected elements |
| `reduce()` | Single value (any type) | Build one final result |

---

# Golden Rules

✅ Executes once for every element.

✅ Returns a single final value.

✅ The accumulator stores the partially built final result.

✅ Whatever you return becomes the accumulator for the next iteration.

✅ The initial value determines the type of the final result.

---

# Memory Trick

```text
What am I building?

↓

Number?

Start with 0

↓

Array?

Start with []

↓

Object?

Start with {}

↓

String?

Start with ""
```

```text
Accumulator = Partially Built Final Result

↓

Return it

↓

Repeat

↓

Final Answer
```