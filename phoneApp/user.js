class User {
	constructor() {
		this.options = [
			{option: 'message', class: 'glyphicon-comment'},
			{option: 'call', class: 'glyphicon-earphone'},
			{option: 'video', class: 'glyphicon-facetime-video'},
			{option: 'mail', class: 'glyphicon-envelope'}
		];
		this.additionalOptions = [
			'Notes', 'Send message', 'Share contact', 'Add to favorites', 'Share my location', 'Block this caller'
		];
	};

	showUser() {
		return `
	        <img src="user-face-mini.png" alt="#" class=" user-img img-circle center-block">
	        <div class="user-name">User Name</div>
		`;
	};

	lineOptions() {
		let open = '<div class="options-line">';
		let optionsLine = this.options.reduce((start, elem) => {
			start += `
	          	<div class="${elem.option}">
	            	<div class= "options-icon"><span class="icon glyphicon ${elem.class}" aria-hidden="true"></span></div>
	            	<span class = "options-text">${elem.option}</span>
	          	</div>
			`;
			return start;
		}, '');
		let resOption = open + `${optionsLine}</div>`;
		return resOption;
	};

	telNumber() {
		return `
	       	<div class="tel-number">
	          <h3>mobile</h3>
	          <div> +38 (093) 989 89 89</div>
	        </div>
	        <div class="tel-number">
	          <h3>home</h3>
	          <div> +38 (093) 989 89 89</div>
	        </div>
		`;
	};

	tableOption() {
		let open = '<div class="options-table">';
		let optionsTable = this.additionalOptions.reduce((start, elem) => {
			start += `<div class ="options-item"><a href="#">${elem}</a></div>`;
			return start;
		}, '');
		let resOptionTable = open + `${optionsTable}</div>`;
		return resOptionTable;
	};

	renderUser() {
		let captionUser = document.querySelector('.container.top-radius');
		captionUser.innerHTML = `
	      	<nav class="user-top-line">
	        	<a href="user.html">Cansel</a>
	        	<button  type = "submit" form = "edit-contact" formaction="#" formmethod="get" class = "done-btn">Done</button>
	      	</nav>
		`;
		let mainContainer = document.querySelector('main .container');
		mainContainer.innerHTML = `${this.showUser()}${this.lineOptions()}${this.telNumber()}${this.tableOption()}`;
	};
	
};
