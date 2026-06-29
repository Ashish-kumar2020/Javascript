
function debounce(fn,delay){
    let timer;

    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this,args)
        },delay);
    }
}

let user = []

// console.log(Array.isArray(user))
// console.log(typeof (() => {}))

let name = "Ashish";
// console.log(`Hello ${name}`)


// spread operator
const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8,9];

const combined = [...arr1,...arr2]
// console.log(combined)

const user = {
    name: "Ashis",
    age: 26
}
user.age = 27

console.log(user)