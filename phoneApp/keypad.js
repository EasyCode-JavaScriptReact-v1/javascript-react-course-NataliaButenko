class Keypad {
	constructor() {
		this.buttonsContent = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
	}

	createNumberField() {
		return `
      		<div class="number">
        		<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
        		<span class ="numbers">(050)5005050</span>
        		<span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>
      		</div>
		`
	}

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
	}

	displayKeypad() {
		let caption = document.querySelector('header h2');
		caption.textContent = 'Keypad';
		let contentKeypad = this.createNumberField() + this.createKeypadHolder();
		let mainContainer = document.querySelector('main .container');
		mainContainer.innerHTML = contentKeypad;
	}
};

// let keypad = new Keypad();
// keypad.displayKeypad();
