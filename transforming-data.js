//Part 3: Transforming Data

const arr = [
  ["ID", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor’s Assistant", "26"],
];

console.log("input data:", arr);
console.log(" ");

const CSV = (arr) => {
  let numberOfColumns = arr[0].length;

  const usersDataIntoObjects = [];

  for (let i = 1; i < arr.length; i++) {
    let currentObj = {};
    for (let j = 0; j < arr[i].length; j++) {
      currentObj = { ...currentObj, [arr[0][j].toLowerCase()]: arr[i][j] };
    }
    usersDataIntoObjects.push({
      ...currentObj,
    });
    currentObj = {};
  }

  console.log("*********Transforming Data*********");
  console.log("usersDataIntoObjects:", usersDataIntoObjects);
};

CSV(arr);
