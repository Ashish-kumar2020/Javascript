# filter()

## Definition

`filter()` executes a callback function **once for each element** in an array and **returns a new array containing only the elements whose callback returns a truthy value**.

It is mainly used for:

- Filtering data
- Removing unwanted elements
- Searching based on conditions

---

# Syntax

```javascript
array.filter(function(currentValue, index, array) {

});
```

or

```javascript
array.filter((currentValue, index, array) => {

});
```

---

# Parameters

## currentValue

Current element being processed.

```javascript
const arr = [1, 2, 3];

arr.filter(value => value > 1);
```

---

## index

Current index.

```javascript
const arr = ["A", "B", "C"];

arr.filter((value, index) => index !== 1);
```

---

## array

Reference to the original array.

```javascript
const arr = [1, 2, 3];

arr.filter((value, index, array) => {
    console.log(array);
});
```

---

# How filter() Works

`filter()` asks only one question for every element:

```text
Should I keep this element?
```

If callback returns

```text
Truthy  → Keep

Falsy   → Remove
```

---

# Dry Run

```javascript
const arr = [1,2,3,4];

const result = arr.filter(value => value % 2 === 0);
```

Iteration 1

```text
value = 1

↓

false

↓

Discard
```

Iteration 2

```text
value = 2

↓

true

↓

Keep

↓

result = [2]
```

Iteration 3

```text
value = 3

↓

false

↓

Discard
```

Iteration 4

```text
value = 4

↓

true

↓

Keep

↓

result = [2,4]
```

Final Output

```text
[2,4]
```

---

# Characteristics

## Returns a new array

```javascript
const arr = [1,2,3];

const result = arr.filter(value => true);

console.log(result);
```

Output

```text
[1,2,3]
```

---

## Original array remains unchanged

```javascript
const arr = [1,2,3];

const result = arr.filter(value => value > 1);

console.log(arr);
```

Output

```text
[1,2,3]
```

Unless you explicitly modify the array inside the callback.

---

## Output length can change

Unlike `map()`.

```javascript
const arr = [1,2,3,4];

const result = arr.filter(value => value % 2 === 0);
```

Output

```text
[2,4]
```

---

## Uses callback return value to decide

```javascript
true
```

↓

Keep

```javascript
false
```

↓

Discard

---

# Truthy & Falsy

`filter()` does **not** require `true` or `false`.

It checks whether the returned value is **truthy** or **falsy**.

---

## Falsy Values

Only these values are falsy:

```javascript
false
0
-0
0n
""
null
undefined
NaN
```

Everything else is truthy.

Examples:

```javascript
10
-5
"Hello"
[]
{}
true
```

---

# Common Interview Questions

## Q1

```javascript
const arr = [1,2,3,4];

const result = arr.filter(value => value > 2);

console.log(result);
```

Output

```text
[3,4]
```

---

## Q2

```javascript
const arr = [10,20,30];

const result = arr.filter((value,index) => index !== 1);

console.log(result);
```

Output

```text
[10,30]
```

---

## Q3

```javascript
const arr = [1,2,3];

const result = arr.filter(value => {
    console.log(value);
});

console.log(result);
```

Output

```text
1
2
3
[]
```

Reason:

No `return` statement.

Callback implicitly returns:

```javascript
undefined
```

`undefined` is falsy.

So every element is discarded.

---

## Q4

```javascript
const arr = [1,2,3];

const result = arr.filter(value => value * 10);

console.log(result);
```

Output

```text
[1,2,3]
```

Reason:

```text
10 → Truthy
20 → Truthy
30 → Truthy
```

All elements are kept.

---

## Q5

```javascript
const arr = [0,1,"","Ashu",null,10,false];

const result = arr.filter(value => value);

console.log(result);
```

Output

```text
[1,"Ashu",10]
```

Reason:

Falsy values are removed.

---

## Q6

```javascript
const arr = [0,1,"","Ashu",null,10,false];

const result = arr.filter(Boolean);

console.log(result);
```

Output

```text
[1,"Ashu",10]
```

Reason:

`Boolean(value)` returns:

- `true` → Keep
- `false` → Remove

A common interview pattern used to remove falsy values.

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

✅ Original array remains unchanged by default.

✅ Callback return decides whether to keep or discard an element.

✅ Output array length may be smaller than the input array.

❌ Does not modify the original array unless you explicitly mutate it.

---

# Interview Trick

Whenever you see `filter()`, ask these two questions:

### Step 1

What is the callback returning?

```javascript
return value > 2;
```

↓

```text
true / false
```

or

```javascript
return value * 10;
```

↓

```text
10,20,30
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

Is the returned value truthy or falsy?

```text
Truthy → Keep

Falsy → Remove
```