## Primitive types are the basic built-in data types in TypeScript that represent single, immutable values. They include string, number, boolean, null, undefined, bigint, and symbol.


## Type Inference : Type inference is the process where TypeScript automatically determines the type of a variable from its initial value, reducing the need to explicitly declare types.

## null vs undefined : 
undefined → a variable has not been assigned a value yet.
null → the developer intentionally assigned "no value."

## Why we should use string not String?
string (Lowercase): This is a primitive type. It represents raw, lightweight textual data directly in memory (e.g., "Delhi").
String (Uppercase): This is a Global Object Wrapper or constructor. It creates a bulky JavaScript object instance that wraps around a primitive string.

## Literal Types :  suppose we have a variable and i want it to accept the value of specific type lets say admin then ts will force the variable to hold the value of admin type it is usefull.


## Note : let role = "admin";
if we declared the value with let and a string is assigned to then the type will we string beacause let value can be re-intialize so this will be a string
but if it is decalred using const then its type will be "admin"


## Difference between interface and types
1 - Interfcae can be extended after their initial declaration, which is not possible with types
2 - Both can be extended but interface offer a more natural syntax that aligns better with object oriented programing 

Use `interface` for defining object shapes and class contracts, especially when you might need to extend them later.
- Use `type` for unions, intersections, and complex type manipulations.


## Performance Considerations
While the difference is minimal for most applications, interfaces can offer slightly better performance in the TypeScript compiler because they only need to maintain references to their names, while types need to create new object types each time they’re used.


# Important :

// most important feature of interface which union can not do is
// if we have to interface of same name then they got merged
interface name {
    name: string
}

interface name { 
    age:  number;
}

const person: name = {
    name: "Asjo",
    age: 27
}

# TypeScript Notes

> These are my TypeScript notes focused on React development and interview preparation.

---

# 1. Primitive Types

Primitive types store a single value.

```ts
let name: string = "Ashish";
let age: number = 25;
let isAdmin: boolean = false;
let data: null = null;
let value: undefined = undefined;
let id: symbol = Symbol();
let big: bigint = 123456789n;
```

## Type Inference

TypeScript automatically detects the type.

```ts
let name = "Ashish"; // string
let age = 25; // number
let active = true; // boolean
```

## Explicit Typing

```ts
let name: string = "Ashish";
```

## Literal Types

```ts
let role: "admin";

role = "admin"; // ✅
role = "user"; // ❌
```

---

# 2. Arrays

Array of numbers

```ts
let numbers: number[] = [1, 2, 3];
```

Array of strings

```ts
let names: string[] = ["Ashish", "Rahul"];
```

Mixed array

```ts
let data: (string | number)[] = [1, "Ashish"];
```

Readonly array

```ts
const nums: readonly number[] = [1, 2, 3];

// nums.push(4) ❌
```

---

# 3. Objects

```ts
const user: {
    name: string;
    age: number;
} = {
    name: "Ashish",
    age: 25,
};
```

Nested Object

```ts
const employee = {
    id: 1,
    address: {
        city: "Noida",
        pin: 201301,
    },
};
```

---

# 4. Type Alias

Used to avoid repeating types.

```ts
type User = {
    id: number;
    name: string;
};
```

Usage

```ts
const user: User = {
    id: 1,
    name: "Ashish",
};
```

Type aliases can also be used for:

Primitive

```ts
type Username = string;
```

Union

```ts
type Status = "loading" | "success" | "error";
```

Array

```ts
type Scores = number[];
```

Function

```ts
type Add = (a: number, b: number) => number;
```

---

# 5. Interface

Used mainly for object structures.

```ts
interface User {
    id: number;
    name: string;
}
```

Inheritance

```ts
interface Person {
    name: string;
}

interface Employee extends Person {
    salary: number;
}
```

Type Extension

```ts
type Person = {
    name: string;
};

type Employee = Person & {
    salary: number;
};
```

---

# Type vs Interface

Use Interface

- React Props
- API Models
- Redux State

Use Type

- Union Types
- Primitive Alias
- Function Types
- Complex Types

---

# 6. Optional Properties

```ts
interface User {
    name: string;
    phone?: string;
}
```

Equivalent to

```ts
phone: string | undefined;
```

---

# 7. Union Types

A variable can have multiple valid types.

```ts
let id: number | string;

id = 10;
id = "EMP001";
```

