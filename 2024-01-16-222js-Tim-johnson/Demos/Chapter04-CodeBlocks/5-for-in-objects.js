
// creating an object to reference
const student =
{
    name: 'Sarah Wiessman',
    email: 'sarah@email.com',
    street: '123 Main St.',
    city: 'Pittsburgh'
};

// loops through and prints each property of the object 
for (let prop in student) {
    console.log('student.' + prop, '=', student[prop]);
}

