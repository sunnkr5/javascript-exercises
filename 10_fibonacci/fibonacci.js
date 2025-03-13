const fibonacci = function(n) {
    let num = Number(n)
if(num === 1 || num === 2) {
    return 1;
} else if (num === 0) {
    return 0;
} else if (num < 0) {
    return "OOPS";
}
let a = 1;
let b = 1;
for (let index = 3; index <= num; index++) {
   let temp = a + b;
   a = b;
   b = temp;
    }
    return b;
};

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
