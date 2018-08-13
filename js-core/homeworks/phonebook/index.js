class PhoneApp {
	constructor() {
		this.dataBase = [
        	{id:1, name:'Vasya', phone:'qweqwe'},
        	{id:6, name:'Vasya', phone:'qweqwe'},
        	{id:3, name:'Vasya', phone:'qweqwe'},
        	{id:8, name:'Vasya', phone:'qweqwe'},
        	{id: 10, name: 'Tom2', phone: '0995385'},
        	{id: 10, name: 'Anita', phone: '0995305385'},
        	{id: 12, name: 'Anita', phone: '9995305385'}
    	]
	};

	checkForNumbers(phone) {
		let arrPhone = phone.split('');
		let numberArrPhone = arrPhone.map((elem) => {
			return parseInt(elem);
		});
		let validNumber = numberArrPhone.some((elem) => {
			return isNaN(elem)
		}); 
		if(validNumber) {
			// console.error('Телефонный номер должен содержать только цифры');
			return false;
		} else {
			//console.log('Телефонный номер вылидный');
			return true;
		};
	};

	transformNumber(phone) {
		if(this.checkForNumbers(phone)){
			let arrPhone = phone.split('');
			arrPhone.splice(0, 0, '(');
			arrPhone.splice(4, 0, ')', ' ');
			arrPhone.splice(8, 0, '-');
			arrPhone.splice(11, 0, '-');
			return arrPhone.join('');
		} else {
			return 'Телефонный номер должен содержать только цифры';
		};
	};

	addUser(id, name, phone) {
		let objUser = {
			id,
			name
		};
		if(this.checkForNumbers (phone)) {
			objUser.phone = phone;
			this.dataBase.push(objUser);
		} else {
			console.log('Введите коренктный номер')
		};
	};

	removeUserByName(name) {
		let indexDelete = this.dataBase.findIndex((elem) => {
			return elem.name === name;
		});
		if(indexDelete === -1) {
			console.log('Нет такого пользователя');
		} else {
			this.dataBase.splice(indexDelete, 1);
		};
	};

	searchByName(value) {
		let newArr = [];
		this.dataBase.forEach((elem) => {
			if(elem.name == value) {
				newArr.push(elem)
			};
		});
		newArr.forEach((elem) => {
			console.log('Поиск по имени --->', elem);
		});
	};

	changeUserData(initialUser, value) {
		let arr = this.dataBase;
		arr.forEach((elem) =>{
			for(let key in elem) {
				if(elem[key] == initialUser) {
					elem[key] = value;
				};
			};
		});
	};

	sortingUsers(value) {
		function compare(a, b) {
			return a[value] > b[value];
		};
		let tmp = this.dataBase.sort(compare);
		console.log('Сортировка пользователей по заданному свойству --->', tmp);
	};
};
let phoneApp = new PhoneApp();
console.log('проверенный и преобразованый номер --->', phoneApp.transformNumber('0995305385'));
console.log('номер не прошедший проверку --->', phoneApp.transformNumber('099530)5385'));
phoneApp.addUser(3, 'Natalia', '0995305300');
phoneApp.removeUserByName('Tom2');
phoneApp.searchByName('Natalia');
phoneApp.changeUserData(3, 5);
phoneApp.sortingUsers('id');
