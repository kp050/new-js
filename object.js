// object is non-primitive datatype, it is used to store the collective data.
// object-> It is a collection of key-value pair.
// to access the value of an object
//  1. console.log(board.name)
//  2. console.log(board(write))

/* let board = {
  name: "white board",
  isAvailabe: true,
  write: function () {
    console.log("I am able to write");
  },
}; */

let employee = {
  id: "12345",
  name: "Shreya",
  date_of_join: "2025-10-28",
  salary: "60000",
  department: "Technology",
};
console.log(`${employee.id}, 
${employee.name},
${employee.date_of_join}`);
console.log(employee);
employee.description = "good employee"; // it will add the new property/key description into the employee object
console.log(employee);
