function calculateAge(dateOfBirthString) {
  const now = new Date();
  const dateOfBirth = new Date(dateOfBirthString);
  const miliseconds = now - dateOfBirth;
  const years = convertToYears(miliseconds);

  return Math.floor(years);
}

function convertToYears(miliseconds) {
  return miliseconds / 1000 / 60 / 60 / 24 / 365.25;
}

module.exports = {
  calculateAge,
  convertToYears,
};
