const letters = new Array("q", "w", "e", "r", "t", "y", "q");
console.log('An array of letters: ' + letters);
console.log('indexOf w: ' + letters.indexOf("w")); // prints 1
console.log('lastIndexOf q: ' + letters.lastIndexOf("q")); // prints 6

const letters2 = new Array("h", "e", "l", "l", "o");
console.log(letters2.join());
console.log(letters2.join('-'));

console.log('Sorting array...');
console.log(letters.sort());

console.log('Array sort()');
const scores = [1, 10, 21, 2];
scores.sort();

console.log('Array push() and pop()');
const bands = [];

bands.push('The Beatles');
bands.push('Aerosmith');
bands.push('The Temptations');

console.log(bands); // ["The Beatles", "Aerosmith", "The Temptations"]

const aBand = bands.pop();

console.log(aBand); // "The Temptations"
console.log(bands); // ["The Beatles", "Aerosmith"]
console.log('');

console.log('Array sort()');
const values = ['a', 'b', 'c', 'd', 'e'];

console.log(values.slice()); // ["a", "b", "c", "d", "e"]
console.log(values.slice(1)); // ["b", "c", "d", "e"]
console.log(values.slice(1, 3)); // ["b", "c"]
console.log(values.slice(-2)); // ["d", "e"]
console.log(values.slice(0, -3)); // ["a", "b"]
