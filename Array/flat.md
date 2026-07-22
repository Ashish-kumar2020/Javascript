# flat()

## Definition

`flat()` creates a **new array** by flattening nested arrays.

It **does not modify** the original array.

---

# Syntax

## Default Depth

```javascript
array.flat();
```

Equivalent to

```javascript
array.flat(1);
```

---

## Custom Depth

```javascript
array.flat(depth);
```

---

# Parameters

## depth

Specifies how many levels of nested arrays should be flattened.

Default value

```javascript
1
```

---

# How flat() Works

`flat()` traverses the array element by element.

If an element is:

- A normal value → Add it to the new array.
- A nested array → Open it based on the specified depth and add its elements.

---

# Dry Run

```javascript
const arr = [1,2,[3,4],5];

const result = arr.flat();
```

Initial

```text
[]
```

---

Read

```text
1
```

↓

```text
[1]
```

---

Read

```text
2
```

↓

```text
[1,2]
```

---

Read

```text
[3,4]
```

Depth = 1

Open the array.

↓

```text
[1,2,3,4]
```

---

Read

```text
5
```

↓

```text
[1,2,3,4,5]
```

Final Output

```javascript
[1,2,3,4,5]
```

---

# Default Depth

```javascript
const arr = [1,[2,[3,4]]];

console.log(arr.flat());
```

Output

```javascript
[1,2,[3,4]]
```

Reason

Only the first nested level is flattened.

---

# Depth = 2

```javascript
const arr = [1,[2,[3,4]]];

console.log(arr.flat(2));
```

Output

```javascript
[1,2,3,4]
```

Reason

Two nested levels are flattened.

---

# Infinite Depth

```javascript
const arr = [1,[2,[3,[4,[5]]]]];

console.log(arr.flat(Infinity));
```

Output

```javascript
[1,2,3,4,5]
```

Reason

All nested levels are flattened.

---

# Characteristics

✅ Returns a new array.

✅ Original array remains unchanged.

✅ Default depth is `1`.

✅ Supports custom depth.

✅ `Infinity` flattens every nested level.

---

# Common Interview Questions

## Q1

```javascript
const arr = [1,[2,3],4];

console.log(arr.flat());
```

Output

```text
[1,2,3,4]
```

---

## Q2

```javascript
const arr = [1,[2,[3,4]]];

console.log(arr.flat());
```

Output

```text
[1,2,[3,4]]
```

Reason

Default depth is `1`.

---

## Q3

```javascript
const arr = [1,[2,[3,4]]];

console.log(arr.flat(2));
```

Output

```text
[1,2,3,4]
```

---

## Q4

```javascript
const arr = [1,[2,[3,[4]]]];

console.log(arr.flat(Infinity));
```

Output

```text
[1,2,3,4]
```

---

## Q5

```javascript
const arr = [1,[2],3];

const result = arr.flat();

console.log(result);
console.log(arr);
```

Output

```text
result

[1,2,3]

arr

[1,[2],3]
```

Reason

`flat()` creates a **new array**.

The original array remains unchanged.

---

# Difference

| Method | Returns | Modifies Original Array? |
|---------|----------|--------------------------|
| `map()` | New array | ❌ No |
| `filter()` | New array | ❌ No |
| `flat()` | Flattened array | ❌ No |
| `sort()` | Same sorted array | ✅ Yes |

---

# Golden Rules

## Rule 1

```text
flat()

↓

Default

↓

flat(1)
```

---

## Rule 2

`flat()` always returns a **new array**.

---

## Rule 3

The original array is never modified.

---

## Rule 4

```text
flat(2)

↓

Flatten two levels
```

---

## Rule 5

```text
flat(Infinity)

↓

Flatten all nested levels
```

---

# Memory Trick

```text
Nested Array

↓

flat()

↓

Flatten 1 Level

-------------------------

flat(2)

↓

Flatten 2 Levels

-------------------------

flat(3)

↓

Flatten 3 Levels

-------------------------

flat(Infinity)

↓

Flatten Everything
```