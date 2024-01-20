// 1. String literals can be represented with single quotes or double quotes.
let singleQuoted = 'This is a string with single quotes';
let doubleQuoted = "This is a string with double quotes";

// 2. Singles can contain doubles and vice versa.
let singleContainsDouble = 'He said, "Hello!"';
let doubleContainsSingle = "It's a beautiful day!";

// 3. To use a quote in string data that’s the same as the outside, can use the backslash to escape.
let escapedSingle = 'It\'s a lovely day!';
let escapedDouble = "She said, \"Hi there!\"";

// 4. \n is a newline character.
let stringWithNewline = "Hello,\nHow are you?";
console.log(stringWithNewline);
// Outputs:
// Hello,
// How are you?

// To see all strings, you can console.log them.
console.log(singleQuoted);
console.log(doubleQuoted);
console.log(singleContainsDouble);
console.log(doubleContainsSingle);
console.log(escapedSingle);
