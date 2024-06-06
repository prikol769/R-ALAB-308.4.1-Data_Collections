// Expanding Functionality

const str =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
console.log("input data:", str);
console.log(" ");

const CSV = (str) => {
  let numberOfColumns = 0;

  const usersData = str.split("\n").map((userData) => userData.split(","));
  numberOfColumns = usersData[0].length;

  console.log("*********Expanding Functionality*********");
  console.log("usersData:", usersData);
  console.log("numberOfColumns:", numberOfColumns);
};

CSV(str);
