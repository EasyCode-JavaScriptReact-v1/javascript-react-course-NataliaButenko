//Task 0

function solution(str) {
	let regExp = /[A-Z]/g;
	let arrFromString = str.split('');
	let convertedArr = arrFromString.reduce((done, elem, index) => {
		if(regExp.test(elem) && index !== 0) {
			done.push('_');
		}
		done.push(elem);
		return done;
	}, []);
	let convertedStr = convertedArr.join('');
	let newConvertedStr = convertedStr.replace(/::_/g, "/").replace(/-/g, "");
	return newConvertedStr.toLowerCase();
};

console.log(solution("ActiveModel::Errors"));
console.log(solution("HelloHowAreYou"));
console.log(solution("MyNAMEIsBOND-JamesBond"));
console.log(solution("MAINCompany::BEST-MAINUser"));



alert('ddddd');

const box = document.querySelector('.box');

box.addEventListener('mousedown', (event) => {
	console.log('mouse down');
	box.style.backgroundColor = 'red';

	const mousemove = (event) => {
		console.log(event.pageX);
		const widthOfBox = box.offsetWidth / 2;
		const heightOfBox = box.offsetHeight / 2; 
		box.style.left = event.pageX - widthOfBox + 'px';
		box.style.top = event.pageY - heightOfBox + 'px';
	}

	const mouseup = (event) => {
		console.log('mouse up');
		box.style.backgroundColor = 'blue';
		box.removeEventListener('mousemove', mousemove);
		box.removeEventListener('mouseup', mouseup);
	};

	box.addEventListener('mousemove', mousemove);

	box.addEventListener('mouseup', mouseup);
	box.ondragstart = (event) => false;
});

