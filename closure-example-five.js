/* function outer() {
  let amount = 1000;
  function addMoney(value) {
    amount = amount + value;
    console.log("I have amount ", amount);
    console.log("-------------------");
  }
  return addMoney;
}
let value = outer();
value(1000);
value(1000);
 */

// accelerate is inner function  that will retain outer variable value (speed) even after I closed outer function.
function speedingsystem() {
  let speed = 0;
  return function accelerate() {
    speed = speed + 10;
    console.log("My vehicle is at speed ", speed);
  };
}
let car = speedingsystem();
car(); //10
car(); //20


