function calculateAge(dateOfBirthString) {
  const now = new Date();
  const dateOfBirth = new Date(dateOfBirthString);
  const miliseconds = now - dateOfBirth;
  const years = convertMillisecondsToYears(miliseconds);

  return Math.floor(years);
}

function cvertMillisecondsToYears(miliseconds) {
  return miliseconds / 1000 / 60 / 60 / 24 / 365.25;
}

module.exports = {
  calculateAge,
  convertMillisecondsToYears,
};
