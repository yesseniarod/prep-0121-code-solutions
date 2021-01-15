var person = {
  firstName: 'Yessenia',
  lastName: 'Rodriguez',
  hobby: 'reading'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s name is:', fullName);

person.job = 'superstar';
console.log('The person\'s current job is:', person.job);

person.previousJob = 'singer';
console.log('This person\'s previous job is:', person.previousJob);

console.log('The complete person object:', this.person);

var myCar = {
  make: 'Toyota',
  model: 'Rav4',
  year: '2018'
};

console.log('Car information:', myCar);

myCar['owner'] = fullName;
var sentence = 'My name is ' + person['firstName'] + ' ' + person['lastName'] + ' and I drive a ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'] + '.';
console.log(sentence);

myCar['color'] = 'grey';
console.log('My full car info:', myCar);
