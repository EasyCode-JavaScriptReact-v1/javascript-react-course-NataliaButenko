//Task1 (hw12 ---> task1)
class Http {
	constructor() {
		this.ctx = {
			req: {
 				PORT: 'number',
 				url: 'string'
 			},
 			res: {
  				status: 'number',
 				message: 'string',
 				header: {
  					content_type: 'application/json'
        		}
        	}
  		},
  		this.next = () => {}
	};

	createServer(fn) {
		this.createServerCallback = fn;
		return this;
	};
	listen(PORT, host) {
		console.log(`Server running on https://${host}:${PORT}`);
		this.createServerCallback(this.ctx, this.next);
	};
};

const server = new Http().createServer(function(ctx, next) {
  console.log(ctx);
}).listen(3000, 'localhost');


//Task2

class DataBase {
	constructor() {
		this.idSetTimeout;
	};

	time() {
		clearTimeout(this.idSetTimeout);
		this.idSetTimeout = setTimeout(function(){
				console.log('The web server is down');
		}, 5000);
	};

	query() {
		this.time();
	};
};

const dataBase = new DataBase();
dataBase.query();