//Array creation:
//let array=[];
//let data=new Array();
//Array is collection of data

/* let array = [1, "shreya"];
console.log(array);
let array1 = [1, 2, 3, 4, 5];
let array2 = new Array(1, 2, 3, 4, 5, 6);
console.log(array1);
console.log(array2);
array1.push(6); // insert the element into the array
console.log(array1);
array1.pop(6);
console.log(array1);
 */
// java is type safe(nothing but defining the datatype of variable) where as java script is not type safe.

/* let color = ["yellow", "red", "violet", "black", "gray"];
console.log(color);
color.push("aqua");
console.log(color);
color.pop(); //pop will remove the tile end element
console.log(color);
color.shift(); // it will remove the first element
console.log(color);
color.unshift("green"); // it will add new element to the first
console.log(color);
console.log(color.indexOf("black"));
console.log(color.sort()); // sort in the asscending order
console.log(color.sort().reverse()); */

// splice :remove the element of the array, add new element to an array, replace existing elements in an array, return the removed elements.
let value = color.splice(1, 2); //extract the elements between the index that is been specified
console.log(value);
let value1 = color.splice(1, 2, "pink", "cream");
console.log(value1);
console.log(color);

let color1 = ["yellow"];
let key = ["honda"];
let value2 = color1.concat(key); // adding the two arrays
console.log(value2);

let color = ["green", "yellow"];
console.log(color[0]);
console.log(color[1]);

// find a largest word and largest word length
let string = "I am attending class in Besant";
let str = string.split(" ");
let final = "";
for (let i = 0; i < str.length; i++) {
  if (str[i].length > final.length) {
    final = str[i];
  }
}
console.log(final); // largest word
console.log(final.length); // largest word length
