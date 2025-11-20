// var can be redeclared.
// var can be re-initialized
// var is a function scope: can be accessed outside the block.

// let cannot be redeclared.
// let can be re-initialized.
// let and const are blocked scope: we cannot access the value outside the block.

// const cannot be re-declared.
// const cannot be re-initialized.
// let and const are blocked scope: we cannot access the value outside the block.

{
  var name = "shreya";
  var name = "prabha";
  console.log(name);
}
console.log(name);

console.log(x);
var x; // undefined

// temperal dead zone: You cannot use a let or const variable before it is declared in the code. so the variable will be in the tempered dead zone.
// If you try to use it early, JavaScript gives a ReferenceError.
console.log(x);
let x;
