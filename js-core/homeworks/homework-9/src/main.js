//Task1
let developer1 = {
  skills: ['JavaScript', 'linux', 'html', 'OOP', 'Node.js'],
  requirements: ['Node.js', 'JavaScript', 'OOP'],
  goodDev: goodDev
};
let developer2 = {
  experience: [
    { technology: 'java' },
    { technology: 'c++' },
    { technology: 'aws' },
    { technology: 'docker' }
  ],
  requirements: ['java', 'json', 'c++', 'JavaScript'],
  goodDev: goodDev
};

function goodDev (dev) {
	let developerRequirements = this.requirements;
	if(this.skills) {
		let developerSkills = this.skills;
		developerRequirements.forEach((initialElem) => {
			let comparison = developerSkills.some((developerSkills) => {
				for(let key in developerSkills) {
					return developerSkills == initialElem 
				};
				return initialElem == developerSkills;
			});
			if (comparison) {
				console.log( `required: ${initialElem} ...success`);
			} else {
				console.log( `required: ${initialElem} ...fail`);
			};
		});
	} else if(this.experience) {
		let developerExperience = this.experience;
		developerRequirements.forEach((initialElem) => {
			let comparison = developerExperience.some((developerExperience) => {
				for(let key in developerExperience) {
					return developerExperience[key] == initialElem; 
				};
				return initialElem == developerExperience;
			});
			if (comparison) {
				console.log( `Task1---> required: ${initialElem} ...success`);
			} else {
			console.log( `Task1---> required: ${initialElem} ...fail`);
			};
		});
	};
};

developer1.goodDev();
developer2.goodDev();


//Task2
let myObject = {
  database: [
    { age: 100, name: 'b' },
    { age: 15, name: 'c' },
    { age: 25, name: 'a' }
  ]
};

myObject.myFilter = function(param) {
	let tmp  = [...this.database];
	let fnSort = function (arg1, arg2) {
		return arg1[param] > arg2[param];
	};
	return tmp.sort(fnSort);
};

console.log('Task2--->', myObject.myFilter('age'));
console.log('Task2--->', myObject.myFilter('name'));

myObject.myFilter2 = function(param) {
	let fnSort = function (arg1, arg2) {
		return arg1[param] > arg2[param];
	};
	return this.database.sort(fnSort);
};

// {age:15, name:'c'}, {age:25, name:'a'} {age:100, name:'b'}
console.log('Task2--->', myObject.myFilter2('age'));

// {age:25, name:a}, {age:100, name: b} ...
//console.log('Task2--->', myObject.myFilter2('name'));


//Task3
//1
let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];
let arr2 = ['a', 0, 0, 'b', null, 'c', 'd', 0, 1,
  false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9];

let moveZeroToEnd = (arr) => {
  let arrayWithoutZeros = [];
  let arrZero = [];
  arr.forEach((elem) => {
  	if(elem != 0) {
  		arrayWithoutZeros.push(elem);
  	};
  	if (elem === 0) {
      arrZero.push(elem);
    };
  });
  let newArr = arrayWithoutZeros.concat(arrZero);
  return newArr;
};

console.log('Task3---> Задание 1 --> нули в конце массива ', moveZeroToEnd(arr1));
console.log('Task3---> Задание 1 --> нули в конце массива ', moveZeroToEnd(arr2));

let moveZeroToEnd2 = (arr) => {
  return arr.filter((elem) => elem != 0).concat(arr.filter((elem) => elem === 0));
};
console.log('Task3---> Задание 1 --> нули в конце массива ', moveZeroToEnd2(arr1));
console.log('Task3---> Задание 1 --> нули в конце массива ', moveZeroToEnd2(arr2));

//2
let arrayOfNumbers = [1,200,10,1,1,25,15];
//let arrayOfNumbers = [10,20,30,1,31,11,10];
//let arrayOfNumbers = [-1,0,25];
//let arrayOfNumbers = [-4,-10,25,10];

let minNamber = (arr) => {
  	let min = arr[0];
 	arr.forEach((elem) => {
  		if(elem < min) {
  			min = elem;
  		}; 
  	});
  	return min;
};

let addTwoMin = (arr) => {
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

console.log('Task3---> Задание 2 --> Сумма двух минимальных в массиве ',addTwoMin(arrayOfNumbers));


//3
let strNameShuffler ='Arnold Schwarzenegger';
let nameShuffler = (str) => {
  let arrStr = str.split(' ');
  let arrStrReverse = arrStr.reverse();
  return arrStrReverse.join(' ');
};
console.log('Task3---> Задание 3', nameShuffler(strNameShuffler));


//4
//let arrCapMe = ['jo', 'nelson', 'jurie'];
let arrCapMe = ['KARLY', 'DANIEL', 'KELSEY'];
let capMe = (arr) => {
  let resArrCapMe = arr.map((elem) =>{
    let elemArr = elem;
    let firstCapitalLetter = elemArr.charAt(0).toUpperCase();
    let theRestSmall = elemArr.slice(1, elemArr.length).toLowerCase();
    let concatVersion = firstCapitalLetter.concat(theRestSmall);
    return concatVersion;
  });
  return resArrCapMe;
};
console.log('Task3---> Задание 4', capMe(arrCapMe));

//@SUPER 2
 let firstArray1 = [25,10,[10,[15]]];

let changeArr = (arr) => {
  if (Array.isArray(arr)) {
    return arr.reduce((done,curr) => {
      return done.concat(changeArr(curr));
    }, []);
  } else {
    return arr;
  };
};

console.log('Task3--->', changeArr(firstArray1));
