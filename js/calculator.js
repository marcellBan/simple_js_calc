var inputRow = $('#input-row');
var prevText = $('#prev-input');

var dotPressed = false;
var showingResult = false;
var operator;
var firstValue;
var secondValue;

function calculator() {
    $('button').click(buttonHandler);
}

function buttonHandler() {
    var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    var operators = ['+', '-', '*', '/', '%'];
    var oldInputValue = inputRow.val();
    var oldPrevText = prevText.text();
    var buttonText = $(this).text();
    if (numbers.indexOf(buttonText) >= 0) {
        if (showingResult) {
            oldInputValue = '';
            showingResult = false;
        }
        inputRow.val(oldInputValue + buttonText);
    } else if (operators.indexOf(buttonText) >= 0) {
        showingResult = false;
        operator = buttonText;
        firstValue = Number(oldInputValue);
        dotPressed = false;
        inputRow.val('');
        prevText.text(firstValue + ' ' + operator);
    } else if (buttonText === '.' && !dotPressed) {
        if (showingResult) {
            oldInputValue = '';
            showingResult = false;
        }
        dotPressed = true;
        inputRow.val(oldInputValue + '.');
    } else if (buttonText === '+/-') {
        if (oldInputValue.startsWith('-')) {
            inputRow.val(oldInputValue.replace('-', ''));
        } else {
            inputRow.val('-' + oldInputValue);
        }
    } else if (buttonText === '=') {
        if (!showingResult) {
            secondValue = Number(oldInputValue);
        }
        var result = calculateResult();
        inputRow.val(result);
        prevText.text(firstValue + ' ' + operator + ' ' + secondValue + ' =');
        firstValue = result;
        showingResult = true;
        dotPressed = false;
    } else if (buttonText === 'CE') {
        showingResult = false;
        dotPressed = false;
        firstValue = undefined;
        secondValue = undefined;
        operator = undefined;
        inputRow.val('');
        prevText.text('');
    } else if (buttonText === 'C') {
        showingResult = false;
        dotPressed = false;
        inputRow.val('');
    } else if (buttonText === 'MR') {
        if (localStorage.calculatorMemory) {
            inputRow.val(localStorage.calculatorMemory);
        }
    } else if (buttonText === 'MC') {
        if (localStorage.calculatorMemory) {
            localStorage.removeItem('calculatorMemory');
        }
    } else if (buttonText === 'M+') {
        if (localStorage.calculatorMemory) {
            localStorage.calculatorMemory = Number(localStorage.calculatorMemory) + Number(oldInputValue);
        } else {
            localStorage.calculatorMemory = oldInputValue;
        }
    }
}

function calculateResult() {
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

$(document).ready(calculator);
