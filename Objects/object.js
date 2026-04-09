// objects are used to store keyed collections of various data and more complex entities

// Ways to create the object
// let user = new Object();
// let users = {};

// Literals and properties
let userDetails = {
  // an object
  name: "John", // by key "name" store value "John
  age: 30,
  "likes Cricket": true, // // multiword property name must be quoted
};
// Access a specific key in Object
console.log(userDetails.name);
// Add a new Property in Object
userDetails.isAdmin = true;
// Delete a property
delete userDetails.age;

// Note : For multiword properties the dot access doesn't works
userDetails["likes Cricket"] = true;

console.log(userDetails["likes Cricket"]);

// Computed Properties
// let fruits = prompt("Which fruit to buy?", "apple");
// let bag = {
//   [fruits]: 5,
// };

// alert(bag.apple);

// Property Value Shorthand
function makeUser(name, age) {
  return {
    name,
    age,
  };
}
let user = makeUser("Ashish", 26);
console.log(user);

// Property names limitations
//  a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.
// But for an object property, there’s no such restriction:

let obj = {
  for: 1,
  let: 2,
  return: 3,
};

console.log(obj);

// Property Existence - "in" Operator
console.log("for" in obj);
console.log("ashish" in obj);

// for in loop

let abc = {
  name: "John",
  age: 26,
  isAdmin: true,
};

for (let key in abc) {
  console.log(key);
  console.log(abc[key]);
}

// Summary
/*
Objects are associative arrays with several special features.

They store properties (key-value pairs), where:

Property keys must be strings or symbols (usually strings).
Values can be of any type.
To access a property, we can use:

The dot notation: obj.property.
Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].
Additional operators:

To delete a property: delete obj.prop.
To check if a property with the given key exists: "key" in obj.
To iterate over an object: for (let key in obj) loop.
What we’ve studied in this chapter is called a “plain object”, or just Object.

There are many other kinds of objects in JavaScript:

Array to store ordered data collections,
Date to store the information about the date and time,
Error to store the information about an error.
 */
