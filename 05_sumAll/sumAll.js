const sumAll = function (start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
      let sum = result.reduce((a, b) => a + b);
    return sum;
  }
  
  console.log(sumAll(1, 10));

// Do not edit below this line
module.exports = sumAll;
