class EditContact {
	constructor(user) {
		this.user = user;
		this.basicUserInfo = ['First Name', 'Last Name', 'Phone', 'Email'];
		this.additionalUserInfo = [
			'add home phone', 'company', 'add address', 'add birthday', 'add social profile', 'add field'
		];
	};

	fieldsBasicUserInfo() {
		let open = '<div class="main-info-holder">';
		let editBasicField = this.basicUserInfo.reduce((start, elem) => {
			start += `
          		<div class="edit-field add-btn">
            		<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
            		<input type="text" class="glyphicon-plus-sign" placeholder="${elem}"/>
          		</div>
			`;
			return start;
		}, '');
		let resEditBasicField = open + editBasicField + '</div>';
		return resEditBasicField;
	};

	fieldAdditionalUserInfo() {
		let open = `
		<div class="scroll-holder">
        	<div class="edit-info">
        `;
        let editAdditionalField = this.additionalUserInfo.reduce((start, elem) => {
        	start += `
        		<div class="edit-field add-btn">
        			<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
            	<input type="text" class="glyphicon-plus-sign" placeholder="${elem}"/>
        		</div>
        	`;
        	return start;
        },'');
        let buttonDelContacts = `
            <div class="edit-field">
              <button href="#" class="delete-contact">delete contact</button>
            </div>
        `;
        let resEditAdditionalField = open + editAdditionalField + buttonDelContacts + '</div></div>';
        return resEditAdditionalField;
	};

	renderEditContact() {
		let captionEditContact = document.querySelector('.container.top-radius');
		captionEditContact.innerHTML = `
	      	<nav class="user-top-line">
	        	<a href="user.html">Cancel</a>
	        	<button  type = "submit" form = "edit-contact" formaction="#" formmethod="get" class = "done-btn">Done</button>
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
			} else if(elem.placeholder == "Phone") {
        elem.value = this.user.phone;
			} else if(elem.placeholder == "Email") {
        elem.value = this.user.email;
			}
		});
	};

};
