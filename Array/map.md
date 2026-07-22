# map()

## Definition

`map()` executes a callback function **once for each element** in an array and **returns a new array** containing the callback's returned values.

It is mainly used for:

- Transforming data
- Updating values
- Creating a new array from an existing array

---

# Syntax

```javascript
array.map(function(currentValue, index, array) {

});
```

or

```javascript
array.map((currentValue, index, array) => {

});
```

---

# Parameters

## currentValue

Current element being processed.

```javascript
const arr = [1, 2, 3];

arr.map(value => value * 2);
```

---

## index

Current index.

```javascript
const arr = ["A", "B", "C"];

arr.map((value, index) => index);
```

Output

```text
[0,1,2]
```

---

## array

Reference to the original array.

```javascript
const arr = [1, 2, 3];

arr.map((value, index, array) => {
    console.log(array);
});
```

---

# How map() Works

`map()` asks only one question for every element:

```text
What should this element become?
```

Whatever the callback returns becomes the element in the new array.

---

# Dry Run

```javascript
const arr = [10,20,30];

const result = arr.map(value => value + 5);
```

Iteration 1

```text
value = 10

↓

return 15

↓

result = [15]
```

Iteration 2

```text
value = 20

↓

return 25

↓

result = [15,25]
```

Iteration 3

```text
value = 30

↓

return 35

↓

result = [15,25,35]
```

Final Output

```text
[15,25,35]
```

---

# Characteristics

## Returns a new array

```javascript
const arr = [1,2,3];

const result = arr.map(value => value * 2);

console.log(result);
```

Output

```text
[2,4,6]
```

---

## Original array remains unchanged

```javascript
const arr = [1,2,3];

const result = arr.map(value => value * 2);

console.log(arr);
```

Output

```text
[1,2,3]
```

Unless you explicitly modify the array inside the callback.

---

## Output array length is always the same

```javascript
const arr = [1,2,3];

const result = arr.map(value => value * 2);
```

Input Length

```text
3
```

Output Length

```text
3
```

Unlike `filter()`, `map()` never removes elements.

---

## Callback return value becomes the new element

```javascript
const arr = [1,2,3];

const result = arr.map(value => value + 1);

console.log(result);
```

Output

```text
[2,3,4]
```

---

## If callback does not return anything

```javascript
const arr = [1,2,3];

const result = arr.map(value => {
    console.log(value);
});

console.log(result);
```

Output

```text
1
2
3
[undefined, undefined, undefined]
```

Reason:

No explicit `return`.

JavaScript automatically returns:

```javascript
undefined
```

for every iteration.

---

# Can modify the original array

```javascript
const arr = [1,2,3];

const result = arr.map((value, index, array) => {
    array[index] = value * 10;
    return value * 2;
});

console.log(result);
console.log(arr);
```

Output

```text
[2,4,6]
[10,20,30]
```

Reason:

- `return` creates the new array.
- `array[index] = ...` modifies the original array.

---

# Common Interview Questions

## Q1

```javascript
const arr = [1,2,3];

const result = arr.map(value => value * 2);

console.log(result);
```

Output

```text
[2,4,6]
```

---

## Q2

```javascript
const arr = [10,20,30];

const result = arr.map((value,index) => index);

console.log(result);
```

Output

```text
[0,1,2]
```

---

## Q3

```javascript
const arr = [1,2,3];

const result = arr.map(value => {
    console.log(value);
});

console.log(result);
```

Output

```text
1
2
3
[undefined, undefined, undefined]
```

Reason:

No `return`.

Each callback returns `undefined`.

---

## Q4

```javascript
const arr = [1,2,3];

const result = arr.map((value,index,array) => {
    array[index] = value * 10;
    return value * 2;
});

console.log(result);
console.log(arr);
```

Output

```text
[2,4,6]
[10,20,30]
```

Reason:

- `map()` creates a new array using the callback's return value.
- Original array is modified because we explicitly changed it.

---

## Q5

```javascript
const arr = [1,2,3];

const result = arr.map(value => {
    if(value % 2 === 0){
        return value * 10;
    }
});

console.log(result);
```

Output

```text
[undefined, 20, undefined]
```

Reason:

- `1` → no return → `undefined`
- `2` → returns `20`
- `3` → no return → `undefined`

`map()` always keeps the same number of elements as the original array.

---

# Difference

| Method | Callback Return Used For | Returns |
|----------|--------------------------|----------|
| `forEach()` | Ignored | `undefined` |
| `map()` | New transformed element | New array (same length) |
| `filter()` | Keep or discard element | New array (variable length) |

---

# Golden Rules

✅ Executes once for every element.

✅ Returns a new array.

✅ Uses the callback's return value to create the new array.

✅ Output array length is always the same as the input array.

✅ Original array remains unchanged unless you explicitly mutate it.

❌ Does not ignore the callback's return value.

---

# Interview Trick

Whenever you see `map()`, ask these two questions:

### Step 1

What is the callback returning?

```javascript
return value * 2;
```

↓

```text
2,4,6
```

or

```javascript
return index;
```

↓

```text
0,1,2
```

or

```javascript
return undefined;
```

↓

```text
undefined
```

---

### Step 2

Whatever the callback returns becomes the corresponding element in the new array.

```text
return 10

↓

[10]
```

```text
return "Ashu"

↓

["Ashu"]
```

```text
return undefined

↓

[undefined]
```

### Final Rule

```text
Input Length = Output Length

Callback Return = New Element
```