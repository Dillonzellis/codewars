// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

const test = ["hello", "world", "this", "is", "great"];
const one = ["hello"];
const two = ["hello", "amazing", "world "];

const smash = (words) => {
  let = string = "";
  const space = " ";

  if (words.length == 1) {
    return (wordsToString = words.toString());
  }

  words.map((x) => {
    if (x != x[0] || x != x.length - 1) {
      x += space;
    }
    string += x;
  });

  return string;
};

console.log(smash(two));
