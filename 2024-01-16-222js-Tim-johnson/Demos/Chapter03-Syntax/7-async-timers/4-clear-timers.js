function printA() {
    console.log("A!");
}

// Now call above function after 2 seconds
setTimeout(printA, 2000);

function printB() {
    console.log("B");
}
// Now call above function every 2 seconds
let t2 = setInterval(printB, 2000);
// Now clear the timer
setTimeout(() => {
    clearTimeout(t2);
    console.log('cancelled timeout')
}, 8000);

