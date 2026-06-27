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
