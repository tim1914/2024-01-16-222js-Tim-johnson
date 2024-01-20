
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
console.log('Length is ' + alphabet.length);

for (let letter of alphabet) {
    console.log(letter);
}

console.log("Which letter is c?");
let pos = alphabet.indexOf("c");
console.log('c is the letter at position ' + (pos + 1) );
pos = alphabet.indexOf("3");
console.log('3 is at ' + (pos) );


let sentence = "Want these words as an array?";
let wordArray = sentence.split(" "); //split on which character?
console.log(wordArray);

let longSentence = 'There she goes...';
let shorterSentence = longSentence.slice(0, 2);
console.log(longSentence);
console.log(shorterSentence);

// const spell = "Abracadabra!";
// let substrSpell = spell.substr(1, 4); 
// console.log('substrSpell=' + substrSpell);

const spell = "Abracadabra!";
let substringSpell = spell.substring(1, 4);
console.log('substrSpell=' + substringSpell);

const baseString = '  Just Some Text With SSpaces  ';
console.log('baseString.toUpperCase: ' + baseString.toUpperCase());
console.log('baseString.toLowerCase: ' + baseString.toLowerCase());
console.log('baseString.trim: ' + baseString.trim());
console.log("baseString.replace('SS','S')" + baseString.replace('SS', 'S'));

            // console.log(string1==string2); 
            // console.log(string1===string2);
