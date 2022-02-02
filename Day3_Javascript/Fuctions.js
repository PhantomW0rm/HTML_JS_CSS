// Exercise 1 

// function subtract(a, b) {
//    return a - b;
//}
// subtract(10, 5);

// console.log(subtract);

let variablea = Subtract(10, 3);
// Subtract is called with two parameters, the return value will end up in variablea

function Subtract(a, b) {
  return a - b;
// Subtract returns the sum of a minus b
}
console.log(variablea);
//Will give an output of subtraction.

//Exercise 2

const welcome = function(name,age,gender)
{
    return console.log(`My name is ${name}, i am ${gender} and I am ${age} years old`);
    }
   
    welcome("Andrew Irvine",40,"Male");

    //Exercise 3

powerup = (n1,n2) => Math.pow(n1,n2);

console.log(powerup(3,7));