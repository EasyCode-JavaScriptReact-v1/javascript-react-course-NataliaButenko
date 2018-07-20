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
class UsersContacts {
	constructor() {
		this.dataUsers = [
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
		this.columnHeadings = ['Name', 'Last name', 'Email'];
	};

	render() {
		let insert = document.querySelector('main > div');
		insert.appendChild(this.createTable());
	};

	createNewElement(newElem) {
		return document.createElement(newElem);
	};

	createTable() {
		let table = this.createNewElement('table');
		table.setAttribute('class', 'table table-hover contacts');
		table.appendChild(this.cteateTheadInTable());
		table.appendChild(this.cteateTbodyInTable());
		return table;
	};

	cteateTheadInTable() {
		let thead = this.createNewElement('thead');
		let tr = this.createNewElement('tr');
		thead.appendChild(tr);
		this.columnHeadings.forEach((elem) => {
			let th = this.createNewElement('th');
			th.textContent = elem;
			tr.appendChild(th);
		});
		return thead;
	};

	cteateTbodyInTable() {
		let tbody = this.createNewElement('tbody');
		//table.appendChild(tbody);
		this.dataUsers.forEach((elem) => {
		let tr = this.createNewElement('tr')
		tbody.appendChild(tr);
		let arrObjkeys = Object.keys(elem);
		arrObjkeys.forEach((elemTd) => {
			let td = this.createNewElement('td');
			td.textContent = elem[elemTd];
			tr.appendChild(td);
			});
		});
		return tbody;
	};	
};

let usersContacts = new UsersContacts();
usersContacts.render();