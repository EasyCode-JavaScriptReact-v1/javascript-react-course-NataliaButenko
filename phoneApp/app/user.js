import {options, additionalOptions} from "./constants";
import EditContact from "./editContact";
import {API_URL} from './constants';
import UsersContacts from "./userContacts";

class User {
	constructor(user) {
	  Object.keys(user).forEach(key => {
	    if(key === '_id') {
	      this['id'] = user[key];
      } else {
        this[key] = user[key];
      }
    });
		this.createEditContacts = this.createEditContacts.bind(this);
		this.deleteContact = this.deleteContact.bind(this);
	};

	get name() {
	  return this.fullName.split(' ')[0];
  }

  get lastName() {
    return this.fullName.split(' ')[1];
  }

	showUser() {
		return `
	        <img src="user_img.png" alt="#" class=" user-img img-circle center-block">
	        <div class="user-name ${this.id}">${this.name} ${this.lastName}</div>
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
	          <h4>Mobile phone</h4>
	          <div>${this.phone}</div>
	        </div>
	        <div class="tel-number">
	          <h4>Email</h4>
	          <div>${this.email}</div>
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
    let editContacts = new EditContact(this);
    editContacts.renderEditContact();
  };

	deleteContact() {
    alert('Are you sure you want to delete this user?');
    let url = `${API_URL}/${this.id}`;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(() => {
        let contacts = new UsersContacts();
        contacts.loadData();
      })
  };

	addEvents() {
		let buttonEdit = document.querySelector('button.buttonEdit');
		buttonEdit.addEventListener('click', this.createEditContacts);
		let buttonDel = document.querySelector('button.remove-btn-user');
		buttonDel.addEventListener('click', this.deleteContact);
	};

	renderUser() {
		let captionUser = document.querySelector('.container.top-radius');
		captionUser.innerHTML = `
	      	<nav class="user-top-line">
	        	<a href="user.html">Cancel</a>
	        	<button  type = "submit" form = "edit-contact" formaction="#" formmethod="get" class = "remove-btn-user">Remove</button>
	      	</nav>
		`;
		let mainContainer = document.querySelector('main .container');
		mainContainer.innerHTML = `${this.showUser()}${this.lineOptions()}${this.telNumber()}${this.tableOption()}`;
		this.addEvents();
	};
	
};

export default User;
