const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const operators = ['+', '-', '*', '/', '%'];

const inputRow = $('#input-row');
const prevText = $('#prev-input');

const keyBindings = {
    '1': $('#number-1'),
    '2': $('#number-2'),
    '3': $('#number-3'),
    '4': $('#number-4'),
    '5': $('#number-5'),
    '6': $('#number-6'),
    '7': $('#number-7'),
    '8': $('#number-8'),
    '9': $('#number-9'),
    '0': $('#number-0'),
    '+': $('#operator-plus'),
    '-': $('#operator-minus'),
    '/': $('#operator-divide'),
    '*': $('#operator-multiply'),
    '%': $('#operator-modulo'),
    '.': $('#operator-dot'),
    ',': $('#operator-dot'),
    'p': $('#operator-sign'),
    'P': $('#operator-sign'),
    'c': $('#operator-C'),
    'C': $('#operator-C'),
    '=': $('#operator-calculate'),
    'a': $('#operator-MA'),
    'A': $('#operator-MA'),
    'm': $('#operator-MR'),
    'M': $('#operator-MR'),
    'e': $('#operator-MC'),
    'E': $('#operator-MC'),
    'Delete': $('#operator-CE'),
    'Enter': $('#operator-calculate')
};
