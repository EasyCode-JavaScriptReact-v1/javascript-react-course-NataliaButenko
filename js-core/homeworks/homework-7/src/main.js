//Task1
function add(arg1) {
	return function (arg2) {
		return function (arg3) {
			return arg1 = arg1 + arg2 + arg3;
		};
	};
};

console.log('Task1 ', add(1)(2)(3)); // 6
console.log('Task1 ', add(10)(5)(15)); // 30



//Task2
function patternModule() {
	let count = 0;
	return {
		method: function () {
			return count += 1;
		},
		setToZero: function() {
			return count = 0;
		}
	};
};

//patternModule

let test = patternModule(); // 0
console.log('Task2 ', test.method()); //1
console.log('Task2 ', test.method()); //2
console.log('Task2 ', test.method()); //3
console.log('Task2 ', test.setToZero());
console.log('Task2 ', test.method());




//Task3
let jun = {};

function methodCounter(obj, name, num, fn) {
	let counter = 0;
	obj[name] = function(...args) {
		if(counter < num) {
			counter += 1;
			return `Call number ${counter}, sum of arguments = ${fn(args)}`;
		} else {
			return 'ERROR ! add more methods';
		}
	}
};

methodCounter(jun, 'logger', 2, function (args) {
	let sumArgs = 0;
	for (let i = 0; i < args.length; i++) {
		sumArgs = sumArgs + args[i];
	};
	return sumArgs;
});

console.log('Task3 ', jun.logger(1, 2, 3, 4)); // 2, 10
console.log('Task3 ', jun.logger(5, 5, 5, 5)); // 1, 20
console.log('Task3 ', jun.logger(5, 5)); // ERROR ! add more methods

//Super
let jun2 = {};

function methodCounter2(obj, name, num, fn) {
	let counter = num;
	obj[name] = function(...args) {
		if(counter > 0) {
			counter -= 1;
			return `Call number ${counter + 1}, sum of arguments = ${fn(args)}`;
		} else {
			return 'ERROR ! add more methods';
		};
	};
	obj.addCounter = function(initialCounter) {
		return counter = initialCounter;
	};
};

let methodName = methodCounter2(jun2, 'logger', 2, function (args) {
	let sumArgs = 0;
	for (let i = 0; i < args.length; i++) {
		sumArgs = sumArgs + args[i];
	};
	return sumArgs;
});
console.log('Super ', jun2.addCounter(10, methodName));
console.log('Super ', jun2.logger(1, 2, 3, 4));
console.log('Super ', jun2.logger(1, 2, 3, 4)); 
console.log('Super ', jun2.logger(1, 2, 3, 4)); 
console.log('Super ', jun2.logger(1, 2, 3, 4)); 
console.log('Super ', jun2.logger(1, 2, 3, 4)); 
console.log('Super ', jun2.logger(1, 2, 3, 4)); 
console.log('Super ', jun2.logger(1, 2, 3, 4)); 
console.log('Super ', jun2.logger(1, 2, 3, 4)); 
console.log('Super ', jun2.logger(1, 2, 3, 4)); 
console.log('Super ', jun2.logger(1, 2, 3, 4)); 
console.log('Super ', jun2.logger(1, 2, 3, 4)); 
console.log('Super ', jun2.logger(1, 2, 3, 4));
console.log('Super ', jun2.addCounter(3, methodName)); 
console.log('Super ', jun2.logger(1, 2, 3, 4));
console.log('Super ', jun2.logger(1, 2, 3, 4));
console.log('Super ', jun2.logger(1, 2, 3, 4));
console.log('Super ', jun2.logger(1, 2, 3, 4));

//Задачи: 

function factorial(n) {
	if(n > 1) {
		return n * factorial(n - 1);
	};
	return n
};
console.log(factorial(5));


function sumToRecursion(n) {
	if(n > 1) {
		return n + factorial(n - 1);
	};
	return n;
};
console.log(sumToRecursion(4));



function sumToCycle(n) {
	let k = n;
	for (let i = 1; i < k; i++) {
		n = n + (k - i);
	};
	return n;
};
console.log(sumToCycle(4));



function sum (arg1) {
	return function (arg2) {
		return arg1 + arg2;
	};
};
console.log(sum(5)(-1));



function makeBuffer() {
	let buffer = '';
	return function (value) {
		if(value == undefined) {
			return buffer;
		};
		return buffer = buffer + value;
	};
};
let buffer = makeBuffer();
console.log(buffer(1));
console.log(buffer(2));
console.log(buffer(3));
console.log(buffer());




function makeBuffer2() {
	let buff = '';
	function buffer2 (value) {
		if(value == undefined) {
			return buff;
		};
		return buff = buff + value;
	};
	buffer2.clear = function () {
		buff = '';
	};
	return buffer2;
};
let buffer2 = makeBuffer2();

buffer2("Тест");
buffer2(" тебя не съест ");
console.log( buffer2() ); // Тест тебя не съест

buffer2.clear();
console.log( buffer2() );




let users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

function byField(field) {
	return function (a, b) {
		return a[field] > b[field]? 1: -1;
	};
};

users.sort(byField('name'));
users.forEach(function(user) {
	console.log( user.name );
}); // Вася, Маша, Петя

users.sort(byField('age'));
users.forEach(function(user) {
	console.log( user.name );
}); // Маша, Вася, Петя
