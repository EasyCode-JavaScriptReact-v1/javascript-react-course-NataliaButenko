let user = {
	surname: 'Бутенко',
	name: 'Наталья',
	phoneNumber: {
		homePhone: 111111111111,
		workPhone: [222222222222, 333333333]
	},
	email: 'nnnnnnn@gmail.com',
	address: {
		country: 'Украина',
		city: 'Харьков',
		street: 'Валентиновская',
		house: 11,
		apartment: undefined,
	},
	avatarChecked: false,
	job: null
}

console.log(user);
console.log(user.name / user.homePhone);
console.log(user.address.house / 0);
