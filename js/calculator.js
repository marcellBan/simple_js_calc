var dotPressed = false;
var showingResult = false;
var operator;
var firstValue;
var secondValue;

function calculator() {
    $('button').click(buttonPressHandler);
    $('body').keypress(keyHandler);
}

function buttonPressHandler() {
    var oldInputValue = inputRow.val();
    var buttonText = $(this).text();
    if (numbers.indexOf(buttonText) >= 0) {
        appendNumber(oldInputValue, buttonText);
    } else if (operators.indexOf(buttonText) >= 0) {
        setOperator(oldInputValue, buttonText);
    } else {
        switch (buttonText) {
            case '.':
                appendDecimalPoint(oldInputValue);
                break;
            case '+/-':
                changeSign(oldInputValue);
                break;
            case '=':
                calculateResult(oldInputValue);
                break;
            case 'CE':
                clearEverything();
                break;
            case 'C':
                clearInputRow();
                break;
            case 'MR':
                readMemory();
                break;
            case 'MC':
                clearMemory();
                break;
            case 'M+':
                addToMemory(oldInputValue);
                break;
            default:
                alert('Well this shouldn\'t happen.');
                break;
        }
    }
}

function appendNumber(oldInputValue, buttonText) {
    if (showingResult) {
        oldInputValue = '';
        showingResult = false;
    }
    inputRow.val(oldInputValue + buttonText);
}

function setOperator(oldInputValue, buttonText) {
    showingResult = false;
    operator = buttonText;
    firstValue = Number(oldInputValue);
    dotPressed = false;
    inputRow.val('');
    prevText.text(firstValue + ' ' + operator);
}

function appendDecimalPoint(oldInputValue) {
    if (!dotPressed) {
        if (showingResult) {
            oldInputValue = '';
            showingResult = false;
        }
        dotPressed = true;
        inputRow.val(oldInputValue + '.');
    }
}

function changeSign(oldInputValue) {
    if (oldInputValue.startsWith('-')) {
        inputRow.val(oldInputValue.replace('-', ''));
    } else {
        inputRow.val('-' + oldInputValue);
    }
}

function calculateResult(oldInputValue) {
    if (!showingResult) {
        secondValue = Number(oldInputValue);
    }
    var result = executeOperation();
    inputRow.val(result);
    prevText.text(firstValue + ' ' + operator + ' ' + secondValue + ' =');
    firstValue = result;
    showingResult = true;
    dotPressed = false;
}

function executeOperation() {
    var result;
    switch (operator) {
        case '+':
            result = firstValue + secondValue;
            break;
        case '-':
            result = firstValue - secondValue;
            break;
        case '*':
            result = firstValue * secondValue;
            break;
        case '/':
            result = firstValue / secondValue;
            break;
        case '%':
            result = firstValue % secondValue;
            break;
    }
    return result;
}

function clearEverything() {
    showingResult = false;
    dotPressed = false;
    firstValue = undefined;
    secondValue = undefined;
    operator = undefined;
    inputRow.val('');
    prevText.text('');
}

function clearInputRow() {
    showingResult = false;
    dotPressed = false;
    inputRow.val('');
}

function readMemory() {
    if (localStorage.calculatorMemory) {
        inputRow.val(localStorage.calculatorMemory);
    }
}

function clearMemory() {
    if (localStorage.calculatorMemory) {
        localStorage.removeItem('calculatorMemory');
    }
}

function addToMemory(oldInputValue) {
    if (localStorage.calculatorMemory) {
        localStorage.calculatorMemory = Number(localStorage.calculatorMemory) + Number(oldInputValue);
    } else {
        localStorage.calculatorMemory = oldInputValue;
    }
}

function keyHandler(event) {
    if (keyBindings[event.key]) {
        keyBindings[event.key].click();
    }
    // prevent button click when pressing Enter
    event.preventDefault();
}

$(document).ready(calculator);
