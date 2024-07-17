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

// function getMax(arr) {
//     let max = arr[0]; // sets max at the 1st # in array
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] > max) { 
//             max = arr[i]; 
//         } // if next # is > max, reset max to next #
//     }     // if not, keep max at current #  
//     return max; // once array has been gone through, return max
// }

//  console.log(getMax([5, 47, -35]));

// Q 8 - Reverse a string

// function reverseString(str) {
//  3 ways to do this
//  #1 - incrementing loop
//     let reversedString = '';
//     for (let i=0; i < str.length; ++i) {
//         reversedString = str[i] + reversedString; // Order critical - str[i] must go first
//     }
//     return reversedString;
// }

// #2 - decremental loop
//     let reversedString = '';
//     for (let i = str.length - 1; i >= 0; --i) {
//         // reversedString = reversedString + str[i];
//         reversedString += str[i]; // cleaner
//     }
//     return reversedString;
// }

// #3 reversed array

    // const strArr = str.split('')
    // strArr.reverse();
    // return strArr.join('');

//     return str.split('').reverse().join('');  // Streamlined
// }

// console.log(reverseString('This is cool'));

// Q 9 - Turn every element in an array into 0

// 3 solutions - #1 for loop
// function convertToZeros(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; ++i) {
//         newArr[i] = 0
//     }
//     return newArr;
    
// }

// console.log(convertToZeros([1, 2, 3, 4, 5, 6]));

// solution # 2 - array 'fill'

// function convertToZeros(arr) {
//     // creates new array and fills w/ zeros
//     return new Array(arr.length).fill(0)
// }

// console.log(convertToZeros([1, 2, 3, 4, 5, 6]));

// solution # 3 array "map"

// function convertToZeros(arr){
    
//     return arr.map(elem => elem * 0)
//     // or
//     return arr.map(elem => {
//         return 'dog'
//     });

//     // .map changes every element in the array
//     // into whatever is on the right side of
//     // operation

//     // if using curly brackets, something must be returned

// }


// console.log(convertToZeros([1, 2, 3, 4, 5, 6]));

// Q 10 Filter out all the apples

// for loop solution
// function removeApples(arr) {
//     let noApples = [];
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] !== 'Apple') {
//            noApples.push(arr[i]);
//         }
//     }
//     return noApples;
// }

// console.log(removeApples(['Peach', 'Tomato', 'Banana']));

// array filter solution

// function removeApples(arr) {
//     // let noApples = arr.filter((element) => {
//     //     if (element !== 'Apple') {
//     //         return true;
//     //     }   
//     // })
//     // return noApples; 

//     return arr.filter(elem => elem !== 'Apple') // Streamlined

// }

// console.log(removeApples(['Peach', 'Apple', 'Banana']));

// Q 11 - Filter out all the falsy values

// function filterOutFalsy(arr) {
//     return arr.filter(elem => !!elem === true)
//     // !! converts to the boolean equivalent
// }  

// console.log(filterOutFalsy([null, "0", 'Tomato', [], "", 'Banana']));

// function filterOutFalsy(arr) {
//     let truthy = [];
//      for (let i = 0; i < arr.length; ++i) {
//          if (!!arr[i] === true) {
//              truthy.push(arr[i])
//          } 
//      }
//      return truthy;

// }

// console.log(filterOutFalsy([null, "0", 'Tomato', [], "", 'Banana']));

// Q 12 Truthy to true, Falsy to false


// coverting means using the map function
function convertToBoolean(arr) {
   return arr.map(elem => !!elem);
   
}

console.log(convertToBoolean([500, 0, "Alan", "", []]))