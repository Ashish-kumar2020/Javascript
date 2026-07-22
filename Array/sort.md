# sort()

## Definition

`sort()` sorts the elements of an array **in place** and returns the **same array**.

> **In-place** means it modifies the original array.

---

# Syntax

## Default Sort

```javascript
array.sort();
```

---

## Custom Sort

```javascript
array.sort((a, b) => {

});
```

---

# Default Behavior

By default, `sort()` **does not sort numbers**.

It converts every element into a **string** and performs **lexicographical (dictionary) sorting**.

---

# Example

```javascript
const arr = [10, 2, 1];

arr.sort();

console.log(arr);
```

Output

```text
[1, 10, 2]
```

Reason

Internally JavaScript converts

```javascript
[10, 2, 1]
```

to

```javascript
["10", "2", "1"]
```

Then sorts them alphabetically.

```text
"1"

↓

"10"

↓

"2"
```

---

# Lexicographical Sorting

Strings are compared **character by character from left to right**.

Example

```text
"123"

vs

"129"
```

Compare

```text
1 == 1

↓

2 == 2

↓

3 < 9
```

Therefore

```text
"123"

comes before

"129"
```

---

# Prefix Rule

If one string is a prefix of another,

the shorter string comes first.

Example

```text
"1"

↓

"10"
```

Just like

```text
app

↓

apple
```

---

# Uppercase vs Lowercase

Uppercase letters come before lowercase letters.

ASCII / Unicode values

```text
A-Z

↓

65 - 90
```

```text
a-z

↓

97 - 122
```

Example

```javascript
const arr = ["banana", "Apple", "cat", "Dog"];

arr.sort();

console.log(arr);
```

Output

```text
["Apple", "Dog", "banana", "cat"]
```

---

# Compare Function

Syntax

```javascript
array.sort((a, b) => {

});
```

`a` and `b` are the two elements currently being compared.

The exact order of comparisons depends on JavaScript's sorting algorithm.

---

# Compare Function Rule

If the compare function returns

## Negative Number

```text
Keep a before b
```

---

## Positive Number

```text
Keep b before a
```

---

## Zero

```text
No change
```

This is the **golden rule**.

---

# Ascending Order

```javascript
arr.sort((a, b) => a - b);
```

Example

```text
a = 8
b = 3

↓

8 - 3 = 5

↓

Positive

↓

Keep b before a

↓

3 before 8
```

---

Another comparison

```text
a = 3
b = 8

↓

3 - 8 = -5

↓

Negative

↓

Keep a before b

↓

3 before 8
```

Both comparisons move the smaller number to the left.

Result

```text
Ascending Order
```

---

# Descending Order

```javascript
arr.sort((a, b) => b - a);
```

Example

```text
a = 8
b = 3

↓

3 - 8 = -5

↓

Negative

↓

Keep a before b

↓

8 before 3
```

---

Another comparison

```text
a = 3
b = 8

↓

8 - 3 = 5

↓

Positive

↓

Keep b before a

↓

8 before 3
```

Both comparisons move the larger number to the left.

Result

```text
Descending Order
```

---

# Interview Traps

## Trap 1

```javascript
const arr = [10, 2, 1];

arr.sort();

console.log(arr);
```

Output

```text
[1, 10, 2]
```

Reason

Numbers are converted into strings.

---

## Trap 2

```javascript
const arr = [100, 25, 3, 40];

arr.sort();

console.log(arr);
```

Output

```text
[100, 25, 3, 40]
```

Reason

Strings become

```text
"100"
"25"
"3"
"40"
```

Already in lexicographical order.

---

## Trap 3

```javascript
const arr = ["2", "10", "1"];

arr.sort();

console.log(arr);
```

Output

```text
["1", "10", "2"]
```

Reason

Strings are compared character by character.

---

## Trap 4

```javascript
const arr = ["banana", "Apple", "cat", "Dog"];

arr.sort();

console.log(arr);
```

Output

```text
["Apple", "Dog", "banana", "cat"]
```

Reason

Uppercase letters have smaller ASCII/Unicode values than lowercase letters.

---

# Characteristics

✅ Modifies the original array.

✅ Returns the same array.

✅ Default sorting is lexicographical.

✅ Numbers are converted to strings by default.

✅ Use a compare function for numeric sorting.

---

# Difference

| Code | Result |
|------|--------|
| `arr.sort()` | Lexicographical sort |
| `arr.sort((a, b) => a - b)` | Ascending numeric sort |
| `arr.sort((a, b) => b - a)` | Descending numeric sort |

---

# Golden Rules

## Rule 1

Default `sort()` converts elements into strings.

---

## Rule 2

Strings are compared character by character.

---

## Rule 3

Negative

```text
Keep a before b
```

---

## Rule 4

Positive

```text
Keep b before a
```

---

## Rule 5

Zero

```text
No change
```

---

# Memory Trick

```text
sort()

↓

Default

↓

Convert to Strings

↓

Dictionary Order

----------------------------

sort((a, b) => a - b)

↓

Smaller numbers move left

↓

Ascending

----------------------------

sort((a, b) => b - a)

↓

Larger numbers move left

↓

Descending
```