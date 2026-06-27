// // hositing
let debouce = function(func,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this,args)
        },delay)
    }
}
const debouncegreet = debounce(() => {
    console.log("Hello")
},2000)


// let debounce = (func,delay) => {
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(() => func.apply(this,args),delay);
//     };
// }

// const debounceGreet = debounce(() => {
//     console.log("Hello")
// },2000)

// debounceGreet()

// function throttle(func,limit){
//     let isThrottle;
//     return function(...args){
//         if(!isThrottle){
//             func.apply(this,args);
//             isThrottle = true;
//             setTimeout(() => (isThrottle = false),limit)
//         }
//     }
// }
// const throttleTest = throttle(() => {
//     console.log("HHFEKfd")
// },2000)

function throttle(func,limit){
    let isThrottle;
    return function(...args){
        if(!isThrottle){
            func.apply(this,args);
            isThrottle = true;
            setTimeout(() => (isThrottle = false),limit)
        }
    }
}
const throttleTest = throttle(() => {
    console.log("jdkd");
    
},2000)

function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const fn1 = outer();
const fn2 = outer();

// fn1();
// fn1();
// fn2();
// fn1();

// for (var i = 1; i <= 3; i++) {
//   function inner(x) {
//     setTimeout(() => {
//       console.log(x);
//     }, 1000);
//   }

//   inner(i);
// }
function greet() {
  console.log(this.name);
}

const user = {
  name: "Ashu"
};

const boundFn = greet.bind(user);

boundFn.call({
  name: "John"
});