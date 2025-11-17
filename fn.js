/* Two ways of function creation:
1. function declaration
2. function expression 
*/

// function declaration
function hello() {
  console.log("hello");
}
hello();

// function expression
var hello = function () {
  console.log("hello");
};
hello();

function hello1(value) {
  console.log("my name is " + value);
}
hello1("prabha");

// when having a return statement call the function and assign it to a variable and print
function hello2(value) {
  return "my name is " + value;
}
let msg = hello2("david");
console.log(msg);

// sum of two numbers using return statement
function two(num1, num2) {
  return "sum of two numbers is " + (num1 + num2);
}
let sum = two(5, 5);
console.log(sum);
