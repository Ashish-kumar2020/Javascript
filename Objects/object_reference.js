// One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

let a = {};
let b = a; // copy the reference

// alert(a == b); // true, both variables reference the same object
// alert(a === b); // true

//Cloning and merging, Object.assign
let sources = {
  name: "MDN-DOCS",
  url: "jduowqdhheude",
  pages: 400,
};
let dest = {};
Object.assign(dest, sources);

console.log(dest);

// Nested cloning
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone = Object.assign({}, user);
console.log(clone);

// structuredClone -  method can clone most data types, such as objects, arrays, primitive values.

let abc = {};
abc.me = abc;
let cloned = structuredClone(abc);
console.log(cloned);

// Summary
/*
Objects are assigned and copied by reference. In other words, a variable stores not the “object value”, but a “reference” (address in memory) for the value. So copying such a variable or passing it as a function argument copies that reference, not the object itself.

All operations via copied references (like adding/removing properties) are performed on the same single object.

*/
