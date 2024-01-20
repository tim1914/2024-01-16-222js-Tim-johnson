const re = /ab+c/i; // literal notation
// OR  constructor with string pattern as first argument
const re2 = new RegExp('ab+c', 'i'); 
// OR constructor with regular expression literal as first argument
const re3 = new RegExp(/ab+c/, 'i'); 

const regex = /hello/;
const str = 'hello world';
const result = regex.test(str);
console.log(result);

// Define a string
const str2 = "I have 3 keets and 5 chickens.";

// Define a regular expression to search for numbers in the string
const regex2 = /\d+/g; 
// Here's the breakdown of the regex:
// \d - matches any digit (equivalent to [0-9])
// +  - matches one or more of the preceding token
// g  - global flag; searches for the pattern throughout the entire string

// Use the regex to search the string
const found = str2.match(regex2);

console.log(found);  // Outputs: ["3", "5"]
