/* Type conversion
    1. Implicit Type conversion
    2. Explicit Type conversion */

// implicit Type conversion:
console.log(10 + "10"); // 1010 (concatinating string)
console.log(10 - "10"); //0
console.log(10 * "2");
console.log(3 + true); //4
console.log(3 - false); //3
console.log("3" + true); //3true
console.log("3" - true); //2
console.log(2 == 2); //true
console.log((2 == 2) == 2); //false
console.log((((2 == 2) == 2) == 2) == 0); //true

// explicit Type conversion:
console.log(Number("123")); //123
console.log(String(123)); // '123'
console.log(Boolean("123")); // true
console.log(Boolean("")); //false (for empty string)


