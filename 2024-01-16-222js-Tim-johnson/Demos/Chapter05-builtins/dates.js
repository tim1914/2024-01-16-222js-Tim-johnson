let now = new Date();
console.log('now', now);



let milliSinceEpoch = new Date(90645645);
console.log(`milliSinceEpoch`, milliSinceEpoch);

let moonLanding = new Date(1969, 6, 20, 20, 18, 0, 0);
console.log(`moonLanding`, moonLanding);

// using Date objects
const start = new Date().getTime();

function doSomethingForALongTime() {
    for (let index = 0; index < 200000; index++) {
        let x = 3+4;
        if (x%4000==0) {
            console.log("never gonna happen");
        }
    }
}

// the event to time goes here:
doSomethingForALongTime();
const elapsed = new Date().getTime() - start;
// elapsed time in milliseconds
console.log(elapsed);

const specialDay = new Date('January 1, 2011 08:33:00');
console.log('specialDay = ' + specialDay);

