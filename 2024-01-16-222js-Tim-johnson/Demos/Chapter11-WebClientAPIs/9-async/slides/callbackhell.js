try {
    asyncStep1(function (returnedValue1, err) {
        if (err) { throw `An error occurred:${err}`; }

        asyncStep2(returnedValue1, function (returnedValue2, err) {
            if (err) { throw `An error occurred:${err}`; }

            asyncStep3(returnedValue2, function (returnedValue3, err) {
                if (err) { throw `An error occurred:${err}`; }
                else {
                    console.log(`Returned values are: 
                    ${returnedValue1},
                    ${returnedValue2}  
                    ${returnedValue3}`);
                }
            });
        });
    });
    console.log("no error occurred");
}
catch (err) {
    console.log(`err`, err);
}

function asyncStep1(someFunction) {
    let someVal1 = Math.random();
    let err = null;
    if (someVal1 > 0.5) {
        return someFunction(someVal1, null);
    }
    else if (someVal1 < 0.5) {
        err = "Step 1: Value is too low";
        return someFunction(someVal1, err);
    }
}

function asyncStep2(someVal1, someFunction) {
    let someVal2 = Math.random();
    let err = null;
    if (someVal2 > 0.5) {
        return someFunction(someVal2, null);
    }
    else if (someVal2 < 0.5) {
        err = "Step 2: Value is too low";
        return someFunction(someVal2, err);
    }
}

function asyncStep3(someVal2, someFunction) {
    let someVal3 = Math.random();
    let err = null;
    if (someVal3 > 0.5) {
        return someFunction(someVal3, null);
    }
    else if (someVal3 < 0.5) {
        err = "Step 3: Value is too low";
        return someFunction(someVal3, err);
    }
}
