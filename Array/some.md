# some()

## Definition

`some()` executes a callback function **once for each element** in an array and **returns `true` if at least one element satisfies the condition**.

If no element satisfies the condition, it returns:

```javascript
false
```

---

# Syntax

```javascript
array.some(function(currentValue, index, array) {

});
```

or

```javascript
array.some((currentValue, index, array) => {

});
```

---

# Parameters

## currentValue

Current element being processed.

```javascript
const arr = [10, 20, 30];

arr.some(value => value > 15);
```

---

## index

Current index.

```javascript
const arr = ["A", "B", "C"];

arr.some((value, index) => index === 1);
```

---

## array

Reference to the original array.

```javascript
const arr = [1, 2, 3];

arr.some((value, index, array) => {
    console.log(array);
});
```

---

# How some() Works

`some()` asks only one question:

```text
Does at least one element satisfy the condition?
```

If the callback returns a **truthy** value:

```text
Return true immediately.
```

If the callback returns a **falsy** value:

```text
Continue checking the next element.
```

If no callback returns a truthy value:

```text
Return false.
```

---

# Dry Run

```javascript
const arr = [2,4,5,8];

const result = arr.some(value => value % 2 !== 0);
```

Iteration 1

```text
value = 2

↓

false

↓

Continue
```

---

Iteration 2

```text
value = 4

↓

false

↓

Continue
```

---

Iteration 3

```text
value = 5

↓

true

↓

Return true
```

Stop.

Remaining elements are never checked.

---

# Characteristics

## Returns a Boolean

```javascript
const arr = [1,2,3];

const result = arr.some(value => value > 2);

console.log(result);
```

Output

```text
true
```

---

## Stops after the first match

```javascript
const arr = [2,4,5,6];

const result = arr.some(value => value % 2 !== 0);
```

Once `5` is found:

```text
Return true

↓

Stop iteration
```

---

## Returns false if no match exists

```javascript
const arr = [2,4,6];

const result = arr.some(value => value % 2 !== 0);

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

const result = arr.some(value => value > 2);

console.log(arr);
```

Output

```text
[1,2,3]
```

---

# Truthy & Falsy

Like `find()`, `findIndex()`, and `filter()`, `some()` checks whether the callback's return value is **truthy** or **falsy**.

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
const arr = [2,4,6,8];

const result = arr.some(value => value % 2 !== 0);

console.log(result);
```

Output

```text
false
```

Reason:

No odd number exists.

---

## Q2

```javascript
const arr = [2,4,6,7];

const result = arr.some(value => value % 2 !== 0);

console.log(result);
```

Output

```text
true
```

Reason:

`7` satisfies the condition.

`some()` immediately returns `true`.

---

## Q3 (Interview Trap)

```javascript
const arr = [10,20,30];

const result = arr.some(value => value * 2);

console.log(result);
```

Output

```text
true
```

Reason:

Iteration 1

```javascript
return 20;
```

`20` is truthy.

Therefore `some()` immediately returns:

```text
true
```

---

## Q4

```javascript
const arr = [0,"",false,null,"Ashu"];

const result = arr.some(value => value);

console.log(result);
```

Output

```text
true
```

Reason:

- `0` → falsy
- `""` → falsy
- `false` → falsy
- `null` → falsy
- `"Ashu"` → truthy

At least one truthy value exists.

---

## Q5

```javascript
const arr = [0,"",false,null];

const result = arr.some(value => value);

console.log(result);
```

Output

```text
false
```

Reason:

Every callback returns a falsy value.

---

# Difference

| Method | Returns | Stops Early? | No Match |
|----------|----------|--------------|----------|
| `filter()` | Array of matching elements | ❌ No | `[]` |
| `find()` | First matching element | ✅ Yes | `undefined` |
| `findIndex()` | Index of first matching element | ✅ Yes | `-1` |
| `some()` | Boolean | ✅ Yes | `false` |

---

# Golden Rules

✅ Executes once for each element.

✅ Returns a boolean.

✅ Returns `true` as soon as one element satisfies the condition.

✅ Stops immediately after the first truthy callback.

✅ Returns `false` if no element satisfies the condition.

✅ Original array remains unchanged.

---

# Interview Trick

Whenever you see `some()`, ask these two questions.

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

Return true immediately.
```

```text
Falsy

↓

Continue checking the next element.
```

If every callback returns falsy:

```text
Return false.
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

---------------------

some()

↓

Callback return = Return true / false
```