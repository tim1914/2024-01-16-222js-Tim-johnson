
function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Student.prototype.toString = function () {
    return `The student is: ${this.firstName} ${this.lastName}`;
};

const student = new Student("Peter", "Jones");
console.log(student.toString());
console.log(student);
console.log(student + " ");


