function Student(firstName, lastName) {
    if (!(this instanceof Student)) {
        return new Student(firstName, lastName);
    }
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
}

function showStudent2() {
    const student = Student("Peter", "Jones");
    for (let property in student) {
        console.log(`student[property]`, student[property]);
    }
}

showStudent2();