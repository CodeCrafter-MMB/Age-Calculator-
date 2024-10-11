// Prompt
var birthYear = parseInt(
  prompt("Please enter your birth year (e.g., 1970):"),
  10
);

var birthMonthInput = prompt(
  "Please enter your birth month (e.g., 2, Feb, February, etc.):"
).toLowerCase();

var birthDate = parseInt(prompt("Please enter your birth date (1-31):"), 10);

// Month names
var monthNames = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
var monthAbbreviations = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

if (!isNaN(birthMonthInput)) {
  birthMonth = parseInt(birthMonthInput, 10) - 1;
} else {
  var normalizedInput = birthMonthInput.slice(0, 3);

  birthMonth = monthAbbreviations.indexOf(normalizedInput); 
  if (birthMonth === -1) {
    for (var i = 0; i < monthNames.length; i++) {
      if (monthNames[i].startsWith(birthMonthInput)) {
        birthMonth = i;
        break;
      }
    }
  }
}

if (birthMonth === -1 || birthMonth > 11) {
  console.error(
    "Invalid month. Please enter a valid month like 2, Feb, February, etc."
  );
} else {
  var today = new Date();
  var userBirthDate = new Date(birthYear, birthMonth, birthDate);

  // Calculate age
  var age = today.getFullYear() - userBirthDate.getFullYear();
  var monthDifference = today.getMonth() - userBirthDate.getMonth();
  var dayDifference = today.getDate() - userBirthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  alert("Your age is " + age + " years.");
}
