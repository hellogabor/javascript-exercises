const removeFromArray = function(array, ...elementsToRemove) {
    let resultsArray = [];
        for (let i = 0; i < array.length; i++) {
        if (!elementsToRemove.includes(array[i])) {
            resultsArray.push(array[i]);
        }
    }
    return resultsArray;
};

/* function removeFromArray(array, ...elementsToRemove)
    Initialize a new empty array, resultArray
    For each element in array
        If element is not in elementsToRemove
            Add element to resultArray
    Return resultArray
 */

// Do not edit below this line
module.exports = removeFromArray;
