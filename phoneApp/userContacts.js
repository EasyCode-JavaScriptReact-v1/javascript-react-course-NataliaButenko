class UsersContacts {
	constructor() {
		//this.dataUsers = [
		// {
		// 	name: 'Иван',
		// 	lastName: 'Петров',
		// 	email: 'IvanPetrov@ec.ua' 
		// },
		// {
		// 	name: 'Сергей',
		// 	lastName: 'Сергей',
		// 	email: 'SergeiSergeev@ec.ua' 
		// },
		// {
		// 	name: 'Иван',
		// 	lastName: 'Иванов',
		// 	email: 'IvanIvanov@ec.ua' 
		// },
		// {
		// 	name: 'Александр',
		// 	lastName: 'Александров',
		// 	email: 'AlexAlex@ec.ua'
		// },
		// {
		// 	name: 'Алекс',
		// 	lastName: 'Смирнов',
		// 	email: 'AlexSmirnov@ec.ua'
		// },
		// {
		// 	name: 'Сергей',
		// 	lastName: 'Волков',
		// 	email: 'VolkovSergey@ec.ua' 
		// },
		// {
		// 	name: 'Мария',
		// 	lastName: 'Шарапова',
		// 	email: 'MariyaSharapova@ec.ua' 
		// },
		// {
		// 	name: 'Александр',
		// 	lastName: 'Винник',
		// 	email: 'AlexVinnik@ec.u'  
		// },
		// {
		// 	name: 'Дарий',
		// 	lastName: 'Смирнов',
		// 	email: 'DariySmirnov@ec.ua' 
		// },
		// {
		// 	name: 'Елена',
		// 	lastName: 'Лещенко',
		// 	email: 'ElenaLeshenko@ec.ua' 
		// },
		// {
		// 	name: 'Ольга',
		// 	lastName: 'Новикова',
		// 	email: 'OlgaNovikova@ec.ua' 
		// },
		// {
		// 	name: 'Наталья',
		// 	lastName: 'Шемякина',
		// 	email: 'ShemyakinaN@ec.ua' 
		// },
		// {
		// 	name: 'Анна',
		// 	lastName: 'Донцова',
		// 	email: 'AnnaDontsova@ec.ua' 
		// },
		// {
		// 	name: 'Влад',
		// 	lastName: 'Яма',
		// 	email: 'VladYama@ec.ua' 
		// },
		// {
		// 	name: 'Кира',
		// 	lastName: 'Воробьева',
		// 	email: 'Kira1990@ec.ua' 
		// },
		// {
		// 	name: 'Виктор',
		// 	lastName: 'Кривенко',
		// 	email: 'ViktorKriv@ec.ua' 
		// }	
		//];
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
		`;
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
		};
		let tbody = function() {
			let openTbody = `
				<tbody>
			`;
			let createTbody = dataUsers.reduce((start, elem) => {
				start += `
					<tr data-uid="${elem.id}">
           				<td>${elem.name}</td>
            			<td>${elem.lastName}</td>
            			<td>${elem.email}</td>
          			</tr>
				`;
				return start;
			}, '');
			let resultTbody = openTbody + `${createTbody}</tbody>`;
			return resultTbody;
		};
		let resultTable = `
			<table class="table table-hover contacts">
				${thead()}
				${tbody()}
			</table>
		`;
		return resultTable;
	};

	sort() {
		let table = document.querySelector('.table');

		table.addEventListener('click', function(e) {
			if(e.target.tagName === 'TH') {
        sortTable(e.target.cellIndex, e.target.textContent);
			} else if(e.target.tagName === 'TD') {
				let id = e.target.parentNode.dataset.uid;
				let obj;
				for(let i = 0; i < dataUsers.length; i++) {
					if(dataUsers[i].id === id) {
						obj = dataUsers[i];
					}
				};
				let user = new User(obj);
				user.renderUser()
			} else {
				return;
			};
		});

		function sortTable(colNum, caption) {
		  	let tbody = table.getElementsByTagName('tbody')[0];
		  	let rowsArray = [].slice.call(tbody.rows);
		  	let compare;

		  	switch (caption) {
		   	 	case 'Name':
		      	compare = function(rowA, rowB) {
					if(rowA.cells[colNum].textContent < rowB.cells[colNum].textContent) {
						return -1;
					};
		    		if(rowA.cells[colNum].textContent > rowB.cells[colNum].textContent) { 
		    			return 1;
		    		};
		    		return 0;
		      	};
		      	break;
		    case 'Last name':
		      	compare = function(rowA, rowB) {
					if(rowA.cells[colNum].textContent < rowB.cells[colNum].textContent) {
						return -1;
					};
		    		if(rowA.cells[colNum].textContent > rowB.cells[colNum].textContent) { 
		    			return 1;
		    		};
		    		return 0;
		      	};
		      	break;
		    case 'Email':
		      	compare = function(rowA, rowB) {
					if(rowA.cells[colNum].textContent < rowB.cells[colNum].textContent) {
						return -1;
					};
		    		if(rowA.cells[colNum].textContent > rowB.cells[colNum].textContent) { 
		    			return 1;
		    		};
		    		return 0;
		      	};
		      	break;
		  	};

			rowsArray.sort(compare);
		  	table.removeChild(tbody);
		  	for (let i = 0; i < rowsArray.length; i++) {
		   	 	tbody.appendChild(rowsArray[i]);
		  	};
		  	table.appendChild(tbody);
		};		
	};

	renderForm() {
		let mainContainer = document.querySelector('main .container');
		mainContainer.innerHTML = `${this.createForm()}${this.createTable()}`;
		this.sort();
	};

	loadData() {
    fetch(API_URL)
      .then(user => {
        return user.json();
      })
      .then(userJson => {
      	let newUsers = userJson.map((elem) => {
      		return {
      			email: elem.email,
            name: elem.fullName.split(' ')[0],
            lastName: elem.fullName.split(' ')[1],
						id: elem._id,
						phone: elem.phone,
					}
				});
        dataUsers = newUsers;
        this.renderForm();
      });
	};
	
};