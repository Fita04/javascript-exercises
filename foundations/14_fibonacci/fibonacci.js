const fibonacci = function(numCounter) {
    numCounter = parseInt(numCounter);

    if (numCounter == 0 ) { return 0;
        
    } else if (numCounter < 0) {return "OOPS";
        
    }

    let fibSeries = [1];

    while (fibSeries.length < numCounter) {
        currentValue = fibSeries
                                .slice(-2)
                                .reduce((a, b) => a + b, 0);
        fibSeries.push(currentValue);
    }
    
    console.log(fibSeries);
    console.log(fibSeries[numCounter - 1]);
    return fibSeries[numCounter - 1];
    
};


// Do not edit below this line
module.exports = fibonacci;
