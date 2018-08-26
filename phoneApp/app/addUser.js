import {basicUserInfo, additionalUserInfo} from "./constants";
import {API_URL} from './constants';
import User from './user';

class AddUser {

  	fieldsBasicAddUserInfo() {
  		let open = '<div class="main-info-holder">';
  		let addPhoto = `
        	<div class="edit-foto">
          		<button class="add-foto-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
            	<span>add foto</span></button>
        	</div>
  		`;
  		let editBasicField = basicUserInfo.reduce((start, elem) => {
          start +=`
            <div class="edit-field add-btn">
            			<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
            			<input type="text" class="glyphicon-plus-sign ${elem.fieldName}" placeholder="${elem.placeholder}"/>
								
            </div>
          `;
  			return start;
  		},'');
  		let resEditBasicField = `${addPhoto} ${open} ${editBasicField}</div>`;
  		return resEditBasicField;
  	};

  	fieldAdditionalAddUserInfo() {
  		let open = `
        	<div class="scroll-holder">
          		<div class="edit-info">
  		`;
  		let editAdditionalField = additionalUserInfo.reduce((start, elem) => {
       /* let addClass =  elem.replace(/\s/g, '_');*/
  			start += `
            	<div class="edit-field add-btn">
              	<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                	<input type="text" class="glyphicon-plus-sign ${elem.fieldName}" placeholder="${elem.placeholder}"/>
            	</div>
  			`;
  			return start;
  		}, '');
  		let buttonDelContacts = `
            <div class="edit-field">
              	<button href="#" class="delete-contact">delete contact</button>
            </div>
  		`;
  		let resEditAdditionalField = `${open} ${editAdditionalField}${buttonDelContacts}</div>`;
  		return resEditAdditionalField;
  	};

    addEvents() {
      let delEnteredData = document.querySelector('button.delete-contact');
      delEnteredData.addEventListener('click', function() {
        let input = document.querySelectorAll('input[placeholder]');
        [...input].forEach(elem => {
          elem.value = '';
        })
      });
      let addUser = document.querySelector('button.done-btn');
      addUser.addEventListener('click', function() {
        let input = document.querySelectorAll('input[placeholder]');
      	let objUser = [...input].reduce((done, elem) => {
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

        fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(objUser)
        })
          .then(response => response.json())
          .then(data => {
            let user = new User(data);
            user.renderUser();
          })
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

export default AddUser;
