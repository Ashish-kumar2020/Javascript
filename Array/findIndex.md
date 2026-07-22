# findIndex()

## Definition

`findIndex()` executes a callback function **once for each element** in an array and **returns the index of the first element that satisfies the condition**.

If no element satisfies the condition, it returns:

```javascript
-1
```

---

# Syntax

```javascript
array.findIndex(function(currentValue, index, array) {

});
```

or

```javascript
array.findIndex((currentValue, index, array) => {

});
```

---

# Parameters

## currentValue

Current element being processed.

```javascript
const arr = [10, 20, 30];

arr.findIndex(value => value > 15);
```

---

## index

Current index.

```javascript
const arr = ["A", "B", "C"];

arr.findIndex((value, index) => index === 1);
```

---

## array

Reference to the original array.

```javascript
const arr = [1, 2, 3];

arr.findIndex((value, index, array) => {
    console.log(array);
});
```

---

# How findIndex() Works

`findIndex()` asks only one question for every element.

```text
Does this element satisfy the condition?
```

If the callback returns a **truthy** value:

```text
Return the index immediately.
```

If the callback returns a **falsy** value:

```text
Continue checking the next element.
```

---

# Dry Run

```javascript
const arr = [10,20,30,40];

const result = arr.findIndex(value => value > 15);
```

Iteration 1

```text
value = 10

↓

false

↓

Continue
```

---

Iteration 2

```text
value = 20

↓

true

↓

Return index 1
```

Remaining elements are never checked.

---

# Characteristics

## Returns the index

```javascript
const arr = [5,10,15];

const result = arr.findIndex(value => value > 8);

console.log(result);
```

Output

```text
1
```

---

## Stops after the first match

```javascript
const arr = [10,20,30,40];

const result = arr.findIndex(value => value > 15);
```

Once `20` is found:

```text
Return index 1

↓

Stop iteration
```

---

## Returns `-1` if no match exists

```javascript
const arr = [2,4,6];

const result = arr.findIndex(value => value % 2 !== 0);

console.log(result);
```

Output

```text
-1
```

---

## Original array remains unchanged

```javascript
const arr = [1,2,3];

const result = arr.findIndex(value => value > 1);

console.log(arr);
```

Output

```text
[1,2,3]
```

---

# Truthy & Falsy

Like `find()` and `filter()`, `findIndex()` checks whether the callback's return value is **truthy** or **falsy**.

Truthy examples

```javascript
10
"Hello"
[]
{}
true
```

Falsy examples

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
const arr = [5,10,15,20];

const result = arr.findIndex(value => value > 12);

console.log(result);
```

Output

```text
2
```

---

## Q2

```javascript
const arr = [2,4,6,8];

const result = arr.findIndex(value => value % 2 !== 0);

console.log(result);
```

Output

```text
-1
```

Reason:

No element satisfies the condition.

---

## Q3 (Interview Trap)

```javascript
const arr = [10,20,30];

const result = arr.findIndex(value => value * 2);

console.log(result);
```

Output

```text
0
```

Reason:

Iteration 1

```javascript
return 20;
```

`20` is truthy.

Therefore, `findIndex()` returns the **index** of the current element.

```text
0
```

---

## Q4

```javascript
const arr = [0, "", false, null, "Ashu"];

const result = arr.findIndex(value => value);

console.log(result);
```

Output

```text
4
```

Reason:

| Value | Truthy/Falsy |
|--------|--------------|
| `0` | ❌ |
| `""` | ❌ |
| `false` | ❌ |
| `null` | ❌ |
| `"Ashu"` | ✅ |

The first truthy value is `"Ashu"` at index `4`.

---

## Q5

```javascript
const arr = [0, "", false, null, "Ashu", "John"];

console.log(arr.find(value => value));
console.log(arr.findIndex(value => value));
console.log(arr.filter(value => value));
```

Output

```text
Ashu
4
["Ashu", "John"]
```

Reason:

- `find()` → Returns the first truthy element.
- `findIndex()` → Returns the index of the first truthy element.
- `filter()` → Returns all truthy elements.

---

# Difference

| Method | Returns | Stops Early? | No Match |
|----------|----------|--------------|----------|
| `filter()` | Array of matching elements | ❌ No | `[]` |
| `find()` | First matching element | ✅ Yes | `undefined` |
| `findIndex()` | Index of first matching element | ✅ Yes | `-1` |

---

# Golden Rules

✅ Executes once for each element until a match is found.

✅ Returns the **index**, not the element.

✅ Stops immediately after the first match.

✅ Returns `-1` if no element matches.

✅ Original array remains unchanged.

---

# Interview Trick

Whenever you see `findIndex()`, ask these two questions.

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

Return the current index immediately.
```

```text
Falsy

↓

Continue checking the next element.
```

---

# Memory Trick

```text
forEach()

↓

Ignore callback return

---------------------

map()

↓

Callback return = New element

---------------------

filter()

↓

Callback return = Keep / Remove

---------------------

reduce()

↓

Callback return = Next accumulator

---------------------

find()

↓

Callback return = Return current element

---------------------

findIndex()

↓

Callback return = Return current index
```