//Task1

let randomString = 'aaa b a w c ';

let user = {
  name: 'Albina',
};

let javaScript = {
  html: 'JavaScript',
};

function countLetterA(str) {
  let counter = 0;
  let arrStr = str.split('');
  arrStr.forEach(function(elem, index, arr) {
    if (elem === 'a') {
      counter++;
    };
    return counter;
  });
  return counter;
};

console.log('Task1 ', countLetterA(randomString));
console.log('Task1 ', countLetterA(javaScript.html + user.name));



//Task2

function reverseEachWord(str) {
  let arrStr = str.split(' ');
  let newArrStr = [];
  arrStr.forEach(function(elem, index, arr) {
    let arrElem = elem.split('');
    let reversElemInArr = arrElem.reverse();
    let reversElemInString = reversElemInArr.join('');
    newArrStr.push(reversElemInString);
  });
  return newArrStr.join(' ');
};

console.log('Task2 ', reverseEachWord('You don\'t have to do anything special to begin using the DOM. Different browsers have different implementations of the DOM'));
console.log('Task2 ', reverseEachWord('The Document Object Model (DOM) is a programming interface for HTML and XML documents'));



//Task3

function reverseEachWord2(str, boolean) {
  let arrStr = str.split(' ');
  let newArrStr = [];
  arrStr.forEach(function(elem, index, arr) {
    let arrElem = elem.split('');
    let reversElemInArr = arrElem.reverse();
    let reversElemInString = reversElemInArr.join('');
    newArrStr.push(reversElemInString);
  });
  if (boolean === true) {
    newArrStr.reverse();
  };
  return newArrStr.join(' ');
};

console.log('Task3 ', reverseEachWord2('The Document Object Model (DOM) is a programming interface for HTML and XML documents', true));
console.log('Task3 ', reverseEachWord2('Hi my Name is', false));
console.log('Task3 ', reverseEachWord2('Hi my Name is', true));




//Task4

function wordCounter(sentence) {
  let arrayOfSentences = sentence.split(' ');
  let elements = arrayOfSentences.reduce(function(newValue, elem, index, arr) {
    let initialElem = elem;
    let counter = 0;
    arrayOfSentences.forEach(function(elem, index, arr) {
      if (initialElem === elem) {
        counter++;
      };
    });
    newValue[initialElem] = counter;
    return newValue;
  }, {});
  return elements;
};

console.log('Task4 ', wordCounter('Both Java and Java Script is programming and programming OOPBased Language'));




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

//@ SUPER2