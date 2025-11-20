/*set of rules to access the data 
 lexical scope : 1. global scope: globally available throughout the file
                 2. local scope:  
                 3. nested scope
                 4. block scope 
*/

let name = "shreya"; // global scope
function outer() {
  let name2 = "prabha"; // block scope
  console.log(name);
  console.log(name2); // local scope
  function inner() {
    // nested scope
    let name3 = "Anthony";
    console.log(name);
    console.log(name2);
    console.log(name3);
  }
  inner();
}
outer();
console.log(name);
