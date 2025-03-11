const add = function(a, b) {
	return a + b;
};
console.log(add(5, 7));



const subtract = function(a, b) {
	return a - b;

};

console.log(subtract(5, 7));

const sum = function(arr) {
  // Check if arr is an empty array
  if (arr.length === 0) {
    return 0;
  };

  // Use reduce to sum the array elements
  return arr.reduce((total, num) => total + num, 0);
};

console.log(sum([5, 7]));  // Output: 12



const multiply = function(arr) {
    if (arr.length === 0) {
    return 0;
} else if (arr.length === 1) {
    return 0;
};
    let result = 1;
    for (let index = 0; index < arr.length; index++) {
    result *= arr[index];
    };
    return result;
};
    console.log(multiply([5, 10]));

const power = function(a, b) {
	return Math.pow(a, b);
};

console.log(power(4, 3));

const factorial = function(numb) {
  let result = 1;
  for (let index = 1; index <= numb; index++) {
    result *= index;
     }
     return result;

};

console.log(factorial(4));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
