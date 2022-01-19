// eslint-disable-next-line no-unused-vars
var person = {
  firstName: 'David',
  lastName: 'Gonzalez',
  hobby: 'Coding'
};
var fullName = person.firstName + ' ' + person.lastName;

person.job = 'Jerk';
person.previousJob = 'amigo';
// eslint-disable-next-line eol-last
console.log(person);
console.log("The person's current job is:", person.job);
console.log("The person's previous job is:", person.previousJob);
console.log("The person's name is:", fullName);
