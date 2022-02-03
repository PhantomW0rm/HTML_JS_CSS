`use strict`
import * as DOM from './calcDOM.js';

// Create elements
DOM.btnAdd.onclick = () => add(DOM.inputOne.value, DOM.inputTwo.value);
DOM.btnSub.onclick = () => subtract(DOM.inputOne.value, DOM.inputTwo.value);
DOM.btnDiv.onclick = () => divide(DOM.inputOne.value, DOM.inputTwo.value);
DOM.btnMult.onclick = () => times(DOM.inputOne.value, DOM.inputTwo.value);
DOM.btnClear.onclick = () => Clear();
DOM.btnEql.onclick = () => equals();
let answer = 0;

let calculation = {

}

// Declare my functions
// Addition
function add (num1, num2)
{
    let operation = "+";
    let answer = 0;
    answer = +num1 + +num2;
    calculation = {
        num1 : num1,
        num2 : num2,
        operation : operation,
        answer : answer
        };
}

// Subtract
function subtract (num1, num2)
{
    let operation = "-";
    let answer = 0;
    answer = +num1 - +num2;
    displist(num1, num2, operation, answer);
}

//divide
function divide (num1, num2)
{
    let operation = "/";
    let answer = 0;
    answer = +num1 / +num2;
    displist(num1, num2, operation, answer);
}
// Multiplication
function times(num1, num2)
{
    let operation = "*";
    let answer = 0;
    answer = +num1 * +num2;
    displist(num1, num2, operation, answer);
}

// Adds to my output list
function displist(num1, num2, operation, answer)
{
    let addlist = document.createElement(`li`);
    addlist.innerHTML = num1 + "" + operation + "" + num2 + "=" + answer;
    DOM.output.appendChild(addlist);
}

// Clear
function Clear()
{
    DOM.inputOne.value = "";
    DOM.inputTwo.value = "";
    document.getElementById("list_output").innerHTML = "";
}

// Equals

function equals()
{
    displist(calculation.num1, calculation.num2, calculation.operation, calculation.answer);
}