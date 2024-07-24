const leapYears = function(year) {
    const isDivisible4 =  year % 4 === 0;
    const isDivisible100 = year % 100 === 0;
    const isDivisuble400 = year % 400 === 0;

    if (isDivisible4 && (!isDivisible100 || isDivisuble400)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
