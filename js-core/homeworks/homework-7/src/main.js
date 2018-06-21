//Task1
function add(arg1) {
	let value1 = arg1;
	return function (arg2) {
		let value2 = arg2;
		return function (arg3) {
			let value3 = arg3;
			return value1 = value1 + value2 + value3;
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