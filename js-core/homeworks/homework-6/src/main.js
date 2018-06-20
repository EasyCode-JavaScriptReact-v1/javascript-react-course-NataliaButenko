//Task1

let randomString = 'aaa b a w c ';

let user = {
  name: 'Albina',
};

let javaScript = {
  html: 'JavaScript',
};

function countLetterA(str) {
  let arrStr = str.split('');
  let countLetterA2 = arrStr.reduce(function(newElem, elem) {
    if(elem === 'a') {
      newElem++;
    };
    return newElem;
  },0);
  return countLetterA2;
};
console.log('Task1 ', countLetterA(randomString));
console.log('Task1 ', countLetterA(javaScript.html + user.name));




//Task2

function reverseEachWord(str) {
  let arrStr = str.split('').reverse().join('');
  return arrStr.split(' ').reverse().join(' ');
};

console.log('Task2 ', reverseEachWord('You don\'t have to do anything special to begin using the DOM. Different browsers have different implementations of the DOM'));
console.log('Task2 ', reverseEachWord('The Document Object Model (DOM) is a programming interface for HTML and XML documents'));



//Task3

function reverseEachWord2(str, shouldReverse) {
  let arrStr = str.split('').reverse().join('');
  let arrSting = arrStr.split(' ').reverse().join(' ');
  if (shouldReverse === true) {
    arrSting = arrSting.split(' ').reverse().join(' ');
  };
  return arrSting;
};

console.log('Task3 true', reverseEachWord2('The Document Object Model (DOM) is a programming interface for HTML and XML documents', true));
console.log('Task3 false', reverseEachWord2('Hi my Name is', false));
console.log('Task3 true', reverseEachWord2('Hi my Name is', true));




//Task4

function wordCounter2(sentence) {
  let arrayOfSentences = sentence.split(' ');
  let elements = arrayOfSentences.reduce(function(newValue, elem) {
    newValue[elem] = newValue[elem] ? newValue[elem] + 1 : 1;
    return newValue;
  }, {});
  return elements;
};
console.log('Task4 ', wordCounter2('Both Java and Java Script is programming and programming OOPBased Language'));



//Task5

let listOfCompanys = [
  {
    company: 'ASIMILINE',
    name: {
      last: 'Watkins',
      first: 'Lindsay',
    },
    eyeColor: 'brown',
    age: 20,
    picture: 'http://placehold.it/32x32',
    balance: '$1,091.09',
    isActive: true,
    guid: '294814e3-4c89-428f-b0c9-da5c4c37ea5e',
    index: 0,
    _id: '584babb6eeb4137cf14c37a3',
  },
  {
    company: 'ENJOLA',
    name: {
      last: 'Price',
      first: 'Greene',
    },
    eyeColor: 'brown',
    age: 39,
    picture: 'http://placehold.it/32x32',
    balance: '$3,533.55',
    isActive: true,
    guid: 'e7b0824f-d6d1-4a82-b2c5-cd7a1ec8310c',
    index: 1,
    _id: '584babb6c7be9c2398ed263f',
  },
  {
    company: 'ZINCA',
    name: {
      last: 'Robertson',
      first: 'Barbara',
    },
    eyeColor: 'brown',
    age: 22,
    picture: 'http://placehold.it/32x32',
    balance: '$1,395.22',
    isActive: false,
    guid: '0735d8d9-a165-4ad1-893f-e821da37bf63',
    index: 2,
    _id: '584babb6cca4dbefa6001820',
  },
  {
    company: 'TALKOLA',
    name: {
      last: 'Cooke',
      first: 'Lea',
    },
    eyeColor: 'blue',
    age: 31,
    picture: 'http://placehold.it/32x32',
    balance: '$3,074.16',
    isActive: false,
    guid: '7d13cbc4-6b4d-4954-b3d3-df3cfe5f2373',
    index: 3,
    _id: '584babb6391a2b568f1e9416',
  },
  {
    company: 'GEEKKO',
    name: {
      last: 'Webb',
      first: 'Kline',
    },
    eyeColor: 'blue',
    age: 34,
    picture: 'http://placehold.it/32x32',
    balance: '$1,520.21',
    isActive: false,
    guid: '2b179de0-a659-4423-b3c4-11c6490e5c74',
    index: 4,
    _id: '584babb66d6ea73e8ed51208',
  },
];

function createHashTags(arr) {
  let ogj = arr.reduce(function(newValue, elem, index, arr) {
    let elemKey = elem._id;
    let elemValue = elem.company;
    newValue[elemKey] = elemValue;
    return newValue;
  }, {});
  return ogj;
}

console.log('Task5 ',createHashTags(listOfCompanys));

//@ SUPER1
let notUniqArray = [1, 1, 2, 2, 2, 5, 10, 25, 30, 5, 1, 0, 22, 3, 10, 3];

function uniqueElements(arr) {
  let uniqueElements = [];
  nextInput:
    for (let i = 0; i < arr.length; i++) {
      let initialElem = arr[i];
      for (let k = 0; k < uniqueElements.length; k++) {
        if (uniqueElements[k] == initialElem) {
          continue nextInput;
        };
      };
      uniqueElements.push(initialElem);
    };
  return uniqueElements;
};

console.log('SUPER1 ',uniqueElements(notUniqArray));


//@ SUPER2
let array = [1, -1, 0, 15, -59, 7];
function filter(callback, arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(!callback(arr[i])) {
      continue;
    };
    newArr.push(arr[i]);
  };
  return newArr;
};

let res = function exampleCallbackFunction(value) {
  return value < 0;
};

console.log('SUPER2 ', filter(res, array));