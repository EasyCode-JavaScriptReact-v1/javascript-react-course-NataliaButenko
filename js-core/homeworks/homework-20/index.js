const btn = document.querySelector('button');
const btnAddUser = document.querySelector('.add');
const result = document.querySelector('pre');

const serverRequest = () => {
	const url = 'http://easycode-js.herokuapp.com/Butenko_N/users';
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if(xhr.readyState === XMLHttpRequest.DONE) {
			result.innerHTML = xhr.responseText; 
			console.log(xhr.responseText);
		};
	};
	xhr.open('GET', url, true);
	xhr.send();
};

btn.addEventListener('click', () => {
	serverRequest();
});

const serverAddUser = () => {
	const url = 'http://easycode-js.herokuapp.com/Butenko_N/users';
	const xhr = new XMLHttpRequest();
	xhr.addEventListener('onreadystatechange', () => {
		if(xhr.readyState === XMLHttpRequest.DONE) {
			result.innerHTML = xhr.responseText; 
			console.log(xhr.responseText);
		};
	});
	const user = {
			fullName: 'Виктор Кривенко',
			email: 'ViktorKriv@ec.ua',
		};
	xhr.open('POST', url, true);
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(user));

};

btnAddUser.addEventListener('click', () => {
	serverAddUser();
});