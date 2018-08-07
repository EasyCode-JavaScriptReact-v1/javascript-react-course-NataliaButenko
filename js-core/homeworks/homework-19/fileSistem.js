const fs = require('fs');

fs.readdir('./', (err, date) => {
	console.log(date);
	const src = fs.readdirSync('./src');
	console.log(src);
})

//console.log(fs.readFileSync('./index.html').toString());