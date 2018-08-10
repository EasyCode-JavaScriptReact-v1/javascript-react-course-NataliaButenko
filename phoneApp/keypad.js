class Keypad {
	constructor() {
		this.buttonsContent = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
	};

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
		let createButtons = this.buttonsContent.reduce((start, elem) => {
			start += `<button class="key">${elem}</button>`
			return start;
		}, '');
		let createButtonCall = 
			'<button class="key"> <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button>';
		let resKeypadHolder = `${open}${createButtons}${createButtonCall}</div>`
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

	addEvents() {
		let keypadHolder = document.querySelector('div.keypad-holder');
  		keypadHolder.addEventListener('click', function(e) {
    		if(e.target.tagName === 'BUTTON') {
    			let input =  document.querySelector('input.numbers');
    			if(input.value.length === 0) {
    				input.value += `(${e.target.textContent}`;
    			} else if(input.value.length === 4) {
    				input.value += `)-${e.target.textContent}`;
    			} else if(input.value.length === 8) {
    				input.value += `-${e.target.textContent}`;
    			} else if(input.value.length === 11) {
    				input.value += `-${e.target.textContent}`;
    			} else if(input.value.length > 14) {
    				return;
    			} else {
    				input.value += e.target.textContent;
    			};	
    		};
  		});
  		let deletNum = document.querySelector('.glyphicon-circle-arrow-left');
  		deletNum.addEventListener('click', function(e) {
  			let input =  document.querySelector('input.numbers');
  			input.value = input.value.slice(0, -1);
  		});
  		let input = document.querySelector('input.numbers');
  		input.onkeypress = function(event) {
  			if((event.charCode >= 48 && event.charCode <=57) || event.charCode == 42 || event.charCode == 35) {
    			if(input.value.length === 0) {
    				input.value += `(${event.target.textContent}`;
    			} else if(input.value.length === 4) {
    				input.value += `)-${event.target.textContent}`;
    			} else if(input.value.length === 8) {
    				input.value += `-${event.target.textContent}`;
    			} else if(input.value.length === 11) {
    				input.value += `-${event.target.textContent}`;
    			} else if(input.value.length > 14) {
    				return false;
    			} else {
    				input.value += event.target.textContent;
    			};
  			} else {
  				return false;
  			};
		};
		let addNum = document.querySelector('.glyphicon-plus-sign');
		addNum.addEventListener('click', function(e) {
			let addUser = new AddUser();
			addUser.renderAddUser();
			let placeNum = document.querySelector('.add_mobile_phone');
			placeNum.innerHTML = `
				<span>
				+38 ${input.value}
				</span>
			`;
		});
	};

};
