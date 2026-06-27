let userName : string = "Ashish"
// userName = 100; // this will throw error;
userName = "Singh"
console.log(userName);


type UserProps = {
    userName: string;
}

function User({userName}: UserProps){
    // console.log("UserName is. : ",userName)
    // return <h1>{userName} </h1>. React way of handling this
}

// In this way we will access this
// <User userName="Ashish"/>


// ---------------- Type Inference ---------------------
let age = 25;
// age = "Ashish"; this will give error
console.log(age);

// ---------------- Explicit Typing --------------------
// Sometime ts does not know what value we are going to store in the variable
let user; // Here ts will be confused

// so its better to define the type of the variable always
let user2: string;

const city = "Delhi"; // if a value is declared with const then ts will automatically assign the type to the value of that variable.
console.log(typeof(city))


// ------------------- Literal type --------------------
let role: "admin";
// role = "User" // this will throw error, as it will accept the value of type admin


const a = 10;
const c = true