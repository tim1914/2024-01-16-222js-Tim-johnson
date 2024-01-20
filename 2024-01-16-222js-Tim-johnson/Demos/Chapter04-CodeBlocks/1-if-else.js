
let currentHour = new Date().getHours();
console.log('currentHour', currentHour);

if (currentHour > 12) {
    console.log("It is after 12pm");
}
else {
    console.log("It is morning");
} 

console.log("After if-else statements");

const hour = 10;  // 10am

//if, else if
if (hour > 12 && hour < 13) {
    console.log('It is lunch time');
}
else if (hour > 8 && hour < 17) {
    console.log('class is in session');
}
else {
    console.log('go home - class is not in session!');
}
