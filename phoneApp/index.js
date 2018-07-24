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

		document.body.innerHTML += this.createHeader();
		document.body.innerHTML += this.createMain();
		let insert = document.querySelector('main > div');
		insert.appendChild(this.createTable());
		document.body.innerHTML += this.createFooter();
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

	createHeader() {
		return `
			<header class = 'header'>
				<div class = 'container top-radius'>
					<h2>Contacts</h2>
				</div>
			</header>
		`
	};

	createMain() {
		return `
			<main>
				<div class="container">
					<form class="form-inline search-form">
						<div class="form-group">
							<label class="sr-only" for="search">Search</label>
							<input type="text" class="form-control" id= "search" placeholder="Search">
						</div>
					</form>

			</main>		
		`
	}

	createFooter() {
		return `
			<footer class="footer">
				<div class="container bottom-radius">
					<nav class="main-nav">
						<a href="index.html" class="tab active">
							<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
							<span class = "tab-text">Contacts</span>
						</a>
						<a href="keypad.html" class="tab">
							<span class="glyphicon glyphicon-th" aria-hidden="true"></span>
							<span class = "tab-text">Keypad</span>
						</a>
						<a href="edit-contact.html" class="tab">
							<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
							<span class = "tab-text">Edit contact</span>
						</a>
						<a href="user.html" class="tab">
							<span class="glyphicon glyphicon-user" aria-hidden="true"></span>
							<span class = "tab-text">User</span>
						</a>
						<a href="add-user.html" class="tab">
							<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
							<span class = "tab-text">Add user</span>
						</a>
					</nav>
				</div>
			</footer>
		`
	}	
};

let usersContacts = new UsersContacts();
usersContacts.render();