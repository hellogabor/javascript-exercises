const sumAll = function(a, b) {
    if (a > b) {
        let c = a;
        a = b;
        b = c;
    }

    if (a < 0 || b < 0) {
        return 'ERROR';
    }

    if ((typeof a !== 'number') || (typeof b !== 'number')) {
        return 'ERROR';
    }

    let allNumbers = [];
    let i = a;
    while (i <= b) {
        allNumbers.push(i);
        i++;
    }

    let sum = 0;
        allNumbers.forEach((number) => {
        sum += number;
        });
    return sum;
};

/*     const sum = allNumbers.reduce((accumulator, currentValue) => 
        accumulator + currentValue, 0);
    return sum; */


// Do not edit below this line
module.exports = sumAll;
