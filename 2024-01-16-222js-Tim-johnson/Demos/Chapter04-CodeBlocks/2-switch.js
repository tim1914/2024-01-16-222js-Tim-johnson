
let day;
switch (day = new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

console.log('The day is ' + day);
let text;
switch (text = new Date().getDay()) {
    case 0:
    case 6:
        text = "We are closed today.";
        break;
    default:
        text = "9am to 5pm";
}
// Specific code is given for when text = 0 or text = 6, otherwise default code is run

console.log('Store hours today: ' + text);
