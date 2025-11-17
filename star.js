/* function star(rows) {
  for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows);
    let stars = "*".repeat(1 * i);
    console.log(spaces + stars);
  }
}
star(5); */

//Another method
for (let i = 1; i <= 5; i++) {
  let text = "*";
  console.log(text.repeat(i));
}
for (let i = 5 - 1; i >= 0; i--) {
  let text = "*";
  console.log(text.repeat(i));
}

/* for (let i = 5; i >= 0; i--) {
  let text = "*";
  console.log(text.repeat(i));
} */
