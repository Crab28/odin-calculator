let sum = 0;
let operator = null;

function createCalculatorKeys() {
    const CALC_KEYS = document.getElementById('calculator-keys');
    const ROWS = 4;
    let keys = [
        ['1', '2', '3', '/'], 
        ['4', '5', '6', 'x'],
        ['7', '8', '9', '-'],
        ['.', '0', '=', '+']
    ];

    for (let i = 0; i < ROWS; i++) {
        const NEW_ROW = document.createElement('row');
        NEW_ROW.classList.add('keys-row');
        
        for (let n = 0; n < keys[i].length; n++) {
            const NEW_BUTTON = document.createElement('button');
            NEW_BUTTON.classList.add('btn');
            NEW_BUTTON.textContent = keys[i][n];
            NEW_ROW.appendChild(NEW_BUTTON);
        }

        CALC_KEYS.appendChild(NEW_ROW)
    }
}

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

createCalculatorKeys();