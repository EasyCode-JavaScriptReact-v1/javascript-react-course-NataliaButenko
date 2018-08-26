import {buttonsContent} from "./constants";
import AddUser from "./addUser";

class Keypad {
  constructor() {
    this.monitorInput = this.monitorInput.bind(this);
    this.keyboardInput = this.keyboardInput.bind(this);
  }

	createNumberField() {
		return `
      		<div class="number">
        		<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
        		<input type ="text" class="numbers">
        		<span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>
      		</div>
		`;
	};

	createKeypadHolder() {
		let open = '<div class="keypad-holder">';
		let createButtons = buttonsContent.reduce((start, elem) => {
			start += `<button class="key">${elem}</button>`;
			return start;
		}, '');
		let createButtonCall = 
			'<button class="key"> <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button>';
		let resKeypadHolder = `${open}${createButtons}${createButtonCall}</div>`;
		return resKeypadHolder;
	};

	renderKeypad() {
		let captionUser = document.querySelector('.container.top-radius');
		captionUser.innerHTML = `<h2>Keypad</h2>`;
		let contentKeypad = this.createNumberField() + this.createKeypadHolder();
		let mainContainer = document.querySelector('main .container');
		mainContainer.innerHTML = contentKeypad;
		this.addEvents();
	};

  convertNumber(str) {
    let input =  document.querySelector('input.numbers');
    if(input.value.length === 0) {
      input.value += `(${str}`;
    } else if(input.value.length === 4) {
      input.value += `)-${str}`;
    } else if(input.value.length === 8) {
      input.value += `-${str}`;
    } else if(input.value.length === 11) {
      input.value += `-${str}`;
    } else if(input.value.length > 14) {
      return;
    } else {
      input.value += str;
    };
  };

  monitorInput(e) {
    if(e.target.tagName === 'BUTTON') {
      this.convertNumber(e.target.textContent);
    };
  };

  keyboardInput(event) {
    event.preventDefault();
    if(event.keyCode >= 48 && event.keyCode <=57) {
      this.convertNumber(event.key);
    };
  };

	addEvents() {
		let keypadHolder = document.querySelector('div.keypad-holder');
  		keypadHolder.addEventListener('click', this.monitorInput);
  		let deletNum = document.querySelector('.glyphicon-circle-arrow-left');
  		deletNum.addEventListener('click', function(e) {
  			let input =  document.querySelector('input.numbers');
  			input.value = input.value.slice(0, -1);
  		});
  		let input = document.querySelector('input.numbers');
  		input.addEventListener('keypress', this.keyboardInput);
		let addNum = document.querySelector('.glyphicon-plus-sign');
		addNum.addEventListener('click', function(e) {
			let addUser = new AddUser();
			addUser.renderAddUser();
			let placeNum = document.querySelector('.Mobile_phone');
			placeNum.value = `+38 ${input.value}`;
		});
	};

};

export default Keypad;
