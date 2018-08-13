class EditContact {
	constructor(user) {
		this.user = user;
		this.basicUserInfo = ['First Name', 'Last Name', 'Company'];
		this.additionalUserInfo = [
			'phone', 'add home phone', 'add email', 'add address', 'add birthday', 'add social profile', 'add field'
		];
	};

	fieldsBasicUserInfo() {
		let open = '<div class="main-info-holder">';
		let editBasicField = this.basicUserInfo.reduce((start, elem) => {
			start += `
          		<div class="edit-field">
            		<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
              			<span>${elem}</span>
            		</button>
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
        	if(elem === 'phone') {
        		start += `
        		<div class="edit-field">
            		<button href="#" class="delete-btn"><span class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span>
              			<span>${elem}</span>
              			<span>+38 (063) 733 44 55</span>
            		</button>
          		</div>
          		`;
        	} else {
	        	start += `
	        	    <div class="edit-field">
	            		<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
	              			<span>${elem}</span>
	            		</button>
	          		</div>
	        	`;
        	};
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
	};

};
