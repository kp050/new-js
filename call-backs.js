// to handle asynchronous programming -> call backs, promises, asynch/await

// call-back: call-back is a process of passing a function as a parameter to decide the order of execution of program.
// it is helpful in handling asynchronous programming in synchronous way

// converted asynchronous program to synchronous
/* function one(callback) {
  setTimeout(() => {
    console.log("function one executed");
    callback();
  }, 2000);
}
function two() {
  console.log("function two executed");
}
// one();
// two();
one(two);

// hoisting
one(two);
function one(callback) {
  setTimeout(() => {
    console.log("function one executed");
    callback();
  }, 2000);
}
function two() {
  console.log("function two executed");
}
// one();
// two();
 */

//
/* function addMoney(value, callback) {
  setTimeout(() => {
    console.log("i have added money", value);
    callback(value);
  }, 2000);
}

function displayBalance(value) {
  console.log("my current balance is", value);
}
// addMoney(1000);
// displayBalance();
addMoney(1000, displayBalance);
 */
//
function fetchData(callback) {
  setTimeout(() => {
    console.log("I am fetching the data");
    callback();
  }, 4000);
}
function arrangeData(callback) {
  setTimeout(() => {
    console.log("I am arranging the data");
    callback();
  }, 3000);
}
function displayData() {
  setTimeout(() => {
    console.log("I am displaying the data");
  }, 2000);
}
// fetchData();
// arrangeData();
// displayData();
fetchData(() => {
  arrangeData(() => {
    displayData();
  });
});

// call-back hell: when we have more call back functions then at that time we will come through call back hell.
// to overcome call-back hell we go for promises
