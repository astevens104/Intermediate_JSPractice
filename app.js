function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addTwoNumbers(3, 4))

function convertHoursIntoSeconds(num) {
    return num * 3600;
}

console.log(convertHoursIntoSeconds(2));

function calcRectanglePerim(length, width) {
    return 2 * (length + width);
}

console.log(calcRectanglePerim(4, 3))

function calcTriangleArea(base, height) {
    return (base * height) / 2;
}

console.log(calcTriangleArea(3, 6))

function extendString(word) {
    return "String" + word;
}

console.log(extendString(" longer"));

function sumGreaterThan100(num1, num2) {
    return num1 + num2 > 100;
}

console.log(sumGreaterThan100(55, 5))

function lessThanOrEqualToZero (num) {
    return num <= 0;
}

console.log(lessThanOrEqualToZero(0));

function oppositeBoolean(bool) {
    return !bool;
}

console.log(oppositeBoolean(false));

function isNotZero(value) {
    return value !== 0;
}

console.log(isNotZero("great"));

function calcRemainder(num1, num2) {
    return num1 % num2;
}

console.log(calcRemainder(8, 5));

function isNumberOdd(num) {
    return num % 2 !== 0;
}

console.log(isNumberOdd(3));

function booleanInteger(num) {
   return num % 2 === 0 ? 1 : -1;
}

console.log(booleanInteger(17));

function checkUserLoggedInAndSubscribed(loggedIn, subscribed) {
    return loggedIn === 'logged in' && subscribed === 'subscribed' ? true : false;
}

console.log(checkUserLoggedInAndSubscribed('logged out', 'unsubscribed'));

function checkUserLoggedInOrSubscribed(loggedIn, subscribed) {
    return loggedIn === 'logged in' || subscribed === 'subscribed' ? true : false;
}

console.log(checkUserLoggedInOrSubscribed('logged out', 'subscribed'));

function filterOutFalsy(value1, value2) {
    return (!value1) ? value1 : value2;
}


function arrayLength(arr) {
    return arr.length;
}

console.log(arrayLength([1, 2, 3, 4, 5]))

function lastElement(arr) {
    for (let i = 0; i < arr.length; ++i)
        return arr[arr.length - 1];
}

console.log(lastElement([2, 4, 6, 8, 1]))

function sumArray(arr){
    let sum = 0
    for (let i = 0; i < arr.length; ++i)
        sum = sum + arr[i];
        return sum;
}

console.log(sumArray([1, 2, 3, 6]))

function progressiveSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; ++i)
        sum = sum + i;
    return sum;
}

console.log(progressiveSum(4))

function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60);
    
    let timerSeconds = seconds % 60;
    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes;
    }
    if (timerSeconds.toString().length === 1) {
         timerSeconds = '0' + timerSeconds;
     }
    return (timerMinutes + ':' + timerSeconds);
}

console.log(calcTime(300));

function reverseString(str) {
    let reversedString = ''
    for (let i =0; i < str.length; ++i) {
       reversedString = str[i] + reversedString;
    }
    return reversedString;
}

console.log(reverseString('Alan'));

function reverseString(str) {
    let reversedString = ''
    for (let i = str.length - 1; i >= 0; --i) {
       reversedString = reversedString + str[i];
    }
    return reversedString;
}

console.log(reverseString('George'))

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('Stevens'))

function convertToZeros(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = 0
    }
    return arr;
}

console.log(convertToZeros([1, 2, 3, 4, 5, 6]));

function convertToZero(arr) {
    return arr.length.fill(0);
}

console.log(convertToZeros([1, 2, 3, 4, 5, 6]))

function convertToZeros(arr) {
    return arr.map(elem => 0);
}

console.log(convertToZeros([1, 2, 3, 4, 5, 6]))

