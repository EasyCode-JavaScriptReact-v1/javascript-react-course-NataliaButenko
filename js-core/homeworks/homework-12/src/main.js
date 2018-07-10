//Task1
let ctx = {
	req: {
		PORT: 'number',
		url: 'string'
	},
	res: {
		status: 'number',
		message: 'string',
		header: {
			content_type: 'application/json'
    	}
    }
};

let next = function() {

};

function Http() {

};

Http.prototype.createServer = function(fn) {
	this.createServerCallback = fn;
	return this;
};

Http.prototype.listen = function(PORT, host) {
	console.log(`Server running on https://${host}:${PORT}`);
	this.createServerCallback(ctx, next);
};

const server = new Http().createServer(function(ctx, next) {
  	console.log(ctx);
}).listen(3000, 'localhost');




//Task2
function Human (name, age, floor, growth, weight) {
    this.name = name,
    this.age = age,
    this.floor = floor,
    this.growth = growth,
    this.weight = weight
};

function Worker (name, age, floor, growth, weight, placeOfWork, salary) {
	Human.apply(this, arguments);
	this.placeOfWork = placeOfWork,
	this.salary = salary,
	this.methodWorker = function () {
		console.log('Work!');
	}
};

function Student (name, age, floor, growth, weight, placesOfStudy, scholarship) {
	Human.apply(this, arguments);
	this.placesOfStudy = placesOfStudy,
	this.scholarship = scholarship,
	this.methodStudent = function () {
		console.log('watch TV shows');
	}
};

Worker.prototype = Object.create(Human.prototype);

let worker1 = new Worker('Natalia', 24, 'woman', 168, 55, 'аптека', 7000);
console.log(worker1);
worker1.methodWorker();
let worker2 = new Worker('Natalia2', 23, 'woman', 167, 54, 'аптека', 7500);
console.log(worker2);
console.log(worker2.name);

Student.prototype = Object.create(Human.prototype);

let student1 = new Student('Natalia', 24, 'woman', 168, 55, 'easyCode', 2000);
console.log(student1);
student1.methodStudent();
let student2 = new Student('Natalia2', 23, 'woman', 167, 54, 'easyCode', 2500);
console.log(student2);
