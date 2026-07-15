# JavaScript Fundamentals

# 09 - Spread Operator (`...`) & Rest Operator (`...`)

---

# 📖 Definition

The **Spread** and **Rest** operators both use the same syntax (`...`) but serve different purposes.

| Operator | Purpose |
|----------|---------|
| **Spread (`...`)** | Expands (unpacks) iterable values |
| **Rest (`...`)** | Collects (packs) multiple values |

> 💡 **Remember:**
>
> - **Spread → Expand**
> - **Rest → Collect**

---

# 🤔 Why were they introduced?

Before ES6

Copying arrays

```javascript
const arr1 = [1, 2, 3];

const arr2 = arr1.slice();
```

Merging arrays

```javascript
const arr3 = arr1.concat(arr2);
```

Passing array elements

```javascript
Math.max.apply(null, numbers);
```

Collecting function arguments

```javascript
function sum() {
    const args = Array.prototype.slice.call(arguments);
}
```

ES6 introduced `...` to simplify these operations.

---

# Spread Operator

## 📖 Definition

Spread **expands** an iterable into individual elements.

Works with:

- Arrays
- Strings
- Objects (ES2018)
- Function arguments

---

# Spread with Arrays

```javascript
const numbers = [1, 2, 3];

console.log(...numbers);
```

Output

```javascript
1 2 3
```

---

# Copying Arrays

```javascript
const arr1 = [1, 2, 3];

const arr2 = [...arr1];
```

Output

```javascript
[1, 2, 3]
```

---

# 💡 Why?

Without spread

```javascript
const arr2 = arr1;
```

Both variables point to the **same array**.

With spread

```javascript
const arr2 = [...arr1];
```

A **new array** is created.

---

# Merging Arrays

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];

const result = [...arr1, ...arr2];
```

Output

```javascript
[1,2,3,4]
```

---

# Adding Elements

Beginning

```javascript
const arr = [2,3];

const result = [1, ...arr];
```

End

```javascript
const result = [...arr,4];
```

Middle

```javascript
const result = [1,...arr,4];
```

---

# Spread with Objects

```javascript
const user = {
    name: "Ashu"
};

const updatedUser = {
    ...user,
    age:25
};
```

Output

```javascript
{
    name:"Ashu",
    age:25
}
```

---

# Overriding Properties

```javascript
const user = {
    name:"Ashu",
    age:20
};

const updated = {
    ...user,
    age:25
};
```

Output

```javascript
{
    name:"Ashu",
    age:25
}
```

The last property wins.

---

# Merging Objects

```javascript
const address = {
    city:"Delhi"
};

const profile = {
    name:"Ashu"
};

const user = {
    ...profile,
    ...address
};
```

---

# Spread with Strings

```javascript
const str = "Hello";

console.log([...str]);
```

Output

```javascript
["H","e","l","l","o"]
```

---

# Spread in Function Calls

```javascript
const nums = [10,20,30];

console.log(Math.max(...nums));
```

Output

```javascript
30
```

Without spread

```javascript
Math.max(nums);
```

Output

```javascript
NaN
```

---

# Rest Operator

## 📖 Definition

Rest collects multiple values into a single variable.

---

# Rest in Function Parameters

```javascript
function sum(...numbers){
    console.log(numbers);
}

sum(10,20,30);
```

Output

```javascript
[10,20,30]
```

---

# Why?

Without Rest

```javascript
function sum(){
    console.log(arguments);
}
```

Problems

- `arguments` isn't a real array.
- Doesn't work in arrow functions.

Rest solves these issues.

---

# Sum Example

```javascript
function sum(...numbers){

    return numbers.reduce(
        (total,num)=>total+num,
        0
    );
}

sum(10,20,30);
```

Output

```javascript
60
```

---

# Rest in Object Destructuring

```javascript
const user = {
    name:"Ashu",
    age:25,
    city:"Delhi"
};

const {
    name,
    ...rest
}=user;
```

Output

```javascript
name
//Ashu

