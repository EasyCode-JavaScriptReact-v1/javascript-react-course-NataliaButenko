//task1
let numbers = [25, 1];
let project = 'проект';
let team = `команда`;
let howMuch = 'Сколько';
let sentence = 'нужно программистов чтобы сделать проект ?';

let task1 = `${howMuch} ${sentence} ${numbers[1]}, ${numbers[0]}, ${team}`;
let task1_1 = howMuch + ' ' + sentence + ' ' + numbers[1] + ', ' + numbers[0] + ', ' + team;

console.log(task1);
console.log(task1_1);


//task2
let array = [
  'Он',
  'был больше ни телом, к которому рано или поздно',
  'он обнаружил',
  'не',
  'Так, когда Будда достиг Просветления',
  '...',
  'что больше',
  'ощущает себя мишенью',
  'не'
];

let homeSentence = `${array[4]}, ${array[2]}, ${array[6]} ${array[3]} ${array[7]}.
${array[0]} ${array[8]} ${array[1]} ${array[5]}`;

console.log(homeSentence);


//task3
let myObj = {};
myObj['name'] = 'Natalia';
myObj.surname = 'Butenko';
myObj['age'] = 24;
myObj.experience = false;

console.log(myObj);


//task5
let frameworks = [4.7, 'Angular', '6Angular', 'React/Redux'];
let react = frameworks[frameworks.length - 1];
let angular4 = `${frameworks[1]}${Math.floor(frameworks[0])}`; 
let x =
	'google released ' +
  	'new version' + 
  	' ' +
  	frameworks[1] +
  	Math.floor(frameworks[0]) + 
  	' ' +
  	'But real speed is ' +
  	`${react}`;
let x1 = 
	`google released new version ${angular4} ` + 
	`But real speed is ${react}`;

console.log(x);
console.log(x1);
