const CALCULATOR_WINDOW = document.getElementById('calculator-window');

let firstNum = '0';
let secondNum = null;
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
            if (secondNum !== null) {
                calculateSum();
            }
            
            operator = buttonText;
            firstNum = CALCULATOR_WINDOW.textContent;
        }
        else if (buttonText === '=') {
            if (secondNum !== null) {
                calculateSum();
            }
        }
        else {
            updateWindowText(buttonText);
        }
    })
}

function updateWindowText(windowText) {
    if (operator === null) {
        if (firstNum === '0' && !windowText.includes('.')) {
            firstNum = '';
        }

        if (windowText.includes('.')) {
            if (!firstNum.includes('.')) {
                firstNum += windowText;
            }
        } else {
            firstNum += windowText;
        }
        CALCULATOR_WINDOW.textContent = setFixedDecimal(firstNum);
    }
    else {
        if (secondNum === null || secondNum === '0') {
            if (windowText.includes('.')) {
                secondNum = '0';
            } else {
                secondNum = '';
            }
        }

        if (windowText.includes('.')) {
            if (!secondNum.includes('.')) {
                secondNum += windowText;
            }
        } else {
            secondNum += windowText;
        }
        CALCULATOR_WINDOW.textContent = setFixedDecimal(secondNum);
    }
}

function setFixedDecimal(windowText) {
    return windowText.slice(0, 9);
}

function calculateSum() {
    let newSum;

    switch (operator) {
        case '+':
            newSum = add();
            break;
        case '-':
            newSum = subtract();
            break;
        case 'x':
            newSum = multiply();
            break;
        case '/':
            newSum = divide();
            break;
    }

    firstNum = '0';
    secondNum = null;
    operator = null;

    CALCULATOR_WINDOW.textContent = newSum;
}

function add() {
    return Number(firstNum) + Number(secondNum)
}

function subtract() {
    return Number(firstNum) - Number(secondNum)
}

function multiply() {
    return Number(firstNum) * Number(secondNum)
}

function divide() {
    return Number(firstNum) / Number(secondNum)
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