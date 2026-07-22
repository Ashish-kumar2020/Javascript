# flatMap()

## Definition

`flatMap()` executes `map()` on every element and then **flattens the result by one level**.

Think of it as:

```text
map()

↓

flat(1)
```

It returns a **new array** and does **not modify** the original array.

---

# Syntax

```javascript
array.flatMap(function(currentValue, index, array) {

});
```

or

```javascript
array.flatMap((currentValue, index, array) => {

});
```

---

# Parameters

## currentValue

Current element being processed.

```javascript
const arr = [1,2,3];

arr.flatMap(value => [value]);
```

---

## index

Current index.

```javascript
const arr = ["A","B","C"];

arr.flatMap((value, index) => [index, value]);
```

---

## array

Reference to the original array.

```javascript
const arr = [1,2];

arr.flatMap((value, index, array) => {
    console.log(array);
    return [value];
});
```

---

# How flatMap() Works

`flatMap()` performs two operations.

## Step 1

Apply `map()`.

```javascript
const arr = [1,2];

arr.map(value => [value, value * 2]);
```

Result

```javascript
[
    [1,2],
    [2,4]
]
```

---

## Step 2

Apply `flat(1)`.

```javascript
[
    [1,2],
    [2,4]
]
```

↓

```javascript
[
    1,
    2,
    2,
    4
]
```

Final Output

```javascript
[1,2,2,4]
```

---

# Internal Working

```javascript
arr.flatMap(callback);
```

is equivalent to

```javascript
arr.map(callback).flat();
```

or

```text
map()

↓

flat(1)
```

---

# Example 1

```javascript
const arr = [1,2];

const result = arr.flatMap(value => [value, value * 2]);

console.log(result);
```

Output

```text
[1,2,2,4]
```

---

# Example 2

```javascript
const arr = ["Hello World", "Learn JS"];

const result = arr.flatMap(value => value.split(" "));
```

Step 1 (`map()`)

```javascript
[
    ["Hello","World"],
    ["Learn","JS"]
]
```

Step 2 (`flat(1)`)

```javascript
[
    "Hello",
    "World",
    "Learn",
    "JS"
]
```

Output

```text
["Hello","World","Learn","JS"]
```

---

# One Level Flattening

```javascript
const arr = [1,2];

const result = arr.flatMap(value => [[value]]);

console.log(result);
```

Step 1

```javascript
[
    [[1]],
    [[2]]
]
```

Step 2

Only one level is flattened.

```javascript
[
    [1],
    [2]
]
```

Output

```text
[[1],[2]]
```

Notice

```text
[1]
```

is still nested.

---

# Characteristics

✅ Returns a new array.

✅ Original array remains unchanged.

✅ Performs `map()` first.

✅ Performs `flat(1)` second.

✅ Flattens only one level.

---

# Common Interview Questions

## Q1

```javascript
const arr = [1,2];

const result = arr.flatMap(value => [value, value * 2]);

console.log(result);
```

Output

```text
[1,2,2,4]
```

---

## Q2

```javascript
const arr = ["A B","C D"];

const result = arr.flatMap(value => value.split(" "));

console.log(result);
```

Output

```text
["A","B","C","D"]
```

---

## Q3

```javascript
const arr = [1,2];

const result = arr.flatMap(value => [[value]]);

console.log(result);
```

Output

```text
[[1],[2]]
```

Reason

`flatMap()` only performs `flat(1)`.

---

## Q4

```javascript
const arr = [1,[2],3];

const result = arr.flatMap(value => [value]);

console.log(result);
```

Output

```text
[1,2,3]
```

Reason

Step 1 (`map()`)

```javascript
[
    [1],
    [[2]],
    [3]
]
```

Step 2 (`flat(1)`)

```javascript
[
    1,
    [2],
    3
]
```

The nested array `[2]` remains because only one level is flattened.

---

# Difference

| Method | Returns | Purpose |
|---------|----------|---------|
| `map()` | New array | Transform each element |
| `flat()` | Flattened array | Remove one or more nesting levels |
| `flatMap()` | Flattened mapped array | `map()` + `flat(1)` |

---

# Golden Rules

## Rule 1

```text
flatMap()

↓

map()

↓

flat(1)
```

---

## Rule 2

Returns a new array.

---

## Rule 3

Original array remains unchanged.

---

## Rule 4

Only one level is flattened.

---

## Rule 5

Equivalent to

```javascript
arr.map(callback).flat();
```

---

# Memory Trick

```text
map()

↓

Transform

-------------------------

flat()

↓

Flatten

-------------------------

flatMap()

↓

Transform

↓

Flatten One Level
```