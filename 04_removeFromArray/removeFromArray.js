const removeFromArray = function(anyArray, ...args) {
const filteredArray = anyArray.filter(item => !args.includes(item));
return filteredArray;
};
console.log(removeFromArray([1, 2, 3, 4, 5], 5));

// Do not edit below this line
module.exports = removeFromArray;
