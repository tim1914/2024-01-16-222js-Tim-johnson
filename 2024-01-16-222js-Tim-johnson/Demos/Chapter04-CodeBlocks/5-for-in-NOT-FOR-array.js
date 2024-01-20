
const myArray = [8, 10, 13, 4, 5];

for (const element in myArray) {
  console.log(element);
}

// sure it works to use square brackets, though
// leads to confusions
// and is much slower

for (const element in myArray) {
  console.log(myArray[element]);
}

