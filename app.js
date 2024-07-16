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

// function progressiveSum(num) {
//     let sum = 0
//     for (let i = 0; i <= num; ++i) {
//         console.log(i)
//         sum = sum + i
//     }
//     return sum;
// }

// console.log(progressiveSum(5));

// Q 6 - Calculate the time
// function calcTime(seconds) {
//     let timerMinutes = Math.floor(seconds / 60)
//     //  rounds the number of minutes down to closest whole number
//     let timerSeconds = seconds % 60;
//     //  figurs ot the remainder
//     if (timerMinutes.toString().length === 1) {
//         timerMinutes = '0' + timerMinutes
//     }
//     //  converts number to a string, so we can add a '0'
//     //  if minutes are a single digit
//     return timerMinutes + ':' + timerSeconds;

// }

// console.log(calcTime(630));

// Q 7 - find the largest number

 function getMax(arr) {
    for (let i=0; i < arr.length; ++i) {
        console.log(arr[i]);

        if arr[i] 
    }
 }

 console.log(getMax([-100, -200, -300]));