// while
let counter = 0;
while (counter <= 5) {
     console.log("Counter: " + counter++);
     // post increment - the line executes and then increments counter
}

console.log("counter is ");
console.log(counter);

// do while
counter = 0;
do {
     console.log("Counter is less than 5 ==> ", counter++);
} while (counter < 5);
