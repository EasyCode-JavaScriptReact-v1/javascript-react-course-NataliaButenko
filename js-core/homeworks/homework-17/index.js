// TASK 0
const solution = arr => {
	let newArr = [];
	let lastElem = arr[arr.length - 1];
	arr.pop();
	let tmp = function(arr) {
		let index;
		let leader = arr[0];
		for(let i = 0; i < arr.length; i++) {
			if(arr[i] >= leader) {
				leader = arr[i];
				index = i;
			};
		};
		newArr.push(leader);
		arr.splice(0, (index + 1));
		if(arr.length > 1) {
			tmp(arr);
		};
	};
	tmp(arr);
	newArr.push(lastElem);
	return newArr;
};

console.log(solution([16, 17, 4, 3, 5, 2])); // === [17, 5, 2]
console.log(solution([4, 3, 7, 12, 6, 67, 5, 45, 34, 35, 2, 8])); // [67, 45, 35, 8]
console.log(solution([12, 10, 12, 8, 7, 6])); // [12, 8, 7, 6]
console.log(solution([1, 2, 3, 4, 5, 4])); // [5, 4]
console.log(solution([12, 12, 12])); // [12, 12]


//TASK1
class Carousel {
	constructor() {
		this.arrImg = ["bestsportcar170.jpg", "Acura-NSX-2016-2017-02.jpg", "ferrari_667_171011.jpg"];
		this.count = 0;
		this.img = document.querySelector("img");
		this.nextButton = document.querySelector("button.next");
		this.previousButton = document.querySelector("button.previous");
		this.numberImg = document.querySelector("span");
	};

	onclickNext() {
		let pointer = this;
		pointer.nextButton.onclick = function() {
			if(pointer.count === (pointer.arrImg.length - 1)) {
				pointer.count = -1;
			}
			pointer.img.src = pointer.arrImg[++pointer.count];
			pointer.numberImg.textContent = pointer.count + 1;
		};
	};

	onclickPrevious() {
		let pointer = this;
		pointer.previousButton.onclick = function() {
			if(pointer.count <= 0) {
				pointer.count = pointer.arrImg.length;
			};
			pointer.img.src = pointer.arrImg[--pointer.count];
			pointer.numberImg.textContent = pointer.count + 1;
		};
	};

	buttonOperation() {
		this.onclickNext();
		this.onclickPrevious();
	}
};
let carousel = new Carousel();
carousel.buttonOperation();



//Task2
class AddStyle {
	topStyle(selector, objCssStyle) {
		let resultCssStr = `<style> .${selector} { `;
		let styleArr = Object.keys(objCssStyle);
		let propertiesCssString = styleArr.reduce((done, elem) => {
			return done + `${convertingCssProperties(elem)}: ${objCssStyle[elem]};\n`;
		}, '');
		resultCssStr += propertiesCssString + '</style>';
		let head = document.head.innerHTML;
		document.head.innerHTML += resultCssStr;
	};
};

let addStyle = new AddStyle();
addStyle.topStyle('fetch', {backgroundColor:'blue'});


function convertingCssProperties(str) {
	let regExp = /[A-Z]/;
	let index = str.search(regExp);
	let substring = function(str) {
		if(index !== -1) {
			return `-${str[index].toLowerCase()}`;
		};
	};	
	let convertingStr = str.replace(regExp, substring(str));
	return convertingStr;
};



//Super
function liquidCss(str) {
	let regExp = /-[a-z]/;
	let index = str.search(regExp);
	let liquidCss = str.replace(regExp, str[index + 1].toUpperCase());
	return liquidCss;
};
console.log(liquidCss('background-color'));
console.log(liquidCss('margin-left'));
console.log(liquidCss('flex-basis'));
