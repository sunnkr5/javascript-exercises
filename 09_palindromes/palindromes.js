const palindromes = function (input1) {
    
    let revInput = input1.split('').reverse().join('');
    console.log(revInput);
    
    if (input1 === revInput) {
        console.log(`${input1} is a palindrome`);
        return true;
    } else {
      console.log(`not a plindrome`);
      return false;
    }
    };
    palindromes('racecar');
    

// Do not edit below this line
module.exports = palindromes;
