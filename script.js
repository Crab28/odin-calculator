const CALCULATOR_WINDOW = document.getElementById('calculator-window');

let firstNum = '0';
let secondNum = null;
let operator = null;
let decimalUsed = false;

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

            addButtonListener(NEW_BUTTON);
        }

        CALC_KEYS.appendChild(NEW_ROW)
    }
}

function addButtonListener(button) {
    const OPERATORS = ['+', '-', 'x', '/'];
    const buttonText = button.textContent;

    button.addEventListener('click', () => {
        if (OPERATORS.includes(buttonText)) {
            operator = buttonText;

            if (secondNum !== null) {
                calculateSum();
            }
        }
        else if (buttonText === '=') {
            return;
        }
        else if (buttonText === '.') {
            return;
        }
        else {
            updateWindowText(buttonText);
        }
    })
}

function updateWindowText(windowText) {
    if (operator === null) {
        if (firstNum === '0') {
            firstNum = '';
        }

        firstNum += windowText;
        CALCULATOR_WINDOW.textContent = firstNum;
    }
}



function calculateSum() {

}

function add(nextNum) {
    return  Number(nextNum);
}

function subtract(nextNum) {
    return sum - Number(nextNum);
}

function multiply(nextNum) {
    return sum * Number(nextNum);
}

function divide(nextNum) {
    return sum / Number(nextNum);
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