Literal Union

```ts
type Theme = "light" | "dark";
```

---

# 8. Enums

```ts
enum Role {
    ADMIN = "admin",
    USER = "user",
}
```

Modern React projects usually prefer

```ts
type Role = "admin" | "user";
```

---

# 9. Tuples

Fixed length array.

```ts
let user: [string, number];

user = ["Ashish", 25];
```

Difference

```ts
number[]
```

↓

Any length

```ts
[number, number]
```

↓

Exactly two numbers

---

# 10. any vs unknown vs never

## any

Disables TypeScript checking.

```ts
let value: any;
```

Avoid using it.

---

## unknown

Safer version of any.

```ts
let value: unknown;

if (typeof value === "string") {
    value.toUpperCase();
}
```

---

## never

Function never finishes.

```ts
function crash(): never {
    throw new Error();
}
```

Difference

void

↓

Function completes

never

↓

Function never completes

---

# 11. Generics

Generics make code reusable.

```ts
function identity<T>(value: T): T {
    return value;
}
```

Usage

```ts
identity(10);
identity("React");
identity(true);
```

Generic Interface

```ts
interface ApiResponse<T> {
    success: boolean;
    data: T;
}
```

Generic Type

```ts
type Box<T> = {
    value: T;
};
```

Multiple Generics

```ts
function pair<T, U>(a: T, b: U) {
    return [a, b];
}
```

Mental Model

T is a placeholder for a type.

---

# 12. keyof

Returns the keys of an object as a union.

```ts
interface User {
    id: number;
    name: string;
}
```

```ts
type Keys = keyof User;
```

Result

```ts
"id" | "name"
```

Useful for

```ts
function getValue<T>(obj: T, key: keyof T) {
    return obj[key];
}
```

---

# 13. typeof

Gets the type of a variable.

```ts
const user = {
    id: 1,
    name: "Ashish",
};
```

```ts
type User = typeof user;
```

Combination

```ts
keyof typeof user
```

↓

```ts
"id" | "name"
```

---

# 14. Utility Types

## Partial

Everything optional.

```ts
type UpdateUser = Partial<User>;
```

---

## Pick

Select specific fields.

```ts
type Card = Pick<User, "name" | "email">;
```

---

## Omit

Remove fields.

```ts
type SignupUser = Omit<User, "id">;
```

---

## Record

Create an object from keys.

```ts
type Role = "admin" | "user";

type Permissions = Record<Role, boolean>;
```

Result

```ts
{
    admin: boolean;
    user: boolean;
}
```

---

## Readonly

Prevent modification.

```ts
type ReadonlyUser = Readonly<User>;
```

---

# 15. Type Narrowing

TypeScript narrows the type after checking.

## typeof

```ts
if (typeof value === "string") {
    value.toUpperCase();
}
```

---

## in

```ts
if ("permissions" in person) {
}
```

---

## instanceof

```ts
if (date instanceof Date) {
}
```

---

## Equality Check

```ts
if (user !== null) {
}
```

---

# Important React Examples

## State

```ts
const [user, setUser] = useState<User | null>(null);
```

Need narrowing

```ts
if (user) {
    console.log(user.name);
}
```

---

# Things to Remember

- Prefer `interface` for object models.
- Prefer `type` for unions and function types.
- Avoid `any`.
- Use `unknown` when type is uncertain.
- Use `Partial` for update APIs.
- Use `Pick` when only a few fields are required.
- Use `Omit` when excluding fields.
- Use `Record` to generate objects from keys.
- Use `Readonly` to prevent mutations.
- Use Generics to write reusable type-safe code.
- `keyof` returns keys.
- `typeof` returns the type of a variable.
- Always narrow union types before using them.

---

# Topics Completed

- ✅ Primitive Types
- ✅ Arrays
- ✅ Objects
- ✅ Type Alias
- ✅ Interface
- ✅ Optional Properties
- ✅ Union Types
- ✅ Enums
- ✅ Tuples
- ✅ any vs unknown vs never
- ✅ Generics
- ✅ keyof
- ✅ typeof
- ✅ Utility Types
- ✅ Type Narrowing

---

# Remaining Topics

- Type Assertions (Optional)
- React Props Typing
- useState Typing
- useRef Typing
- React Event Types
- Context Typing
- Redux Toolkit Typing
- API Response Typing
