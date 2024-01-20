
function getValue() {
    let someVal1 = Math.random();
   
    if (someVal1 > 0.5) {
        return someVal1.toFixed(4);
    }
    else if (someVal1 < 0.5) {
        throw `Value is too low ${someVal1}`;
    }
}

// console.log(`Random value is ${getValue()}`);

try {
    console.log(`Random value is ${getValue()}`);
}
catch(err) {
    console.log("Error occurred", err);
}

