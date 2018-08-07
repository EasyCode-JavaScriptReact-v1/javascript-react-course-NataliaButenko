class Keypad {
	constructor() {
		this.buttonsContent = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
	};

	createNumberField() {
		return `
      		<div class="number">
        		<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
        		<span class ="numbers"></span>
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
		this.addListeners();
	};

	addListeners() {
		let keypadHolder = document.querySelector('div.keypad-holder');
  		keypadHolder.addEventListener('click', function(e) {
    		if(e.target.tagName === 'BUTTON') {
    			let input =  document.querySelector('span.numbers');
    			if(input.textContent.length === 0) {
    				input.textContent += `(${e.target.textContent}`;
    			} else if(input.textContent.length === 4) {
    				input.textContent += `)-${e.target.textContent}`;
    			} else if(input.textContent.length === 8) {
    				input.textContent += `-${e.target.textContent}`;
    			} else if(input.textContent.length === 11) {
    				input.textContent += `-${e.target.textContent}`;
    			} else if(input.textContent.length > 14) {
    				return;
    			} else {
    				input.textContent += e.target.textContent;
    			}
    // 			console.log(input.textContent.length);
				// input.textContent += e.target.textContent;	
    		};
  		});
  		let deletNum = document.querySelector('.glyphicon-circle-arrow-left');
  		deletNum.addEventListener('click', function(e) {
  			let input =  document.querySelector('span.numbers');
  			input.textContent = input.textContent.slice(0, -1);
  		});
	};

};
