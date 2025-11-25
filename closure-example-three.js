// closure:
function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log("I have counter ", count);
    console.log("-----------------------");
  }
  inner();
}
outer();
outer();
