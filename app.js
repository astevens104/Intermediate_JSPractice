// Q 1 - filter out a falsy value

// function filterOutFalsy (value1, value2) {
    // if (!value1) {
    //     return value1;
    // }
    // else {
    //     return value2;
    // }
   
//     return (!value1) ? value1 : value2;  // streamlined
// }

// console.log(filterOutFalsy(null,5))

// Q 2 - return the legnth of an array

// function arrLength(length) {

//     return (arr.length);
// }
// let arr = []
// console.log(arrLength(length))

// cleaner method
// function arrLength(arr) {
//     return arr.length;
// }

// console.log(arrLength([1, 2, 3, 4]))  

// Q 3 - get the last element in an array

// function lastElem(arr) {
//     return arr[arr.length - 1]
// }

// console.log(lastElem([null, 5, false]))

// q 4 Find the sum of an array

// solution from stackOverflow:
// const sum = [0, -5, -10].reduce((partialSum, a) => partialSum + a, 0);

// console.log(sum);

// using a for loop:

// function arrSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; ++i) {
//         // this is how you loop thru every element in an array
//         // console.log(arr[i]);
//         sum = sum + arr[i];
//     }
    
//     return sum;
// }

// console.log(arrSum([1, 2, 3, 4, 5, 6]));

// Q 5 - Add up the numbers from a single number

function progressiveSum(num) {
    let sum = 0
    for (let i = 0; i < num + 1; ++i) {
        console.log(i)
        sum = sum + i
    }
    return sum;
}

console.log(progressiveSum(5));