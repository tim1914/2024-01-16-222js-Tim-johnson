
// Bonus
class Flight {
    constructor (originationCity, destinationCity, flightNumber) {
        this.originationCity = originationCity;
        this.destinationCity = destinationCity;
        this.flightNumber = flightNumber;
    }

    toString () {
        return `Flight ${this.flightNumber} from ${this.originationCity} to ${this.destinationCity}`;
    }
}

const flightArray = [
    new Flight("Pittsburgh", "Seattle", 542),
    new Flight("Tampa", "Pittsburgh", 119),
    new Flight("Atlanta", "San Francisco", 789)
];

console.log("Before sort");
console.table(flightArray);


flightArray.sort((a,b)=> {
    if (a.originationCity > b.originationCity) {
        return 1;
    }
    else if (a.originationCity < b.originationCity) {
        return -1;
    }
    else {
        return 0;
    }
});

console.log("After sort by from city");
console.table(flightArray);

