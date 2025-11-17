/* operators:
1. arithmetice operators: +, -, *, %, /, ++, --, **(exponential)
2. comparision operators: ==, ===, != , !==, >, <, >=, <=
2. logical operator: And(&&), or(||), not(!)
3. assignement operator: +=, -+, *=, /=, %=, **=
 */
// add and assign
let x = 10;
x += 10;
console.log(x);

// sub and assign
let x1 = 10;
x1 -= 5;
console.log(x1);

// multiply and assign
let x2 = 10;
x2 *= 10;
console.log(x2);

// divide and assign
let x3 = 10;
x3 /= 10;
console.log(x3);

// modulus and assign
let x4 = 10;
x4 %= 10;
console.log(x4);

//compares the values but does'nt consider the datatypes.
console.log(10 == 10); //true
console.log(10 == "10"); //true

//comparing the values of the datatypes.
console.log(10 === 10); //true
console.log(10 === "10"); //false

//  logical operator
if (5 > 2 && 2 > 5) {
  console.log("value");
} else {
  console.log("second value");
}
