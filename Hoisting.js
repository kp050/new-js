// Hoisting : moving declarations or functions to the top.

// function declaration: Hoisting can be achieved
/* abc();
function abc() {
  console.log("function");
} */

// function expression: Hoisting cannot be achieved
/* abc();
let abc = function () {
  console.log("function");
}; */

//
console.log(10 + "10"); // 1010 (concatinating string)
console.log(10 - "10"); //0
