let sum = 0;
let operator = null;

function add(nextNum) {
    return sum + nextNum;
}

function subtract(nextNum) {
    return sum - nextNum;
}

function multiply(nextNum) {
    return sum * nextNum;
}

function divide(nextNum) {
    return sum / nextNum;
}

function operate(nextNum, operator) {
    switch(operator) {
        case 'add':
            sum = add(nextNum);
        case 'subtract':
            sum = subtract(nextNum);
        case 'multiply':
            sum = multiply(nextNum);
        case 'divide':
            sum = divide(nextNum);
    }
}
