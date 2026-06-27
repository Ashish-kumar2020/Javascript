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