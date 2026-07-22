# every()

## Definition

`every()` executes a callback function **once for each element** in an array and **returns `true` only if every element satisfies the condition**.

If **even one** element does not satisfy the condition, it returns:

```javascript
false
```

---

# Syntax

```javascript
array.every(function(currentValue, index, array) {

});
```

or

```javascript
array.every((currentValue, index, array) => {

});
```

---

# Parameters

## currentValue

Current element being processed.

```javascript
const arr = [10,20,30];

arr.every(value => value > 5);
```

---

## index

Current index.

```javascript
const arr = ["A","B","C"];

arr.every((value, index) => index >= 0);
```

---

## array

Reference to the original array.

```javascript
const arr = [1,2,3];

arr.every((value, index, array) => {
    console.log(array);
});
```

---

# How every() Works

`every()` asks only one question.

```text
Do all elements satisfy the condition?
```

If the callback returns a **truthy** value:

```text
Continue checking.
```

If the callback returns a **falsy** value:

```text
Return false immediately.
```

If every callback returns truthy:

```text
Return true.
```

---

# Dry Run

```javascript
const arr = [2,4,6,7];

const result = arr.every(value => value % 2 === 0);
```

Iteration 1

```text
value = 2

↓

true

↓

Continue
```

---

Iteration 2

```text
value = 4

↓

true

↓

Continue
```

---

Iteration 3

```text
value = 6

↓

true

↓

Continue
```

---

Iteration 4

```text
value = 7

↓

false

↓

Return false
```

Loop stops.

---

# Characteristics

## Returns a Boolean

```javascript
const arr = [2,4,6];

const result = arr.every(value => value % 2 === 0);

console.log(result);
```

Output

```text
true
```

---

## Stops after the first falsy callback

```javascript
const arr = [2,4,5,6];

const result = arr.every(value => value % 2 === 0);
```

Once `5` is reached:

```text
Return false

↓

Stop iteration
```

---

## Returns true if all elements satisfy the condition

```javascript
const arr = [10,20,30];

const result = arr.every(value => value > 5);

console.log(result);
```

Output

```text
true
```

---

## Returns false if even one element fails

```javascript
const arr = [10,20,3];

const result = arr.every(value => value > 5);

console.log(result);
```

Output

```text
false
```

---

## Original array remains unchanged

```javascript
const arr = [1,2,3];

const result = arr.every(value => value > 0);

console.log(arr);
```

Output

```text
[1,2,3]
```

---

# Truthy & Falsy

Like `filter()`, `find()`, `findIndex()`, and `some()`, `every()` checks whether the callback's return value is **truthy** or **falsy**.

Truthy

```javascript
10
"Hello"
[]
{}
true
```

Falsy

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

---

# Common Interview Questions

## Q1

```javascript
const arr = [2,4,6,8];

const result = arr.every(value => value % 2 === 0);

console.log(result);
```

Output

```text
true
```

Reason:

Every element satisfies the condition.

---

## Q2

```javascript
const arr = [2,4,5,8];

const result = arr.every(value => value % 2 === 0);

console.log(result);
```

Output

```text
false
```

Reason:

`5` does not satisfy the condition.

`every()` immediately returns `false`.

---

## Q3 (Interview Trap)

```javascript
const arr = [10,20,30];

const result = arr.every(value => value * 2);

console.log(result);
```

Output

```text
true
```

Reason:

| Value | Callback Returns | Truthy/Falsy |
|------:|------------------|--------------|
| 10 | 20 | ✅ |
| 20 | 40 | ✅ |
| 30 | 60 | ✅ |

Every callback returns a truthy value.

---

## Q4

```javascript
const arr = [0, "", false, null, "Ashu"];

const result = arr.every(value => value);

console.log(result);
```

Output

```text
false
```

Reason:

The very first value is `0`, which is falsy.

`every()` immediately returns `false`.

---

## Q5

```javascript
const arr = [0, "", false, null, "Ashu"];

console.log(arr.some(value => value));
console.log(arr.every(value => value));
console.log(arr.find(value => value));
console.log(arr.findIndex(value => value));
```

Output

```text
true
false
Ashu
4
```

---

# Difference

| Method | Returns | Stops Early? | No Match |
|---------|----------|--------------|----------|
| `filter()` | Array of matching elements | ❌ No | `[]` |
| `find()` | First matching element | ✅ Yes | `undefined` |
| `findIndex()` | Index of first matching element | ✅ Yes | `-1` |
| `some()` | Boolean | ✅ Yes (first truthy) | `false` |
| `every()` | Boolean | ✅ Yes (first falsy) | `true` *(if all pass)* |

---

# Golden Rules

✅ Returns a boolean.

✅ Returns `true` only if every element satisfies the condition.

✅ Returns `false` as soon as one element fails.

✅ Stops immediately after the first falsy callback.

✅ Original array remains unchanged.

---

# Interview Trick

Whenever you see `every()`, ask these two questions.

### Step 1

What is the callback returning?

```javascript
return value > 10;
```

↓

```text
true / false
```

or

```javascript
return value * 2;
```

↓

```text
20,40,60
```

or

```javascript
return value;
```

↓

```text
Current value
```

---

### Step 2

Is the returned value truthy or falsy?

```text
Truthy

↓

Continue checking.
```

```text
Falsy

↓

Return false immediately.
```

If every callback returns truthy:

```text
Return true.
```

---

# Memory Trick

```text
find()

↓

Return first matching element

---------------------

findIndex()

↓

Return index of first matching element

---------------------

some()

↓

Need ONE success

↓

Return true

---------------------

every()

↓

Need ALL successes

↓

Return true
```