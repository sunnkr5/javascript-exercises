const reverseString = function(string) {
    let rvrsArray = string.split("").reverse();
    let joinArray = rvrsArray.join("");
    return joinArray;
}
console.log(reverseString("Sunny"));

// Do not edit below this line
module.exports = reverseString;
