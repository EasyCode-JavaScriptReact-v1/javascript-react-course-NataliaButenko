//Task1
let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];
let arr2 = ['a', 0, 0, 'b', null, 'c', 'd', 0, 1,
  false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9];

function moveZeroToEnd(arr) {
  let arrayWithoutZeros = [];
  let arrZero = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arrayWithoutZeros.push(arr[i]);
    };
    if (arr[i] === 0) {
      arrZero.push(arr[i]);
    };
  };
  let newArr = arrayWithoutZeros.concat(arrZero);
  //console.log(arrZero);
  return newArr;
}

console.log('Задание 1 ', moveZeroToEnd(arr1));
console.log('Задание 1 ', moveZeroToEnd(arr2));



//Task2

//let arrayOfNumbers = [1,200,10,1,1,25,15];
let arrayOfNumbers = [10,20,30,1,31,11,10];
//let arrayOfNumbers = [-1,0,25];
//let arrayOfNumbers = [-4,-10,25,10];

function minNamber (arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    };
  };
  return min;
};

function addTwoMin(arr) {
  let newArr2 = [];
  let firstNumber = minNamber(arr);
  let firstNumberIndex;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === firstNumber) {
      firstNumberIndex = i;
      break;
    };
  };
  for (let i = 0; i < arr.length; i++) {
    if (i === firstNumberIndex) {
      continue;
    };
    newArr2.push(arr[i]);
  };
  let secondNumber = minNamber(newArr2);
  return firstNumber + secondNumber;
};

console.log('Задание 2 ',addTwoMin(arrayOfNumbers));



//Task3
let strNameShuffler ='Arnold Schwarzenegger';
function nameShuffler(str) {
  let arrStr = str.split(' ');
  let arrStrReverse = arrStr.reverse();
  return arrStrReverse.join(' ');
};
console.log('Задание 3', nameShuffler(strNameShuffler));



//Task4

//let arrCapMe = ['jo', 'nelson', 'jurie'];
let arrCapMe = ['KARLY', 'DANIEL', 'KELSEY'];

function capMe(arr) {
  let resArrCapMe = [];
  for (let i = 0; i < arr.length; i++){
    let elemArr = arr[i];
    let firstCapitalLetter = elemArr.charAt(0).toUpperCase();
    let theRestSmall = elemArr.slice(1, elemArr.length).toLowerCase();
    let concatVersion = firstCapitalLetter.concat(theRestSmall);
    resArrCapMe.push(concatVersion);
  };
  return resArrCapMe;
};
console.log('Задание 4', capMe(arrCapMe));



//Classwork unsolved task

let myString = 'JavaScript is Awesome';
function reversString(str) {
  let myStringArr = str.split('');
  let myReversArr = myStringArr.reverse();
  let myReversString = myReversArr.join('');
  return myReversString;
};
console.log('Classwork unsolved task: ', reversString(myString));




//Classwork optimization task

const obj = {
  name: 'qwerty',
  qwerty: [1, 2, 3, 4, 5],
  qwerty2: [100, 200, 300, 400, 500]
};

const arr = [1, 2, 500, 310, 20, 75];
/* //Было так
const task1 = function(data, number) {
  if (!Array.isArray(data)) {
    for (let key in data) {
      //console.log(data[key]);
      let arrKey = data[key]; 
      if (Array.isArray(arrKey)) {
        for (let i = 0; i < arrKey.length; i++) {
          if (arrKey[i] > number) {
            console.log(arrKey[i]);
            break;
          };
        };
      };
    };
  };
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      if (data[i] > number) {
        console.log(data[i]);
        break;
      };
    };
  };
};
*/
//task1(obj, 200);
//task1(arr, 55);
   // Стало так 
const task1 = function(data, number) {
  if (!Array.isArray(data)) {
    for (let key in data) {
      let arrKey = data[key]; 
      searchAndComparison(arrKey, number);
    };
  };
  searchAndComparison(data, number);
};

function searchAndComparison (arr, number) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > number) {
        console.log('Classwork optimization task', arr[i]);
        break;
      };
    };
  };  
};
task1(obj, 200);
task1(arr, 55);

//@SUPER 1

//@SUPER 2