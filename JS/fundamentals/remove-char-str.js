// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

const removeExclamationMarks = (s) => {
  return s.replace(/!/g, "");
};

console.log(removeExclamationMarks("Hello!!!"));
