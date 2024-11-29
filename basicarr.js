let person = {
  name: "Jagdish",
  lastName: "kumar",
  age: 25,
};

let arr = ["Apple", "banana", "cherry", person];

console.log(arr.length);

// Arrays - add and remove elements

arr.push("orange");

// remove the end of array
arr.pop();
arr.pop();

// add to top of the array
arr.unshift("orange");

// to remove from top of array
arr.shift();
// console.log(arr);

// looping an array

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// let i = 0;
// while (i < arr.length) {
//   i++;
// }

//remove dulicate from array

function removeDulicate(arr) {
  return [...new Set(arr)];
}

console.log(removeDulicate([1, 2, 2, 3, 4, 4, 5, 5, 6, 6, 7, 5, 7]));

// Other methods

let uniqueSet = new Set([1, 2, 5, 5, 6, 8, 9, 9, 4, 3, 6, 1, 1, 153, 2135]);
console.log(uniqueSet, "Set it");

// insert in array without any method

let arrInsert = [1, 3, 6];
let ele = 9;

arrInsert[arrInsert.length] = ele;

console.log(arrInsert);

// sorting in array

let arrSort = [3, 4, 5, 8, 9, 7, 6, 1, 2];

arrSort.sort((f, g) => f - g); // ascending order
arrSort.sort((f, g) => g - f); // decending order

console.log(arrSort);
