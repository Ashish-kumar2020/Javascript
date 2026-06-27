// function twoSum(arr,target){
//     const sumIndx = new Map();
   
//     for(let i =0; i < arr.length; i++){
//         let leftVal = target - arr[i];
//         if(sumIndx.has(leftVal)){
//             return [sumIndx.get(leftVal),i];
//         }
//         sumIndx.set(arr[i],i)
//     }
//     return -1;
// }

// function sum2(arr,target){
//     const map = new Map();
//     for(let i =0;i<arr.length;i++){
//         let leftVal = target - arr[i];
//         if(map.has(leftVal)){
//             return [map.get(leftVal),i];
//         }
//         map.set(arr[i],i);
//     }
//     return -1;
// }
// const arr = [2,7,3,4,5];
// const target = 6;
// console.log(twoSum(arr,target))


function palindrome(str){
    let splitedStr = str.split("").reverse().join("");
    return str === splitedStr

    // console.log(splitedStr);
}


function optimze(str){
    let left = 0;
    let right = str.length - 1;
    while(left < right){
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}


function removeDup(str){
    let set = new Set(str)
    return set
}

function removeDupOptimize(str){
    let seen = {};
    let res = [];
    for(let i = 0; i < str.length;i++){
        if(!seen[str[i]]){
            seen[str[i]] = true;
            res.push(str[i]);
        }
    }
    return res
}

function removeDupBrute(arr){
    let res = [];
    for(let i = 0; i < arr.length;i++){
        let seen = false;
        for(let j = 0; j < res.length;j++){
            if(arr[i] == res[j]){
                seen = true;
                break;
            }
        }
        if(!seen){

            res.push(arr[i])
        }
    }
    return res;
}


function reverseString(str){
    let splittedStr = str.split("");
    let left = 0;
    let right = splittedStr.length - 1;
    while(left < right){
        [splittedStr[left],splittedStr[right]] = [splittedStr[right],splittedStr[left]];
        left++;
        right--;
    }
    return splittedStr.join("");
}

function flattenArray(arr){
    let res = [];
    for(let item of arr){
        if(Array.isArray(item)){
            res.push(...flattenArray(item));
        }else {
            res.push(item)
        }
    }
    return res;
}

function flattenArray(arr){
    let result = [];
    for(let item of arr){
        if(Array.isArray(item)){
            result.push(...flattenArray(item))
        } else {
            result.push(item)
        }
    }
    return result
}

function maxSumArray(arr){
    let maxSum = -Infinity;
    let sum = 0;
    for(let i = 0; i < arr.length;i++){
        sum = arr[i] + sum;
        maxSum = Math.max(sum,maxSum);
        if(sum < 0){
            sum = 0;
        }
    }
    return maxSum;
}

function abc(arr){
    let sum = 0;
    let maxSum = -Infinity;
    for(let i = 0; i < arr.length;i++){
        sum = arr[i] + sum;
        maxSum = Math.max(sum,maxSum);
        if(sum < 0){
            sum = 0;
        }
    }
    return maxSum;
}


function debounc(func,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this,args)
        }, delay);
        
    }
}

console.log(
    maxSumArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
);

const str = [1, 2, [3, 4]]
// const str = "ashihs"
// console.log(flattenArray(str))