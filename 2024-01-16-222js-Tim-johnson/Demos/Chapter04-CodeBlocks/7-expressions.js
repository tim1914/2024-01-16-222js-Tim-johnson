let text = "Hello Wo›rld";
// loops through the letters of text
for (const letter of text) {
    if (letter == 'o') {
        continue;
    }
    console.log(letter);
}

text = "The morning is upon us";
console.log(text.slice()); // returns the string intact
console.log(text.slice(-4)); // slices the string counting 4 from the last letter to the end
console.log(text.slice(-4, -1));
console.log(text.slice(0, -3)); // slices starting from the first letter
