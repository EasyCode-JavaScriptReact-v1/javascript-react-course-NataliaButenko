class AddUser {
  	constructor() {
		this.basicUserInfo = ['First Name', 'Last Name', 'Company'];
		this.additionalUserInfo = [
			'add mobile phone', 'add home phone', 'add email', 'add address', 'add birthday', 'add social profile', 'add field'
		];  	
  	};

  	fieldsBasicAddUserInfo() {
  		let open = '<div class="main-info-holder">';
  		let addPhoto = `
        	<div class="edit-foto">
          		<button class="add-foto-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
            	<span>add foto</span></button>
        	</div>
  		`;
  		let editBasicField = this.basicUserInfo.reduce((start, elem) => {
  			start += `
            	<div class="edit-field ">
              		<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                		<span>${elem}</span>
              		</button>
                  <label>
                    <input type="text" class="${elem}"/>
                    <button class="save">s</button>
                    <button class="cancel">c</button>
                  </label>
            	</div>
  			`;
  			return start;
  		},'');
  		let resEditBasicField = addPhoto + open + `${editBasicField}</div>`;
  		return resEditBasicField;
  	};

  	fieldAdditionalAddUserInfo() {
  		let open = `
        	<div class="scroll-holder">
          		<div class="edit-info">
  		`;
  		let editAdditionalField = this.additionalUserInfo.reduce((start, elem) => {
        let addClass =  elem.replace(/\s/g, '_');
  			start += `
            	<div class="edit-field ${addClass}">
              		<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                		<span>${elem}</span>
              		</button>
            	</div>
  			`;
  			return start;
  		}, '');
  		let buttonDelContacts = `
            <div class="edit-field">
              	<button href="#" class="delete-contact">delete contact</button>
            </div>
  		`;
  		let resEditAdditionalField = open + `${editAdditionalField}${buttonDelContacts}</div>`;
  		return resEditAdditionalField;
  	};

    addEvents() {
      let test = document.querySelector('.main-info-holder');
      test.addEventListener('click', function(e) {
        if(e.target.tagName == "BUTTON" || e.target.parentNode.tagName == "BUTTON") {
          let label = document.querySelectorAll('div.edit-field label');
          [...label].forEach((elem) => {
            if(elem.firstElementChild.className == e.target.textContent){
              elem.style.display = 'block';
            };
          });
        };
      });

    }

  	renderAddUser() {
  		let captionAddUser = document.querySelector('.container.top-radius');
  		captionAddUser.innerHTML = `
   			<nav class="user-top-line">
          		<a href="user.html">Cancel</a>
          		<button class = "done-btn">Done</button>
        		</nav>
  		`;
  		let mainContainer = document.querySelector('main .container');
  		mainContainer.innerHTML = `
        		<div class="edit-main-info">
        		${this.fieldsBasicAddUserInfo()}
        		</div>
        		${this.fieldAdditionalAddUserInfo()}
  		`;
      this.addEvents();
  	};
};
