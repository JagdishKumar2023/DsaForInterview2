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
