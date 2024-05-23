const leapYears = function(year) {
 leap           = year % 4;
 nonLeapCentury = year % 100;
 leapCentury    = year % 400;
    if (leap == 0 && nonLeapCentury != 0 || leapCentury == 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
