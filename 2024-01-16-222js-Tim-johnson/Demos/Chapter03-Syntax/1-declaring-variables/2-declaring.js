/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
/*
Everything in between the stars and 
slashes is a comment.
*/

console.groupCollapsed("Declarations and Initializations...");

var someVariable = 1;
var someVariable = "a"; //Can happen when combining scripts
someVariable = true;    //Was this meant to be changed?

var stopUsingVar = "Going forward, do not use var";
let yourself = "Have fun";
yourself = 42;
const pi = 3.14; //you cannot reassign pi
const objectsChange = { onlyRealConstant: "change"} 
//objects are mutable - const variables can't be reassigned
// objectsChange = 3;
objectsChange.someNewValue = 4;



const cantPointToSomethingElse = new Date();
// cantPointToSomethingElse = 3;

{
    let x = 23;
    var y = 24;
    const z = 25;
}

// eslint-disable-next-line no-irregular-whitespace
// console.log('​x', x); // throws error, x is out of scope
// console.log('​z', z); // throws error, z is out of scope
console.log('y', y);

let b; console.log(typeof b);
b = null; console.log(typeof b);
console.groupEnd();

//undefined and null
console.groupCollapsed("Undefined");
let abc;
console.log(abc);
console.groupEnd();
