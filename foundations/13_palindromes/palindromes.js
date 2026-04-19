const palindromes = function (str) {
    let string = str
                    .split(/[^a-zA-Z0-9]+/)
                    .join("")
                    .toLowerCase();

    console.log(string);

    let reversedString = str
                        .split(/[^a-zA-Z0-9]+/)
                        .join("")
                        .split("")
                        .reverse()
                        .join("")
                        .toLowerCase();

    console.log(reversedString);

    if (reversedString === string) { return true;
        
    } else { return false;
        
    }
};

// Do not edit below this line
module.exports = palindromes;