rest
//{
// age:25,
// city:"Delhi"
//}
```

---

# Rest in Array Destructuring

```javascript
const numbers=[
1,
2,
3,
4
];

const[
first,
...remaining
]=numbers;
```

Output

```javascript
first
//1

remaining
//[2,3,4]
```

---

# Spread vs Rest

| Spread | Rest |
|----------|------|
| Expands values | Collects values |
| Used while calling | Used while receiving |
| RHS | LHS |
| Creates copies | Packs values |

---

Example

Spread

```javascript
const arr=[1,2,3];

console.log(...arr);
```

---

Rest

```javascript
function demo(...arr){

}
```

---

# Shallow Copy

Spread creates a

```
Shallow Copy
```

Not a deep copy.

---

Example

```javascript
const user={
    name:"Ashu",
    address:{
        city:"Delhi"
    }
};

const copy={
    ...user
};

copy.address.city="Noida";

console.log(user.address.city);
```

Output

```javascript
Noida
```

Because nested objects are still shared.

---

# Deep Copy

Use

```javascript
structuredClone()
```

or libraries like

```
lodash.cloneDeep
```

---

# 💡 Why?

Spread copies only the first level.

Nested objects continue pointing to the same memory.

```
Heap

User ----------+
               |
Copy ----------+
               |
        Address Object
```

Only the outer object is copied.

---

# React Use Cases

## Updating State

```javascript
setUser({
    ...user,
    age:26
});
```

---

Updating Array

```javascript
setTodos([
    ...todos,
    newTodo
]);
```

---

Removing Item

```javascript
const updated=
todos.filter(
    todo=>todo.id!==id
);
```

---

# Common Mistakes

### Mistake 1

```javascript
const copy=arr;
```

Copies reference.

---

Correct

```javascript
const copy=[...arr];
```

---

### Mistake 2

Thinking spread creates deep copy.

It does not.

---

### Mistake 3

Rest parameter must be last.

❌

```javascript
function demo(...a,b){}
```

---

Correct

```javascript
function demo(a,...b){}
```

---

### Mistake 4

Using spread on non-iterables.

```javascript
const obj={};

[...obj]
```

Output

```text
TypeError
```

Objects are not iterable.

---

# Interview Traps

### Trap 1

```javascript
const arr=[1,2];

const copy=arr;

copy.push(3);

console.log(arr);
```

Output

```javascript
[1,2,3]
```

---

### Trap 2

```javascript
const arr=[1,2];

const copy=[...arr];

copy.push(3);
```

Output

```javascript
arr
//[1,2]

copy
//[1,2,3]
```

---

### Trap 3

```javascript
const obj={
    a:1,
    b:2
};

const updated={
    ...obj,
    b:10
};
```

Output

```javascript
{
a:1,
b:10
}
```

---

### Trap 4

```javascript
Math.max([1,2,3]);
```

Output

```javascript
NaN
```

---

Correct

```javascript
Math.max(...[1,2,3]);
```

---

# Best Practices

✅ Use spread for immutable updates.

✅ Use rest for variable-length arguments.

✅ Never mutate React state directly.

✅ Remember spread creates shallow copies.

---

# Senior Interview Questions

1. Difference between Spread and Rest.
2. Why does spread create a shallow copy?
3. Why doesn't spread deep clone objects?
4. Why is Rest better than `arguments`?
5. Why must Rest be the last parameter?
6. Explain Spread in React state updates.
7. Difference between `arr = [...arr]` and `arr = arr`.
8. When should `structuredClone()` be used?

---

# Quick Revision

- `...` has two meanings:
  - Spread → Expand
  - Rest → Collect
- Spread works with arrays, objects, strings, and function calls.
- Rest works with function parameters and destructuring.
- Spread creates a **shallow copy**.
- Nested objects are still shared.
- Rest parameter must be the last parameter.
- Spread is heavily used in React for immutable state updates.
- Use `structuredClone()` for deep cloning (when appropriate).