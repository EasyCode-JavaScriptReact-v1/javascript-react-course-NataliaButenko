//Task1
function testValue (value) {
  if (typeof value == 'number' || typeof value == 'object') {
    return true;
  };
  if (typeof value == 'function') {
    return false;
  };
  if (typeof value == 'string' && value.length != 10) {
    return `Длина вашей строки: ${value.length}.`;
  };
  if (typeof value == 'string' && value.length == 10) {
    return 'you win';
  }
}
let typeofNumber = 10;
let typeofObject = {
  name: 'Natalia'
};
let typeofFunction = function () {
  return 2 + 2;
};
let typeofString = 'JS';
let typeofString10 = 'javascript';

console.log(testValue(typeofNumber));//true
console.log(testValue(typeofObject));//true
console.log(testValue(typeofFunction));//false
console.log(testValue(typeofString));//'длина вашей строки: <длина строки>'
console.log(testValue(typeofString10));//'you win'



//Task2
function numbersBetween(a, b) {
  if (typeof a == 'number' && typeof b == 'number') {
    for (let i = a; i <= b; i++) {
      console.log(i);
    };
  };
};

numbersBetween(3, 5);

numbersBetween(10, 12);



//Task3
function FizzBuzz(num) {
  if (num % 3 == 0  && num % 5 == 0) {
      console.log('FizzBuzz');
    } else if (num % 3 == 0) {
      console.log('Fizz');
    } else if (num % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(num);
    };
}

function fizzBuzz100(number) {
  for (let i = number; i <= 100; i++) {
    FizzBuzz(i);
  };
};

fizzBuzz100(80);



//Task4
let arr = [1, null, undefined, 'str', {}, [], function() {}];
let array = `Массив – разновидность объекта.`;
let typeofNull = 'null – это не объект, а отдельный тип данных';

function typesVariablesInArray (arg) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
     let type = typeof arr[i];
     if (Array.isArray(arr[i])) {
        newArr[i] = `${type}; ${array}`
     } else if (arr[i] === null){
        newArr[i] = `${type}; ${typeofNull}`
     } else {
        newArr[i] = type;
     }
  };
  return newArr;
};

console.log(typesVariablesInArray(arr));



//@@SUPER@@

let array2 = Array.from({length: 35},
  (value, index) => (index % 2 ? {age: index + 2} : {age: NaN}),
);

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    if (isNaN(obj.age)) {
      obj.unknownAge = true;
    };
  };
};

solution(array2);

function solution2 (arr2) {
  let secondNewArr = [];
  let obj;
  for (let i = 0; i < arr2.length; i++) {
    obj = arr2[i];
    if ('unknownAge' in obj) {
      secondNewArr[secondNewArr.length] = obj;
    };
  };
  return secondNewArr;
}

console.log(solution2(array2));



// Classwork problem task 
let webStore = {
  category: {
    noteBook: ['Asus', 'Lenovo', 'Dell', 'HP'],
    mobile: ['Nokia', 'Apple', 'Sony']
  }
};

let category = webStore.category;

function dataProcessing (data) {
  for (let key in category){
    console.log(`Категория: ${key}`);
    for (let i = 0; i < category[key].length; i++){
      console.log(`   Содержимое категории:  ${category[key][i]}`);
    };
  };
};
dataProcessing(webStore);
