const fs = require("fs");

function add(a, b) {
  return a + b;
}

function calculateAge(dateOfBirthString) {
  const now = new Date();
  const dateOfBirth = new Date(dateOfBirthString);
  const miliseconds = now - dateOfBirth;
  const years = convertMillisecondsToYears(miliseconds);
  console.log(years, miliseconds);

  return Math.floor(years);
}

function convertMillisecondsToYears(miliseconds) {
  return miliseconds / 1000 / 60 / 60 / 24 / 365.25;
}

const dovydasAge = calculateAge("1993-02-07");
const zanasAge = calculateAge("1996-03-26");

const fileContents = `Žanui yra: ${zanasAge} metų;
Dovydui yra: ${dovydasAge} metų;`;

fs.mkdirSync("results", { recursive: true });
fs.writeFileSync("./results/amziai.txt", fileContents);

const folderContents = fs.readdirSync("./results");

console.log("./results has these files:", folderContents);
console.log("Keeping only amziai.txt...");

folderContents.forEach((fileName) => {
  if (fileName !== "amziai.txt") {
    const removedFile = `./results/${fileName}`;
    console.log("Removing ", removedFile, "...");
    fs.rmSync(removedFile);
  }
});
