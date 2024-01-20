//demo the issue 

function printName() {
    console.log(`this.name`, this.name);    
}

printName();


//create object that uses printName

let person = {name: "Sam Anubhav", print: printName};
person.print();

let pet = {name: "Snowball", print: printName};
pet.print();



