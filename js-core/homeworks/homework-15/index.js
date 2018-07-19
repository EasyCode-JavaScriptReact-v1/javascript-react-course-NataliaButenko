// TASK 1
const solution = str => {
	let regExpLetter = /[a-z]/g;
	let regExpNunber = /[0-9]/;
	if(str.search(regExpNunber) === 0){
		return false;
	};
	if(str.search(regExpLetter) === 0) {
		let arrFromRegExp = str.match(regExpLetter);
		let newArrWithoutRepetition = [];
		for(let i = 0; i < arrFromRegExp.length; i++) {
			for(let k = 0; k < newArrWithoutRepetition.length; k++) {
				if(newArrWithoutRepetition[k] == arrFromRegExp[i]) {
					newArrWithoutRepetition.splice(k, 1);
				};
			};
			newArrWithoutRepetition.push(arrFromRegExp[i]);
		};
		if(newArrWithoutRepetition.length === 26 ) {
			return true;
		} else{
			return false;
		};
	};
};

console.log('Task1 ---> ', solution("wyyga"));//false
console.log('Task1 ---> ', solution("qwertyuioplkjhgfdsazxcvbnm")); //true
console.log('Task1 ---> ', solution("ejuxggfsts")); //false
console.log('Task1 ---> ', solution("qpwoeirutyalskdjfhgmznxbcv")); //true
console.log('Task1 ---> ', solution("qqqqqqqqpwoeirutyallskkdjfhgmmznxbcv")); //true
console.log('Task1 ---> ', solution("0123456789abcdefghijklmnop")); //false



//TASK2
const flatten = arr => {
	let arr2 = [];
	arr.forEach((elem) => {
		if(!Array.isArray(elem)) {
			arr2.push(elem);
		} else {
			arr2 = arr2.concat(flatten(elem));
		};
	});
	return arr2;
};

console.log('Task2 ---> ', flatten([1, [2, [ {a: "b", c: 'd' }, { c: [1, 2, 5] } ] ] ]));
console.log('Task2 ---> ', flatten([[1,2],[3,[4]],5, 10]));
console.log('Task2 ---> ', flatten([25, 10, [10, [15]]]));




//Task3
const dataUsers = [
	{
		name: 'Иван',
		lastName: 'Петров',
		email: 'IvanPetrov@ec.ua' 
	},
	{
		name: 'Сергей',
		lastName: 'Сергей',
		email: 'SergeiSergeev@ec.ua' 
	},
	{
		name: 'Иван',
		lastName: 'Иванов',
		email: 'IvanIvanov@ec.ua' 
	},
	{
		name: 'Александр',
		lastName: 'Александров',
		email: 'AlexAlex@ec.ua'
	},
	{
		name: 'Алекс',
		lastName: 'Смирнов',
		email: 'AlexSmirnov@ec.ua'
	},
	{
		name: 'Сергей',
		lastName: 'Волков',
		email: 'VolkovSergey@ec.ua' 
	},
	{
		name: 'Мария',
		lastName: 'Шарапова',
		email: 'MariyaSharapova@ec.ua' 
	},
	{
		name: 'Александр',
		lastName: 'Винник',
		email: 'AlexVinnik@ec.u'  
	},
	{
		name: 'Дарий',
		lastName: 'Смирнов',
		email: 'DariySmirnov@ec.ua' 
	},
	{
		name: 'Елена',
		lastName: 'Лещенко',
		email: 'ElenaLeshenko@ec.ua' 
	},
	{
		name: 'Ольга',
		lastName: 'Новикова',
		email: 'OlgaNovikova@ec.ua' 
	},
	{
		name: 'Наталья',
		lastName: 'Шемякина',
		email: 'ShemyakinaN@ec.ua' 
	},
	{
		name: 'Анна',
		lastName: 'Донцова',
		email: 'AnnaDontsova@ec.ua' 
	},
	{
		name: 'Влад',
		lastName: 'Яма',
		email: 'VladYama@ec.ua' 
	},
	{
		name: 'Кира',
		lastName: 'Воробьева',
		email: 'Kira1990@ec.ua' 
	},
	{
		name: 'Виктор',
		lastName: 'Кривенко',
		email: 'ViktorKriv@ec.ua' 
	}	
];

const columnHeadings = ['Name', 'Last name', 'Email'];

function render() {
	let createNewElement = function(newElem) {
		return document.createElement(newElem);
	};
	let table = createNewElement('table');
	table.setAttribute('class', 'table table-hover contacts');
	let insert = document.querySelector('main > div');
	let thead = createNewElement('thead');
	table.appendChild(thead);
	let tr = createNewElement('tr');
	thead.appendChild(tr);
	columnHeadings.forEach((elem) => {
		let th = createNewElement('th');
		th.textContent = elem;
		tr.appendChild(th);
	});
	let tbody = createNewElement('tbody');
	table.appendChild(tbody);
	dataUsers.forEach((elem) => {
		let trInTbody = createNewElement('tr')
		tbody.appendChild(trInTbody);
		let arrObjkeys = Object.keys(elem);
		arrObjkeys.forEach((elemTd) => {
			let td = createNewElement('td');
			td.textContent = elem[elemTd];
			trInTbody.appendChild(td);
		});
	});
	return insert.appendChild(table);
};

render();
