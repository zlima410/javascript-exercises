const sumAll = function(num1, num2) {
    let finalSum = 0;

    for (let i = num1; i <= num2; i++) {
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
