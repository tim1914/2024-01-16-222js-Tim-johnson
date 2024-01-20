
promiseStep1()
.then(returnedValue1 => promiseStep2(returnedValue1))
.then(returnedValue2 => promiseStep3(returnedValue2))
.catch(err => {
    //handles errors from any of the steps
    console.log(`err`, err);
})
.finally(() => {
    //will execute whether error or not
});


function promiseStep1() {
return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve("Mail has arrived");
    } else {
        reject(new Error("Failed to arrive"));
    }
});
}

function promiseStep2() {
return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve("Mail opened");
    } else {
        reject(new Error("Failed to open"));
    }
});
}

function promiseStep3() {
return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve("Mail read");
    } else {
        reject(new Error("Failed to read"));
    }
});
}
