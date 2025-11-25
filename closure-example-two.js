// closure: closure is a function that will retain outer variable even after outer function is closed.
// we have to return the value (inner is the closure bcoz it is returning)

// closure: to access an inner function after its outer function has finished executing, the function must return inner function. this creates closure.
// closure must allow the returned inner function to  remember and access the variable from its closing scope.
function outer() {
  let name = "prabha";
  console.log(name);
  function inner() {
    let name2 = "Shreya";
    console.log(name2);
    console.log("------");
  }
  return inner;
}
let value = outer();
value(); // invoked the outer function
value(); // invoked the outer function again but outer function will not execte again because the outer function is expired
value();
