class HeaderAndFooter {
	constructor(caption) {
		this.caption = caption;
		this.renderLink = [
			{content:'Contacts', icon: 'search'},
			{content:'Keypad', icon: 'th'},
			{content:'Edit contact', icon: 'pencil'},
			{content:'User', icon: 'user'},
			{content:'Add user', icon: 'plus'}
		];
	}

	createHeader() {
		let header = `
		  	<header class="header">
    			<div class="container top-radius">
      				<h2>${this.caption}</h2>
    			</div>
  			</header>
  		`
  		return header;
	}

	createFooter() {
		let done = `
		<footer class="footer">
    		<div class="container bottom-radius">
      			<nav class="main-nav">
      	`
      	let testIndexHtml = function(str) {
      		if(str === 'Contacts') {
      			return 'index';
      		} else {
      			return str;
      		}
      	}

      	let contentNav = this.renderLink.reduce((start, elem) => {
      		start += `
      		    <a href="${testIndexHtml(elem.content)}.html" class="tab ${elem.content}">
          			<span class="glyphicon glyphicon-${elem.icon}" aria-hidden="true"></span>
          			<span class = "tab-text">${elem.content}</span>
        		</a>
      		`
      		return start;
      	}, done);

      	let footer = contentNav + '</nav>\n </div>\n </footer>';
    	return footer;
	}

	createMain() {
		return `
		  	<main class="main">
    			<div class="container">
    			</div>
  			</main>
    	`
	}

	createTemplate() {
		document.body.innerHTML = this.createHeader() + this.createMain() + this.createFooter();
	}
};
let headerAndFooter = new HeaderAndFooter('Contacts');
headerAndFooter.createTemplate();


let buttonKeypad = document.querySelector('a.Keypad');
buttonKeypad.onclick = function(e) {
  e.preventDefault();
  let keypad = new Keypad();
  keypad.displayKeypad();
}