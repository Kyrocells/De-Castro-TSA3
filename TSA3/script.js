var display = document.getElementById('display');

function clear() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function btnNum(number) {
    display.value += number;
}

function operator(operator) {
    display.value += operator;
}

function result() {
    let expression = display.value;
    let result = eval(expression);
    display.value = result;
}

// Add event listeners to the buttons
document.getElementById('clear').addEventListener('click', clear);
document.getElementById('backspace').addEventListener('click', backspace);

document.getElementById('divide').addEventListener('click', function(){ operator('/')});
document.getElementById('multiply').addEventListener('click', function(){ operator('*')});
document.getElementById('subtract').addEventListener('click', function(){ operator('-')});
document.getElementById('add').addEventListener('click', function(){ operator('+')});
document.getElementById('equal').addEventListener('click', result);

document.getElementById('zero').addEventListener('click',function(){ btnNum('0')});
document.getElementById('one').addEventListener('click', function(){ btnNum('1')});
document.getElementById('two').addEventListener('click', function(){ btnNum('2')});
document.getElementById('three').addEventListener('click', function(){ btnNum('3')});
document.getElementById('four').addEventListener('click', function(){ btnNum('4')});
document.getElementById('five').addEventListener('click', function(){ btnNum('5')});
document.getElementById('six').addEventListener('click', function(){ btnNum('6')});
document.getElementById('seven').addEventListener('click', function(){ btnNum('7')});
document.getElementById('eight').addEventListener('click', function(){ btnNum('8')});
document.getElementById('nine').addEventListener('click', function(){ btnNum('9')});
document.getElementById('decimal').addEventListener('click', function(){ btnNum('.')});
