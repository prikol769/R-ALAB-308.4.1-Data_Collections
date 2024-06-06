// Part 5: Full Circle
// As a final task, transform the final set of data back into CSV format.

const data = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

console.log(" ");
console.log("input data:", data);
console.log(" ");

const transformToCSVFormat = (data) => {
  const arr = [];

  const headings = Object.keys(data[0]);

  const headingsToUpperCase = headings.map((heading) => {
    //ID have to be UpperCase
    if (heading.toUpperCase() === "ID") {
      return "ID";
    }
    return heading[0].toUpperCase() + heading.slice(1);
  });

  const headingsString = headingsToUpperCase.toString();

  arr.push(headingsString);

  for (let i = 0; i < data.length; i++) {
    const userData = Object.values(data[i]).toString();
    arr.push(userData);
  }

  const csvFormat = arr.join("\n");

  console.log("*********csvFormat*********");
  console.log(" ");
  console.log(csvFormat);
};

transformToCSVFormat(data);
