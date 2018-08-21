class User {
	constructor(user) {
		this.user = user;
		this.createEditContacts = this.createEditContacts.bind(this);
		this.deleteContact = this.deleteContact.bind(this);
	};

	showUser() {
		return `
	        <img src="user_img.png" alt="#" class=" user-img img-circle center-block">
	        <div class="user-name ${this.user.id}">${this.user.name} ${this.user.lastName}</div>
		`;
	};

	lineOptions() {
		let open = '<div class="options-line">';
		let optionsLine = options.reduce((start, elem) => {
			start += `
	          	<div class="${elem.option}">
	            	<div class= "options-icon"><span class="icon glyphicon ${elem.class}" aria-hidden="true"></span></div>
	            	<span class = "options-text">${elem.option}</span>
	          	</div>
			`;
			return start;
		}, '');
		let resOption = `${open} ${optionsLine}</div>`;
		return resOption;
	};

	telNumber() {
		return `
	       	<div class="tel-number">
	          <h4>mobile</h4>
	          <div>${this.user.phone}</div>
	        </div>
	        <div class="tel-number">
	          <h4>home</h4>
	          <div> - - - - </div>
	        </div>
		`;
	};

	tableOption() {
		let open = '<div class="options-table">';
		let optionsTable = additionalOptions.reduce((start, elem) => {
			start += `<div class ="options-item"><a href="#">${elem}</a></div>`;
			return start;
		}, '');
		let buttonEdit = `<button class="buttonEdit"> edit contact user </button>`
		let resOptionTable = `${open} ${optionsTable}</div> ${buttonEdit}`;
		return resOptionTable;
	};

	createEditContacts() {
    let editContacts = new EditContact(this.user);
    editContacts.renderEditContact();
  };

	deleteContact() {
    alert('Are you sure you want to delete this user?');
    let url = `${API_URL}/${self.user.id}`;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    });
  };

	addEvents() {
		let buttonEdit = document.querySelector('button.buttonEdit');
		buttonEdit.addEventListener('click', this.createEditContacts);
		let buttonDel = document.querySelector('button.remove-btn');
		buttonDel.addEventListener('click', this.deleteContact);
	};

	renderUser() {
		let captionUser = document.querySelector('.container.top-radius');
		captionUser.innerHTML = `
	      	<nav class="user-top-line">
	        	<a href="user.html">Cancel</a>
	        	<button  type = "submit" form = "edit-contact" formaction="#" formmethod="get" class = "remove-btn">Remove</button>
	      	</nav>
		`;
		let mainContainer = document.querySelector('main .container');
		mainContainer.innerHTML = `${this.showUser()}${this.lineOptions()}${this.telNumber()}${this.tableOption()}`;
		this.addEvents();
	};
	
};
