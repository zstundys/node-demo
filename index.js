//@ts-check

const ageUtils = require("./utils/age.utils");
const fileUtils = require("./utils/file.utils");

const dovydasAge = ageUtils.calculateAge("1993-02-07");
const zanasAge = ageUtils.calculateAge("1996-03-26");

const fileContents = `👶 Žanui yra: ${zanasAge} metų;
🧑‍🎓 Dovydui yra: ${dovydasAge} metų;`;

fileUtils.writeAgesToFile(fileContents);
