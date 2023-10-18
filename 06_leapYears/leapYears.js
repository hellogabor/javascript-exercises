const leapYears = function(yearToCheck) {
    if ((yearToCheck % 4 == 0) && ((yearToCheck % 100 !== 0) || (yearToCheck % 400 == 0))) {
        return true;
    } else {
        return false;
    }
};

/* FUNCTION leapYear
IF leapYear % 4 = 0 AND ( leapYear % 100 = NOT 0 OR leapYear % 400 = 0)
then return TRUE
else return FALSE */

// Do not edit below this line
module.exports = leapYears;
