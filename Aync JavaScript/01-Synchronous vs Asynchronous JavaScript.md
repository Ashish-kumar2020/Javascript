# Synchronous vs Asynchronous JavaScript

## Synchronous JavaScript

Synchronous JavaScript executes **one statement at a time** in the order it appears.

Each statement must finish before the next statement starts.

---

# Definition

> Synchronous JavaScript executes code sequentially, one statement after another.

---

# Example

```javascript
console.log("A");

console.log("B");

console.log("C");
```

Output

```text
A
B
C
```

Execution Flow

```text
A

↓

B

↓

C
```

JavaScript waits for the current statement to finish before executing the next one.

---

# Example

```javascript
console.log("Start");

let sum = 0;

for (let i = 1; i <= 3; i++) {
    sum += i;
}

console.log(sum);

console.log("End");
```

Output

```text
Start
6
End
```

Reason

The loop executes completely before `console.log("End")`.

---

# Single Threaded Nature

JavaScript is **single-threaded**.

It has only **one Call Stack**, which means it can execute only one piece of JavaScript code at a time.

Execution Flow

```text
Task 1

↓

Task 2

↓

Task 3
```

JavaScript cannot execute two functions simultaneously.

---

# Blocking Code

Blocking code prevents JavaScript from executing the next statement until the current statement finishes.

Example

```javascript
console.log("A");

for (let i = 0; i < 10000000000; i++) {}

console.log("B");
```

Output

```text
A

(wait)

B
```

Reason

The `for` loop blocks JavaScript until it finishes.

---

# Infinite Loop

```javascript
console.log("A");

while (true) {}

console.log("B");
```

Output

```text
A
```

Reason

The condition is always `true`.

The loop never terminates.

JavaScript never reaches the next statement.

---

# Important Note

The loop blocks because **it never exits**, not because the loop body is empty.

Both of these block forever.

```javascript
while (true) {}
```

```javascript
while (true) {
    console.log("Running");
}
```

---

# Characteristics

✅ Executes code line by line.

✅ Executes one statement at a time.

✅ Single-threaded.

✅ Uses one Call Stack.

✅ Blocking code prevents the execution of subsequent statements.

---

# Common Interview Questions

## Q1

```javascript
console.log("A");

console.log("B");

console.log("C");
```

Output

```text
A
B
C
```

---

## Q2

```javascript
console.log("Start");

for (let i = 0; i < 3; i++) {
    console.log(i);
}

console.log("End");
```

Output

```text
Start
0
1
2
End
```

---

## Q3

```javascript
console.log("A");

while (true) {}

console.log("B");
```

Output

```text
A
```

Reason

The infinite loop never completes.

JavaScript never reaches `console.log("B")`.

---

# Golden Rules

## Rule 1

JavaScript executes one statement at a time.

---

## Rule 2

JavaScript is single-threaded.

---

## Rule 3

The next statement cannot execute until the current statement finishes.

---

## Rule 4

Blocking code prevents further execution.

---

# Memory Trick

```text
JavaScript

↓

Single Thread

↓

One Call Stack

↓

One Statement at a Time

↓

Blocking Code Stops Everything
```