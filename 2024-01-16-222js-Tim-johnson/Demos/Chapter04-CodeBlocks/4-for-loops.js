

// for loop
for (let index = 0; index <= 5; index++) {
     console.log("At index: " + index);
}

const pets = [
     { name: 'Birdy', type: 'cat' },
     { name: 'Roxy', type: 'dog' }
];

// prints out the name and type of specific pet when looping through the array
//using for loop this way - referred as random access
for (let index = 0; index < pets.length; index++) {
     console.log(index);
     console.log(pets[index].name + " is a " + pets[index].type);
}


