function repeatString(string, num) {
let result = "";
    for (let index = 0; index < num; index++) {
    result += string;
    }
return result;
}

console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
