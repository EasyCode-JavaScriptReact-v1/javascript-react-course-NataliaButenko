import {basicUserInfo, additionalUserInfo, API_URL, data} from "./constants";
import User from "./user";

class EditContact {
	constructor(user) {
		this.user = user;
	};

	fieldsBasicUserInfo() {
		let open = '<div class="main-info-holder">';
		let editBasicField = basicUserInfo.reduce((start, elem) => {
			start += `
          		<div class="edit-field add-btn">
            		<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
            		<input type="text" class="glyphicon-plus-sign ${elem.fieldName}" placeholder="${elem.placeholder}"/>
          		</div>
			`;
			return start;
		}, '');
		let resEditBasicField = `${open} ${editBasicField} </div>`;
		return resEditBasicField;
	};

	fieldAdditionalUserInfo() {
		let open = `
		<div class="scroll-holder">
        	<div class="edit-info">
        `;
        let editAdditionalField = additionalUserInfo.reduce((start, elem) => {
        	start += `
        		<div class="edit-field add-btn">
        			<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
            	<input type="text" class="glyphicon-plus-sign ${elem.fieldName}" placeholder="${elem.placeholder}"/>
        		</div>
        	`;
        	return start;
        },'');
        let buttonDelContacts = `
            <div class="edit-field">
              <button href="#" class="delete-contact">delete contact</button>
            </div>
        `;
        let resEditAdditionalField = `${open} ${editAdditionalField} ${buttonDelContacts} </div></div>`;
        return resEditAdditionalField;
	};

	addEvents() {
		let self = this;
		let saveChanges = document.querySelector('button.editContacts');
		saveChanges.addEventListener('click', function() {
      let input = document.querySelectorAll('input[placeholder]');
      let objUserForFetch = [...input].reduce((done, elem) => {
        if(elem.className === 'glyphicon-plus-sign email') {
          done.email = elem.value;
        } else if(elem.className === 'glyphicon-plus-sign firstName') {
          done.fullName = `${elem.value} `;
        } else if(elem.className === 'glyphicon-plus-sign lastName') {
          done.fullName += elem.value;
        } else if(elem.className === 'glyphicon-plus-sign phone') {
          done.phone = elem.value;
        };
        return done;
      }, {});

      let url = `${API_URL}/${self.user.id}`;
      fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
				body: JSON.stringify(objUserForFetch)
      })
				.then((user) => {
					return user.json();
				})
        .then(userJson => {
          let userChenges = new User(userJson);
          userChenges.renderUser()
				})
		});
	};

	renderEditContact() {
		let captionEditContact = document.querySelector('.container.top-radius');
		captionEditContact.innerHTML = `
	      	<nav class="user-top-line">
	        	<a href="user.html">Cancel</a>
	        	<button  type = "submit" form = "edit-contact" formaction="#" formmethod="get" class = "done-btn editContacts">Done</button>
	      	</nav>
		`;
		let mainContainer = document.querySelector('main .container');
		mainContainer.innerHTML = `
			<div class="edit-main-info">
 				<div class="edit-foto"><img src="user_img.png" alt="#" class=" user-img img-circle center-block"></div>
					${this.fieldsBasicUserInfo()}
					</div>
					${this.fieldAdditionalUserInfo()}
		`;
    let input = document.querySelectorAll('input.glyphicon-plus-sign');
    [...input].forEach((elem) => {
    	if(elem.placeholder == "First Name") {
    		elem.value = this.user.name;
			} else if(elem.placeholder == "Last Name") {
        elem.value = this.user.lastName;
			} else if(elem.placeholder == "Mobile phone") {
        elem.value = this.user.phone;
			} else if(elem.placeholder == "Email") {
        elem.value = this.user.email;
			};
		});
    this.addEvents();
	};

};

export default EditContact;
