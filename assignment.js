
function getresult(value) {
    var result = document.getElementById('result');
    if (result.textContent === '0') {
        result.textContent = value;
    } else {
        result.textContent += value;
    }
}

function calculateResult() {
    var result = document.getElementById('result');
    var expression = result.textContent.trim();
    var operator = findOperator(expression);

    if (!operator) {
        result.textContent = 'error';
        return;
    }

    var numbers = expression.split(operator);
    var num1 = parseFloat(numbers[0]);
    var num2 = parseFloat(numbers[1]);

    switch (operator) {
        case '+':
            result.textContent = num1 + num2;
            break;
        case '-':
            result.textContent = num1 - num2;
            break;
        case '*':
            result.textContent = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result.textContent = 'Error: Division by zero';
            } else {
                result.textContent = num1 / num2;
            }
            break;
        default:
            result.textContent = 'Error: Invalid operator';
            break;
    }
}

function clearResult() {
    var result = document.getElementById('result');
    result.textContent = '0';
}
function deleteLastCharacter() {
    var result = document.getElementById('result');
    result.textContent = result.textContent.slice(0, -1) || '0';
}

function findOperator(expression) {
    if (expression.includes('+')) {
        return '+';
    } else if (expression.includes('-')) {
        return '-';
    } else if (expression.includes('*')) {
        return '*';
    } else if (expression.includes('/')) {
        return '/';
    }
    return null;
}
