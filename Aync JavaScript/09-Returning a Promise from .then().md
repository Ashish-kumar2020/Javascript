# Returning a Promise from `.then()`

## Why is this important?

A `.then()` callback can return either

- a normal value
- another Promise

If it returns a Promise, JavaScript **automatically waits for that Promise to settle** before continuing the Promise chain.

This behavior is called **Promise Adoption** (also known as Promise Unwrapping).

---

# Definition

> If a `.then()` callback returns a Promise, the new Promise returned by `.then()` waits for that Promise to settle before continuing the chain.

The next `.then()` receives the **fulfilled value**, not the Promise object.

---

# Returning a Normal Value

```javascript
Promise.resolve(5)
    .then(value => {
        return value + 5;
    })
    .then(value => {
        console.log(value);
    });
```

Output

```text
10
```

Execution

```text
Promise A

↓

5

↓

First .then()

↓

Returns 10

↓

Promise B

↓

Fulfilled(10)

↓

Second .then()

↓

Receives 10
```

---

# Returning a Promise

```javascript
Promise.resolve(5)
    .then(value => {
        return Promise.resolve(value + 5);
    })
    .then(value => {
        console.log(value);
    });
```

Output

```text
10
```

Notice

The callback returns

```javascript
Promise.resolve(10)
```

The second `.then()` does **not** receive

```text
Promise {10}
```

Instead, JavaScript waits for the returned Promise to settle.

Then the second `.then()` receives

```text
10
```

---

# Dry Run

```javascript
Promise.resolve(5)
    .then(value => {
        return Promise.resolve(value + 5);
    })
    .then(value => {
        console.log(value);
    });
```

### Step 1

Initial Promise

```text
Promise A

↓

Fulfilled

↓

5
```

---

### Step 2

First `.then()`

Receives

```text
5
```

Returns

```javascript
Promise.resolve(10)
```

At this point,

the callback returns a Promise.

---

### Step 3

JavaScript creates a new Promise.

```text
Promise B
```

Promise B does **not** become fulfilled immediately.

Instead

```text
Promise B

↓

Wait...
```

It waits until the returned Promise settles.

---

### Step 4

Returned Promise settles.

```text
Fulfilled

↓

10
```

Now

```text
Promise B

↓

Fulfilled

↓

10
```

---

### Step 5

Second `.then()`

Receives

```text
10
```

Output

```text
10
```

---

# Promise Adoption (Automatic Unwrapping)

Suppose a callback returns

```javascript
return Promise.resolve(20);
```

JavaScript automatically waits for the Promise.

Internally

```text
Callback

↓

Returns Promise

↓

New Promise Waits

↓

Returned Promise Settles

↓

New Promise Gets Same Value

↓

Next .then() Receives Value
```

The next `.then()` never receives the Promise object.

It always receives the fulfilled value.

---

# Example

```javascript
Promise.resolve("A")
    .then(value => {
        console.log(value);

        return Promise.resolve("B");
    })
    .then(value => {
        console.log(value);

        return "C";
    })
    .then(value => {
        console.log(value);
    });
```

Output

```text
A
B
C
```

Execution

```text
Promise A

↓

"A"

↓

Returns Promise("B")

↓

Promise B waits

↓

Promise B fulfilled with "B"

↓

Second .then()

↓

Returns "C"

↓

Promise C fulfilled with "C"

↓

Third .then()

↓

Receives "C"
```

---

# Difference

## Returning a Value

```javascript
return 10;
```

Execution

```text
Promise B

↓

Immediately Fulfilled

↓

10
```

---

## Returning a Promise

```javascript
return Promise.resolve(10);
```

Execution

```text
Promise B

↓

Wait

↓

Returned Promise Settles

↓

Fulfilled

↓

10
```

---

# Three Possible Returns

Every `.then()` callback can return only one of these.

### Case 1

Return a normal value.

```javascript
return 100;
```

Next `.then()` receives

```text
100
```

---

### Case 2

Return a Promise.

```javascript
return Promise.resolve(100);
```

Next `.then()` receives

```text
100
```

JavaScript waits for the Promise to settle.

---

### Case 3

Return nothing.

```javascript
return;
```

Equivalent to

```javascript
return undefined;
```

Next `.then()` receives

```text
undefined
```

---

# Characteristics

✅ A `.then()` callback can return either a value or a Promise.

✅ Every `.then()` still returns a new Promise.

✅ If a Promise is returned, JavaScript automatically waits for it.

✅ The next `.then()` receives the fulfilled value, never the Promise object.

---

# Common Interview Questions

## Q1

```javascript
Promise.resolve(2)
    .then(value => {
        return Promise.resolve(value * 5);
    })
    .then(value => {
        console.log(value);
    });
```

Output

```text
10
```

Reason

The second `.then()` receives the fulfilled value

```text
10
```

not

```text
Promise {10}
```

---

## Q2

```javascript
Promise.resolve("A")
    .then(value => {
        return Promise.resolve("B");
    })
    .then(value => {
        return value + "C";
    })
    .then(value => {
        console.log(value);
    });
```

Output

```text
BC
```

Reason

JavaScript waits for the returned Promise to settle.

The second `.then()` receives

```text
B
```

---

## Q3

```javascript
Promise.resolve(10)
    .then(value => {
        return Promise.resolve(value + 10);
    })
    .then(value => {
        return Promise.resolve(value + 10);
    })
    .then(value => {
        console.log(value);
    });
```

Output

```text
30
```

Reason

Each returned Promise is automatically adopted.

Each next `.then()` receives the fulfilled value.

---

# Golden Rules

## Rule 1

Every `.then()` returns a new Promise.

---

## Rule 2

If a callback returns a normal value,

the new Promise is immediately fulfilled with that value.

---

## Rule 3

If a callback returns a Promise,

the new Promise waits for that Promise to settle.

---

## Rule 4

The next `.then()` receives the fulfilled value,

never the Promise object.

---

## Rule 5

JavaScript automatically adopts (unwraps) returned Promises.

---

# Memory Trick

```text
.then()

↓

What did the callback return?

↓

Normal Value

↓

Next Promise

↓

Fulfilled Immediately

-------------------------

Promise

↓

Wait

↓

Promise Settles

↓

Next Promise

↓

Fulfilled

-------------------------

Nothing

↓

undefined

↓

Next Promise

↓

Fulfilled(undefined)
```