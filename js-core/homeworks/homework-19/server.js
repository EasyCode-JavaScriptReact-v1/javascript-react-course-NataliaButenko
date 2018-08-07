const http = require('http');
const fs = require('fs');

http.createServer((request, respons) => {
	if(request.url === '/') {
		const index = fs.readFileSync('./index.html');
		respons.end(index);
	} else {
		if(fs.existsSync(`.${request.url}`)) {
			console.log('request.url', request.url);
			const file = fs.readFileSync(`.${request.url}`);
			respons.end(file);
		}
	}
	respons.end('404 not found', 404);

}).listen(3000, (err) => {
	console.log('server started http://localhost:3000');
});