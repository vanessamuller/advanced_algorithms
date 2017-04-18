
function telephoneCheck(str) {
  // Good luck!
  // check the phone number
  // (1\s?)? checks if there is an optional 1 at the beginning of the string with or without a space
  // (\(\d{3}\) | \d{3}) checks if the area code is wrapped inside parenthesis or not and is made up of three numbers
  // [\s\-]?\d{3} checks if thee are optional spaces or dashes in the following three numbers
  // [\s\-]?\d{4} checks if there are optional spaces or dashes in the last 4 numbers
  return /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/gm.test(str);



}



telephoneCheck("555-555-5555");
