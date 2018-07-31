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

	createForm() {
		return `
		    <form class="form-inline search-form">
		        <div class="form-group">
		          	<label class="sr-only" for="search">Search</label>
		          	<input type="text" class="form-control" id= "search" placeholder="Search">
		        </div>
		    </form>
		`
	};

	createTable() {
		let self = this;
		let thead = function() {
			let openThead = `
				<thead>
          			<tr>
			`;
			let createThead = self.columnHeadings.reduce((start, elem) => {
				start += `<th>${elem}</th>\n`
				return start;
			}, '');
			let resultThead = openThead + `${createThead}</tr></thead>`;
			return resultThead;
		}
		let tbody = function() {
			let openTbody = `
				<tbody>
			`
			let createTbody = self.dataUsers.reduce((start, elem) => {
				start += `
					<tr>
           				<td>${elem.name}</td>
            			<td>${elem.lastName}</td>
            			<td>${elem.email}</td>
          			</tr>
				`
				return start;
			}, '');
			let resultTbody = openTbody + `${createTbody}</tbody>`;
			return resultTbody;
		}
		let resultTable = `
			<table class="table table-hover contacts">
				${thead()}
				${tbody()}
			</table>
		`
		return resultTable;
	}

	addForm() {
		let mainContainer = document.querySelector('main .container');
		mainContainer.innerHTML += `${this.createForm()}${this.createTable()}`;
	}
};

let usersContacts = new UsersContacts();
usersContacts.addForm();