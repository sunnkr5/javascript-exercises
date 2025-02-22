const leapYears = function(anyYear) {
    if (anyYear % 4 === 0 && anyYear % 100 !== 0 || anyYear % 400 === 0) {
        return true;
        } return false;
    
};

console.log(leapYears(3001));

// Do not edit below this line
module.exports = leapYears;
