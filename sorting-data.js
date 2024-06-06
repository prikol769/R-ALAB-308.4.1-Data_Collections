//Part 4: Sorting and Manipulating Data

const arr = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  {
    id: "98",
    name: "Bill",
    occupation: "Doctor’s Assistant",
    age: "26",
  },
];

console.log("input data:", arr);
console.log(" ");

//Remove the last element from the sorted array.
const removedLastElement = arr.pop();
console.log("Remove the last element from the sorted array:", arr);
console.log(" ");

//Insert the following object at index 1: { id: "48", name: "Barry", occupation: "Runner", age: "25" }

arr.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
console.log("Insert the following object at index 1:", arr);
console.log(" ");

//Add the following object to the end of the array: { id: "7", name: "Bilbo", occupation: "None", age: "111" }

arr.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log("Add the following object to the end of the array:", arr);
console.log(" ");

//Finally, use the values of each object within the array and the array’s
// length property to calculate the average age of the group.
// This calculation should be accomplished using a loop.

let sumGroupAge = 0;

for (let i = 0; i < arr.length; i++) {
  sumGroupAge += +arr[i].age;
}

const averageGroupAge = sumGroupAge / arr.length;

console.log("Average group age:", averageGroupAge);
