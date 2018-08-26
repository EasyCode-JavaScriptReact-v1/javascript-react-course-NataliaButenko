class HeaderAndFooter {
	constructor(caption) {
		this.caption = caption;
	};

	createHeader() {
		let header = `
		  	<header class="header">
    			<div class="container top-radius">
      				<h2>${this.caption}</h2>
    			</div>
  			</header>
  		`;
  		return header;
	};

  renderLink({href, icon}) {
    return `
				<a href="${href}" class="tab ${href}">
						 <span class="glyphicon glyphicon-${icon}" aria-hidden="true"></span>
							<span class = "tab-text">${href}</span>
				</a>
			`;
  };

  createFooter() {
    return `
			<footer class="footer">
					<div class="container bottom-radius">
							<nav class="main-nav">
							${ this.renderLink({ href:'Contacts', icon: 'search' }) }
							${ this.renderLink({ href:'Keypad', icon: 'th' }) }
							${ this.renderLink({ href:'Edit contact',  icon: 'pencil' }) }
							${ this.renderLink({ href:'User',  icon: 'user' }) }
							${ this.renderLink({ href:'Add user',  icon: 'plus' }) }
							</nav>
				 <div>
			</footer> 
			`;
  };

	createMain() {
		return `
		  	<main class="main">
    			<div class="container">
    			</div>
  			</main>
    	`;
	};

	renderTemplate() {
		document.body.innerHTML = this.createHeader() + this.createMain() + this.createFooter();
	};

};

export default HeaderAndFooter;
