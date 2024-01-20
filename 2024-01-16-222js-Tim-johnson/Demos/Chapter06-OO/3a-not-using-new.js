function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
}

const student = Student("Peter", "Jones");
console.log('student.firstName', student.firstName);