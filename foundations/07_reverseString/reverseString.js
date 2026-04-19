const reverseString = function reverseString (str) {
    return str
        .split("")
        .reverse()
        .join("")
        
};

console.log(reverseString("hello there"))

// Do not edit below this line
module.exports = reverseString;
