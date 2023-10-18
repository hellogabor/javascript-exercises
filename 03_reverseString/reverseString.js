const reverseString = function(string) {
    let arrayString = string.split('');
    let i = arrayString.length - 1;
    let reversedString = '';
   
    while (i >= 0) {
        reversedString += (arrayString[i]);
        i--;
    }
    return reversedString;
};


/* return console.log(arrayLength);
console.log(reverseString(string)) */

// Do not edit below this line
module.exports = reverseString;
