# forEach()

## Definition

`forEach()` executes a callback function **once for each element** in an array.

It is mainly used for **side effects**, such as:

- Printing values
- Updating the DOM
- Calling an API
- Modifying the original array

---

# Syntax

```javascript
array.forEach(function(currentValue, index, array) {

});
```

or

```javascript
array.forEach((currentValue, index, array) => {

});
```

---

# Parameters

## currentValue

Current element being processed.

```javascript
const arr = [10, 20, 30];

arr.forEach(value => {
    console.log(value);
});
```

Output

```text
10
20
30
```

---

## index

Current index of the element.

```javascript
const arr = ["A", "B"];

arr.forEach((value, index) => {
    console.log(index);
});
```

Output

```text
0
1
```

---

## array

Reference to the original array.

```javascript
const arr = [1, 2, 3];

arr.forEach((value, index, array) => {
    console.log(array);
});
```

Output

```text
[1,2,3]
[1,2,3]
[1,2,3]
```

---

# Dry Run

```javascript
const arr = [5, 10, 15];

arr.forEach((value, index) => {
    console.log(value, index);
});
```

Iteration 1

```text
value = 5
index = 0
```

Iteration 2

```text
value = 10
index = 1
```

Iteration 3

```text
value = 15
index = 2
```

Output

```text
5 0
10 1
15 2
```

---

# Characteristics

## Executes once for every element

```javascript
const arr = [1, 2, 3];

arr.forEach(value => console.log(value));
```

Output

```text
1
2
3
```

---

## Always returns `undefined`

```javascript
const result = [1, 2, 3].forEach(value => value * 2);

console.log(result);
```

Output

```text
undefined
```

### Why?

`forEach()` ignores whatever is returned from the callback function.

---

## Can modify the original array

```javascript
const arr = [1, 2, 3];

arr.forEach((value, index, array) => {
    array[index] = value * 2;
});

console.log(arr);
```

Output

```text
[2,4,6]
```

---

## Returning from callback does NOT modify the array

```javascript
const arr = [1, 2, 3];

arr.forEach(value => value * 2);

console.log(arr);
```

Output

```text
[1,2,3]
```

Reason:

The callback returns a value, but `forEach()` ignores it.

---

## Callback return value is ignored

```javascript
const arr = [1, 2, 3];

const result = arr.forEach(value => {
    return value * 2;
});

console.log(result);
```

Output

```text
undefined
```

---

## Cannot break

```javascript
arr.forEach(() => {
    // break ❌
});
```

`break` cannot be used inside `forEach()`.

---

## Cannot continue

```javascript
arr.forEach(() => {
    // continue ❌
});
```

`continue` cannot be used inside `forEach()`.

---

## Does NOT create a new array

```javascript
const arr = [1, 2, 3];

const result = arr.forEach(value => value * 2);

console.log(result);
```

Output

```text
undefined
```

If you need a new transformed array, use **`map()`**.

---

# Common Interview Questions

## Q1

```javascript
const arr = [1, 2, 3];

const result = arr.forEach(value => value * 2);

console.log(result);
console.log(arr);
```

Output

```text
undefined
[1,2,3]
```

Reason:

- Callback return value is ignored.
- Original array is not modified.

---

## Q2

```javascript
const arr = [1, 2, 3];

arr.forEach((value, index, array) => {
    array[index] = value * 10;
});

console.log(arr);
```

Output

```text
[10,20,30]
```

Reason:

The callback explicitly modifies the original array.

---

## Q3

```javascript
const arr = [1, 2, 3];

const result = arr.forEach((value, index) => {
    arr[index] = value * 2;
    return 100;
});

console.log(result);
console.log(arr);
```

Output

```text
undefined
[2,4,6]
```

Reason:

- The original array is modified.
- The callback's `return 100` is ignored.
- `forEach()` always returns `undefined`.

---

# Golden Rules

✅ Executes once for every element.

✅ Mainly used for side effects.

✅ Always returns `undefined`.

✅ Can modify the original array if you explicitly mutate it.

❌ Does not create a new array.

❌ Ignores the callback's return value.

❌ Cannot use `break`.

❌ Cannot use `continue`.

---

# Interview Difference

| forEach() | map() |
|-----------|-------|
| Returns `undefined` | Returns a new array |
| Used for side effects | Used for transforming data |
| Can modify original array | Does not modify original array by default |
| Ignores callback return value | Uses callback return value |