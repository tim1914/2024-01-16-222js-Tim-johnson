
let x = 3.141592653589;
console.log(x.toFixed(0));           // returns 3
console.log(x.toFixed(2));           // returns 3.14
console.log(x.toFixed(4));           // returns 3.1416

let y = 8.899;
console.log(y.toFixed(0));           // returns 9
console.log(y.toFixed(2));           // returns 8.90

console.log(Number(true));
console.log(Number(false));
console.log(Number("1111"));
console.log(Number("89 98"));

console.log(parseFloat("11.11"));
console.log(typeof parseFloat("11.11"));

console.log(parseInt("11.11"));
console.log(typeof parseInt("11.11"));

console.log(parseInt("11.99"));

console.groupCollapsed("Numbers...");
let z = 3.13; console.log(typeof z);
let divideByZero = (z / +0); console.log("(z/+0)=" + divideByZero);
divideByZero = (z / -0); console.log("(z/-0)=" + divideByZero);
console.log((z / "Tuesday"), typeof (z / "Tuesday"));

let result = 22 / "Monday";
console.log('result', result);


let bigNum = Number.MAX_VALUE;
let tryBigger = bigNum * 2; console.log("Too big? " + tryBigger);

console.groupEnd();

let smallNum = Number.MIN_VALUE;
console.log(`smallNum`, smallNum);
var trySmaller = (smallNum - 1); 
console.log("trySmaller ",trySmaller)  ;
