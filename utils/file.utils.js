const fs = require("fs");

function writeAgesToFile(content) {
  fs.mkdirSync("results", { recursive: true });
  fs.writeFileSync("./results/amziai.txt", content);

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
}

module.exports = {
  writeAgesToFile,
};
