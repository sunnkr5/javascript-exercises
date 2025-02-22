const sumAll = function(num1, num2) {
  if (
      typeof num1 !== "number" || 
      typeof num2 !== "number" || 
      num1 < 0 || 
      num2 < 0 || 
      !Number.isInteger(num1) || 
      !Number.isInteger(num2)
  ) {
      return "ERROR";
  }

  let result = 0;
  for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
      result += i;
  }

  return result;
}
  
  console.log(sumAll(1, 10));

// Do not edit below this line
module.exports = sumAll;
