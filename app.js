function filterOutFalsy (value1, value2) {
    // if (!value1) {
    //     return value1;
    // }
    // else {
    //     return value2;
    // }
   
    return (!value1) ? value1 : value2;
}

console.log(filterOutFalsy(null,5))