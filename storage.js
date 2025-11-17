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
