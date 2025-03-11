const add = function(a, b) {
	return a + b;
};
console.log(add(5, 7));



const subtract = function(a, b) {
	return a - b;

};

console.log(subtract(5, 7));

const sum = function(a, b) {
	return a + b;

};

console.log(sum(5, 7));

const multiply = function(a, b) {
return a * b;
};

console.log(multiply(5, 2));

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
