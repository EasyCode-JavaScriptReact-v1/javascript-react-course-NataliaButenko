//Task-1
function returnObject(value) {
  let newObject = {
    name: value
  };
  return newObject;
};

let someObject = returnObject('Oleg');
console.log(someObject);


//Task-2
function toUpperCase(obj) {
  let newObjeckToUpperCase = {
    ['name']: obj.name.toUpperCase()
  };
  return newObjeckToUpperCase;
};

const objectWithName = { name: 'privet kak dela' };
console.log(toUpperCase(objectWithName));


//Task-3
let arr = [];
arr[0] = 'privet';
arr[1] = 'poka';
arr[2] = 'zdrastvuite';

function addToArray(arrParam, newElem) {
  arr[arr.length] = newElem;
  return arr; 
};

addToArray(arr, 34);
console.log(arr);
addToArray(arr, 55);
console.log(arr);


//Task-4
function simpleObjectGenerator(one, two, three) {
  let object = {
    argument1: one,
    argument2: two,
    argument3: three
  };
  return object;
};

var userNames = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];

console.log(simpleObjectGenerator('protocol', { url: '22' }, 8000));
console.log(simpleObjectGenerator(77, userNames, 'privet kak dela chto novogo'.toUpperCase()));


//Task-5
var myName = { name: 'Oleg' };

function addNameToUser(newKey, newValue, userName) {
  let objectToUser = {
    [newKey]: newValue
  };
  if('name' in userName) {
    objectToUser.name =userName.name;
    return objectToUser;
  } else {
    return objectToUser;
  };
};

console.log(addNameToUser('family', '%Lustenko%', myName));
console.log(addNameToUser('name', 'privet Pasha', {}));

console.log(myName);



// Super-1
function fizzBuzz(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    return console.log('FizzBuzz');
  } else if (num % 5 == 0) {
    return console.log('Buzz');
  } else if (num % 3 == 0) {
    return console.log('Fizz');
  } else {
    return console.log(num);
  };
};

fizzBuzz(1); // 1
fizzBuzz(2); // 2
fizzBuzz(3); // 'Fizz'
fizzBuzz(5); // 'Buzz'
// ...
fizzBuzz(15); // 'FizzBuzz'
fizzBuzz(21); // 'Fizz'



// Super-2
 
function super2(arg1, arg2, arg3, callback) {
  let arrSuper2 = [arg1, arg2, arg3];
  callback(arrSuper2);
};

let callbackSuper = function(arg) {
  console.log(arg);
};

super2(1, 'января', 2018, callbackSuper);



// Classwork problem task

function promptNumber(promptText) {
  let number = parseInt(prompt(promptText, 'Число'));
  if (isNaN(number)) {
    return promptNumber(promptText)
  } else {
    return number;
  };
};

let num1 = promptNumber('Введите первое число');
let num2 = promptNumber('Введите второе число');
console.log(num1 + num2);