/* Two ways of function creation:
1. function declaration
2. function expression 
3. arrow function
*/
/* 
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
let sum1 = two(5, 5);
console.log(sum1);

// arrow function:
const abc = () => {
  console.log("function");
};
abc();

//
const sum = (a, b) => {
  return a + b;
};
let value = sum(5, 10);
console.log(value);

// if the logic is single line return statement is not required.
const sum2 = (a, b) => a + b;
let value1 = sum2(10, 10);
console.log(value1);

// for delayed response
setTimeout(() => {
  console.log("i have a data");
}, 5000);

// for every 1sec the logic is executing(execute between the interval)
setInterval(() => {
  console.log("i have a data");
}, 1000); */

// max function, min function, power function
console.log(Math.max(1, 2, 10, 20));
console.log(Math.min(1, 2, 10, 20));
console.log(Math.pow(2, 2));
console.log(Math.sqrt(144));
console.log(Math.round(4.9));
console.log(Math.floor(4.9)); //4-> gives the nearest smallest number
console.log(Math.ceil(4.9)); //5-> gives the nearest largest number
