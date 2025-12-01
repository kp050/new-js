// filter: used to get specified data in the array
let obj = [
  { name: "apple", version: "14" },
  { name: "samsung", version: "15" },
  { name: "Redmi", version: "12" },
  { name: "apple", version: "13" },
  { name: "apple", version: "10" },
];
let data = obj.filter((value) => value.name === "apple");
console.log(data);

// map will iterate through each object and keeps on printing the objects
let obj1 = [
  { name: "apple", version: "14" },
  { name: "samsung", version: "15" },
  { name: "Redmi", version: "12" },
  { name: "apple", version: "13" },
  { name: "apple", version: "10" },
];
obj1.map((value) => console.log(value));
