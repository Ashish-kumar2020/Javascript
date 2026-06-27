// ---------------- Array -------------------------
// An array is a collection of values of the same type.
// const numbers = [1,2,3]; // in JS

const numbers: number[] = [1, 2, 3]; // valid
// const marks: number[] = [80, 90, "95"]; // not valid - because we have decalre its type as number but we are assigning a string value

// ------------- Type Infers -----------------------

const names = ["Ashish", "Singh"]; // its type is string ts will automatically assigne the type based on the intial value

// to do this we need to use Union type
const arr: (string | number | boolean)[] = [1, "Ashish", true];

// ---------------- Objects ---------------------
// Objects store related data together.

// const user: {
//   name: string;
//   age: number;
// } = {
//   name: "Ashish",
//   age: 25,
// };

// this will throw error beacuse we have initialized age as number but we are assigning it as string
// const user: {
//     name: string;
//     age: number;
// } = {
//     name: "Ashish",
//     age: "25"
// };

// if any of the field value is missing then it will throw error
// const user: {
//     name: string;
//     age: number;
// } = {
//     name: "Ashish"
// };


// ----------------- Nested Objects ------------------
// without types
const employee = {
    id: 1,
    name: "Ashish",
    address: {
        city: "Noida",
        pincode: 201301
    }
}

// with types
const employees : {
    id : number;
    name: string;
    address: {
        city: string;
        pincode: number
    }
} = {
    id: 1,
    name: "Ashish",
    address: {
        city: "Noida",
        pincode: 201301
    }
}

// --------------- Readonly Arrays --------------------
const numberss: readonly number[] = [1, 2, 3];
// numberss.push(4); // this is not allowed as the array is readonly array

const users = {
    name: "Ahsih",
    age: 25
}
users.age = 26
console.log(users)

const cities = [
    "Delhi",
    "Mumbai"
]

// lets say we have 50+ emplyess so we can not write for everyone

type Employee = {
    id: number;
    name: string;
    salary: number;
}

const employeess: Employee = {
    id : 1,
    name: "ashish",
    salary: 500000000
}