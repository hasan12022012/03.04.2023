"use strict";

let arrNum = [0, 1, 2, 3];
let n = 6;

function arrayLastElementThree(arr, n) {

    for (let i = 0; i < n; i++) {
        arr[arr.length - 1] = arr[arr.length - 2] + arr[arr.length - 3] + arr[arr.length - 4];
        arrNum.push(arr.length - 1)
        
    }
    return arrNum;
};

console.log(arrayLastElementThree(arrNum,n));

