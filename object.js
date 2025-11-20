/* object is non-primitive datatype, it is used to store the collective data.
object-> It is a collection of key-value pair.
To access the value of an object
    1. console.log(board.name)
    2. console.log(board(write)) */

let board = {
  name: "white board",
  isAvailabe: true,
  write: function () {
    console.log("I am able to write");
  },
};

//
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

//
let person = {
  name: "david",
  email: "david@gmail.com",
  address: {
    city: "bangalore",
    state: "karnataka",
  },
};
console.log(person.name);
console.log(person.address.city);
console.log(person.address);

// for-in loop
let person1 = {
  name: "david",
  email: "david@gmail.com",
  city: "bangalore",
};
for (let key in person1) {
  console.log(`property ${key} value ${person1[key]}`);
  //   console.log(key);
}

// extracting the mobile name of apple company
let response = [
  {
    name: "iphone 11",
    company: "apple",
  },
  {
    name: "iphone 14",
    company: "apple",
  },
  {
    name: "galaxy",
    company: "samsung",
  },
  {
    name: "nord",
    company: "one plus",
  },
];
let mobile = [];
for (let i = 0; i < response.length; i++) {
  if (response[i].company == "apple") {
    mobile.push(response[i].name);
  }
}
console.log(mobile);

//
let obj = {
  name: "iphone",
  company: "apple",
  price: "...$",
};
console.log(Object.keys(obj)); // prints the keys of the object
console.log(Object.values(obj)); // prints the values of the object
let obj2 = {
  name: "galaxy",
  model: 17,
};
console.log(Object.assign(obj, obj2)); // if the property exist in both object then it modifies it and if property not exist in one object then it adds the object
