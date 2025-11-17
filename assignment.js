/* // input let array = [1,2,3,4,5]
//        let final = 5;
    output = [[0,3],[1,2]] */

let array = [1, 2, 3, 4, 5];
let final = 5;
let array_final = [];
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] + array[j] == 5) {
      array_final.push([i, j]);
    }
  }
}
console.log(array_final);

/* [1,0,0,0,1]
n = 2 -> n how many trees to be placed with the single gapbtwn trees
output : true/false. 
*/
