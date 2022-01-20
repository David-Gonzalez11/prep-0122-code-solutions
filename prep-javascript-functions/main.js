function addTwoNumbers(x, y) {
  return x + y;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers exercise', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return (hours * 60);
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes exercise:', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}

var getGreetingResult = getGreeting('World!');
console.log('getGreeting exercise:', getGreetingResult);

function addMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addMultiplyBy5Result = addMultiplyBy5(10, 5);
console.log('addMultiply5 exercise:', addMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 exercise:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Exercise:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 3.14159 * radius;
}
var getCircleCircumferenceResult = getCircleCircumference(10);
console.log('getCircleCircumference exercise:', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var getFullNameResult = getFullName('Juan', 'Ramirez');
console.log('getFullName exercise:', getFullNameResult);

function cube(number) {
  return number * number * number;
}
var cubeResult = cube(5);
console.log('cube exercise:', cubeResult);
