const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const divideButton = document.getElementById("divideButton");

const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const multiplyButton = document.getElementById("multiplyButton");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const subtractButton = document.getElementById("subtractButton");

const clearButton = document.getElementById("clearButton");
const zero = document.getElementById("zero");
const equalButton = document.getElementById("equalButton");
const addButton = document.getElementById("addButton");

let number1;
let number2;
let answer;
let operatorButton;

let displayNumber = '';

function add(number1, number2) {
    return parseInt(number1) + parseInt(number2);
}

function subtract(number1, number2) {
    return parseInt(number1) - parseInt(number2);
} 

function multiply(number1, number2) {
    return parseInt(number1) * parseInt(number2);
}

function divide(number1, number2) {
    return parseInt(number1) / parseInt(number2);
}

function operate(number1, operator, number2) {
   return operator(number1, number2);
}

function populateTheDisplay(newButtonClicked) {
    if (newButtonClicked === '1' || newButtonClicked === '2' || newButtonClicked === '3' || newButtonClicked === '4' || newButtonClicked === '5' || newButtonClicked === '6' || newButtonClicked ===  '7' || newButtonClicked === '8' || newButtonClicked === '9' || newButtonClicked === '0') {
        displayNumber = displayNumber + newButtonClicked;
        document.getElementById("display").innerHTML= displayNumber;
    } else if (newButtonClicked === 'clear') {
        displayNumber = '';
        number1 = '';
        number2 = '';
        operatorButton = '';
        document.getElementById("display").innerHTML= displayNumber;
    } else if (newButtonClicked === 'addButton' || newButtonClicked === 'subtractButton' || newButtonClicked === 'multiplyButton' || newButtonClicked === 'divideButton') {
        number1 = displayNumber;
        operatorButton = newButtonClicked;
        displayNumber = '';
        // console.log(number1);
        // console.log(operatorButton);
        // console.log(displayNumber);
        document.getElementById("display").innerHTML= displayNumber;
    } else if (newButtonClicked === 'equalButton') {
        number2 = displayNumber;
        // console.log(add(number1, number2));
        if (operatorButton === 'addButton') {
            answer = add(number1, number2);
            // console.log(answer);
            document.getElementById("display").innerHTML = answer;
        } else if (operatorButton === 'subtractButton') {
            answer = subtract(number1, number2);
            document.getElementById("display").innerHTML = answer;
        } else if (operatorButton === 'multiplyButton') {
            answer = multiply(number1, number2);
            document.getElementById("display").innerHTML = answer;
        } else if (operatorButton === 'divideButton') {
            answer = divide(number1, number2);
            document.getElementById("display").innerHTML = answer;
        }
    }
    
}

seven.addEventListener('click', function() { populateTheDisplay('7') });
eight.addEventListener('click', function() { populateTheDisplay('8') });
nine.addEventListener('click', function() { populateTheDisplay('9') });
divideButton.addEventListener('click', function() { populateTheDisplay('divideButton') });


four.addEventListener('click', function() { populateTheDisplay('4') });
five.addEventListener('click', function() { populateTheDisplay('5') });
six.addEventListener('click', function() { populateTheDisplay('6') });
multiplyButton.addEventListener('click', function() { populateTheDisplay('multiplyButton') });


one.addEventListener('click', function() { populateTheDisplay('1') });
two.addEventListener('click', function() { populateTheDisplay('2') });
three.addEventListener('click', function() { populateTheDisplay('3') });
subtractButton.addEventListener('click', function() { populateTheDisplay('subtractButton') });

clearButton.addEventListener('click', function() { populateTheDisplay('clear') });
zero.addEventListener('click', function() { populateTheDisplay('0') });
equalButton.addEventListener('click', function() { populateTheDisplay('equalButton') });
addButton.addEventListener('click', function() { populateTheDisplay('addButton') });


// console.log(operate(5, add, 15));

// console.log(`add: ${add(number1, number2)}
// subtract: ${subtract(number1, number2)}
// multiply: ${multiply(number1, number2)}
// divide: ${divide(number1, number2)}`)