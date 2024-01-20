
function showStudent5() {
    const pupil = {};
    pupil.yearEnrolled = 2017;
    const student = Object.create(pupil);
    student.firstName = "Peter";
    student.lastName = "Jones";
    for (let property in student) {
        console.log(`student[${property}]`, student[property]);
    }
}
showStudent5();

