class User {
	constructor(user) {
		this.user = user;
		this.options = [
			{option: 'message', class: 'glyphicon-comment'},
			{option: 'call', class: 'glyphicon-earphone'},
			{option: 'video', class: 'glyphicon-facetime-video'},
			{option: 'mail', class: 'glyphicon-envelope'}
		];
		this.additionalOptions = [
			'Notes', 'Send message', 'Share contact', 'Add to favorites', 'Share my location', 'Block this caller'
		];
	};

	showUser() {
		return `
	        <img src="user_img.png" alt="#" class=" user-img img-circle center-block">
	        <div class="user-name ${this.user.id}">${this.user.name} ${this.user.lastName}</div>
		`;
	};

	lineOptions() {
		let open = '<div class="options-line">';
		let optionsLine = this.options.reduce((start, elem) => {
			start += `
	          	<div class="${elem.option}">
	            	<div class= "options-icon"><span class="icon glyphicon ${elem.class}" aria-hidden="true"></span></div>
	            	<span class = "options-text">${elem.option}</span>
	          	</div>
			`;
			return start;
		}, '');
		let resOption = open + `${optionsLine}</div>`;
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
		let optionsTable = this.additionalOptions.reduce((start, elem) => {
			start += `<div class ="options-item"><a href="#">${elem}</a></div>`;
			return start;
		}, '');
		let buttonEdit = `<button class="buttonEdit"> edit contact user </button>`
		let resOptionTable = open + `${optionsTable}</div> ${buttonEdit}`;
		return resOptionTable;
	};

	addEvents() {
		let self = this;
		let buttonEdit = document.querySelector('button.buttonEdit');
		//console.log(buttonEdit);
		buttonEdit.addEventListener('click', function () {
			let editContacts = new EditContact(self.user);
			editContacts.renderEditContact();
    })

	}

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
