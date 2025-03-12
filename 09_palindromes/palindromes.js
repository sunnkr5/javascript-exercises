const palindromes = function (str) {
  let rmvSpace = str.replace(/[^\w]|_/g, '');
  let lower = rmvSpace.toLowerCase();
  let revInput = lower.split('').reverse().join('');
  console.log(revInput);
  
  if (lower === revInput) {
      console.log(`${str} is a palindrome`);
      return true;
  } else {
    console.log(`not a plindrome`);
    return false;
  }
  };
  palindromes('Lid off a daffodil!');
    

// Do not edit below this line
module.exports = palindromes;
