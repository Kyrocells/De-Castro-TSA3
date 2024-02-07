var display = document.getElementById('display');
var buttons = document.querySelectorAll('.button');
let currentInput = '';

function handleClick(button) {
    button.addEventListener('click', function() {
        let buttonText = button.innerText;

        if (buttonText === 'C') {
            currentInput = '';
        }

        else if (buttonText === '<') {
            currentInput = currentInput.slice(0, -1);
        }

        else if (buttonText === '=') {
            currentInput = evaluateExpression(currentInput);
        }

        else {
            currentInput += buttonText;
        }

        display.value = currentInput;
    });
}

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    handleClick(button);
}

document.getElementById('clear').addEventListener('click', function() {
    currentInput = '';
});

document.getElementById('backspace').addEventListener('click', function() {
    currentInput = currentInput.slice(0, -1);
});

function evaluateExpression(expression) {
    let operators = /[+\-*\/]/;
    let parts = expression.split(operators);
    let operands = parts.map(parseFloat);
    let operator = expression.match(operators)[0];

    switch (operator) {
        case '+':
            return operands[0] + operands[1];
        case '-':
            return operands[0] - operands[1];
        case '*':
            return operands[0] * operands[1];
        case '/':
            if (operands[1] === 0) 
            return 'Error';
            return operands[0] / operands[1];
        default:
            return expression;
    }
}
