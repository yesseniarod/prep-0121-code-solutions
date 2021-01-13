function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', addTwoNumbersResult);

function convertHoursToMinutes(number) {
  return number * 60;
}
var convertHoursToMinutesResults = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResults);

function personalizeGreeting(name) {
  return 'Hello ' + name + '!';
}
var personalizeGreetingResult = personalizeGreeting('World');
console.log('personalizeGreeting Exercise:', personalizeGreetingResult);

function returnDataType(data) {
  return typeof data;
}
var returnDataTypeResult = returnDataType(1072);
console.log('returnDataType Exercise:', returnDataTypeResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise:', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Exercise:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Exercise:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference Exercise:', getCircleCircumferenceResult);

function returnFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var returnFullNameResult = returnFullName('Juan', 'Ramirez');
console.log('returnFullName Exercise:', returnFullNameResult);
