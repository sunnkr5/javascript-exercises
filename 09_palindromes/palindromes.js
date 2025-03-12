const palindromes = function () {
    let input1 = "madam";
    let revInput = input1.split('').reverse().join('');
    console.log(revInput);
    
    if (input1 === revInput) {
        console.log(`${input1} is a palindrome`);
    } else {
      console.log(`not a plindrome`);
    }
    };
    palindromes();
    

// Do not edit below this line
module.exports = palindromes;
