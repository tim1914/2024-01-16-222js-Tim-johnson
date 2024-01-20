
var lowerString = "abc";
var upperString = "ABC";

console.group('Strings');
console.log(lowerString == upperString);

console.groupCollapsed('Template literals...');
let fullName = "Remembrance O'Neal";
let myString = `        'Single' and "Double" quotes work
                Backticks allow other variables to be referenced: name= ${fullName}
                Line ${2 + 1}  Expressions can be evaluated
            `;
console.log(myString);
console.log("See more at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals");
console.groupEnd();


console.groupCollapsed("strings...");
var dblQuoteString = "Isn't it nice that I can contain single quotes?";
var singleQuoteString = "Well, you may \"think\" that's cool...";
console.log(dblQuoteString);
console.log(singleQuoteString);
console.groupEnd();
