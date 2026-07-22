# find()

## Definition

`find()` executes a callback function **once for each element** in an array and **returns the first element that satisfies the condition**.

If no element satisfies the condition, it returns:

```javascript
undefined
```

---

# Syntax

```javascript
array.find(function(currentValue, index, array) {

});
```

or

```javascript
array.find((currentValue, index, array) => {

});
```

---

# Parameters

## currentValue

Current element being processed.

```javascript
const arr = [10, 20, 30];

arr.find(value => value > 15);
```

---

## index

Current index.

```javascript
const arr = ["A", "B", "C"];

arr.find((value, index) => index === 1);
```

---

## array

Reference to the original array.

```javascript
const arr = [1, 2, 3];

arr.find((value, index, array) => {
    console.log(array);
});
```

---

# How find() Works

`find()` asks only one question for every element:

```text
Does this element satisfy the condition?
```

If the callback returns a **truthy** value:

```text
Return the current element immediately.
```

If the callback returns a **falsy** value:

```text
Continue to the next element.
```

---

# Dry Run

```javascript
const arr = [10,20,30,40];

const result = arr.find(value => value > 15);
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

Return 20
```

The remaining elements are **never checked**.

---

# Characteristics

## Returns the first matching element

```javascript
const arr = [5,10,15];

const result = arr.find(value => value > 8);

console.log(result);
```

Output

```text
10
```

---

## Returns the element, not an array

```javascript
const arr = [2,4,6];

const result = arr.find(value => value > 3);

console.log(result);
```

Output

```text
4
```

Not

```text
[4]
```

---

## Returns `undefined` if no match is found

```javascript
const arr = [2,4,6];

const result = arr.find(value => value % 2 !== 0);

console.log(result);
```

Output

```text
undefined
```

---

## Stops after the first match

```javascript
const arr = [1,2,3,4];

const result = arr.find(value => value > 2);
```

Once `3` is found:

```text
Return 3

↓

Stop iteration
```

`4` is never checked.

---

## Original array remains unchanged

```javascript
const arr = [1,2,3];

const result = arr.find(value => value > 1);

console.log(arr);
```

Output

```text
[1,2,3]
```

---

# Truthy & Falsy

Like `filter()`, `find()` does **not** require `true` or `false`.

It checks whether the callback's return value is **truthy** or **falsy**.

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
const arr = [5,10,15,20];

const result = arr.find(value => value > 12);

console.log(result);
```

Output

```text
15
```

---

## Q2

```javascript
const arr = [2,4,6,8];

const result = arr.find(value => value % 2 !== 0);

console.log(result);
```

Output

```text
undefined
```

Reason:

No element satisfies the condition.

---

## Q3

```javascript
const arr = [1,2,3,4];

const result = arr.find(value => {
    console.log(value);
    return value > 2;
});

console.log(result);
```

Output

```text
1
2
3
3
```

Reason:

- `1` → false
- `2` → false
- `3` → true → return current element
- `4` is never checked.

---

## Q4 (Interview Trap)

```javascript
const arr = [10,20,30];

const result = arr.find(value => value * 2);

console.log(result);
```

Output

```text
10
```

Reason:

Iteration 1

```javascript
return 20;
```

`20` is **truthy**.

Therefore, `find()` returns the **current element**, which is:

```text
10
```

It does **not** return `20`.

---

## Q5

```javascript
const arr = [0,10,20];

const result = arr.find(value => value);

console.log(result);
```

Output

```text
10
```

Reason:

- `0` → falsy → continue
- `10` → truthy → return current element

---

# Difference

| Method | Callback Return Used For | Returns | Stops Early? |
|----------|--------------------------|----------|--------------|
| `forEach()` | Ignored | `undefined` | ❌ No |
| `map()` | New transformed element | New array | ❌ No |
| `filter()` | Keep or discard element | New array | ❌ No |
| `reduce()` | Next accumulator | Single value | ❌ No |
| `find()` | Return current element if truthy | First matching element | ✅ Yes |

---

# Golden Rules

✅ Executes once for each element until a match is found.

✅ Returns the **first matching element**.

✅ Returns the element, not an array.

✅ Stops immediately after finding the first match.

✅ Returns `undefined` if no element matches.

✅ Original array remains unchanged.

---

# Interview Trick

Whenever you see `find()`, ask these two questions.

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

Return the current element immediately.
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

Callback return = Return current element and stop
```