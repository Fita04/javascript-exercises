const sumAll = function(point1, point2) {
    let range = [point1, point2];
    const minValue = Math.min(...range);
    const maxValue = Math.max(...range);
    let i = minValue
    let sumOfNumbers = []

    if (!Number.isInteger(point1) || !Number.isInteger(point2) || point1 < 0 || point2 < 0) {
        return "ERROR";
        
    } else { 
        while (i >= minValue && i <= maxValue) {
        sumOfNumbers.push(i)
        i++;
        }
        
    }    
    return sumOfNumbers.reduce((total, currentItem) => {return total + currentItem}, 0);
}

// Do not edit below this line
module.exports = sumAll;
