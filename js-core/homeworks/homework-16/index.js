//Task1

const solution = arr => {
	let arrRes = [];
	let arrNumber = [];
	let arrString = [];
	let arr1_2 = [];
	let arr3_4 = [];
	let arr5_6 = [];
	arr.forEach((elemArr) => {
		if (elemArr.length === 2) {
			elemArr.forEach((elem) => {
				if(typeof elem === 'number') {
					arrNumber.push(elem);
				} else if(typeof elem === 'string') {
					arrString.push(elem);
				};
			});
		} else if(elemArr.length === 3) {
			for(let i = 0; i < elemArr.length; i++) {
				if(i === 0) {
					arr1_2.push(elemArr[i]);
				} else if(i === 1) {
					arr3_4.push(elemArr[i]);
				} else if (i === 2) {
					arr5_6.push(elemArr[i]);
				};
			};
			for(let i = 0; i< elemArr[1].length; i++) {
				if(i === 0) {
					arr1_2.push(elemArr[1][i]);
				} else if(i === 1) {
					arr3_4.push(elemArr[1][i]);
				} else if (i === 2) {
					arr5_6.push(elemArr[1][i]);
				};
			};
		};
	});
	if(arr.length === 3) {
		arrRes.push(arrNumber);
		arrRes.push(arrString);
	} else if(arr.length === 2) {
		arrRes.push(arr1_2);
		arrRes.push(arr3_4);
		arrRes.push(arr5_6);
	} else if(arr.length === 1) {
		arrRes.push([]);
	};
	return arrRes;
};


console.log(solution([[1, 'a'], [2, 'b'], [3, 'c']]));
console.log(solution([[1, 3, 5], [2, 4, 6]]));
console.log(solution([[]]));



//Task2
const navigation = [
  	{
  		name: 'Главная'
  	},
 	{
    	name: 'Каталог',
   		children: [
      		{
        		name: 'Компьютеры',
        		children: [{name: 'Ноутбуки'}, {name: 'Планшеты'}]
      		}
    	]
  	},
  	{
  		name: 'Профиль'
  	}
];


// const visualArray = arr => {
// 	let str = '';
// 	arr.forEach(item => {
// 		if(item.children) {
// 			str += `<ul><h1>${item.name}</h1><li>`;
// 			str += visualArray(item.children);
// 			str += '</li></ul>';
// 		} else {
// 			str += `<h1>${item.name}</h1>`;
// 		}
// 	});
// 	return str;
// };
// document.body.innerHTML = visualArray(navigation);



//Task3
let app = {
 	questions: [
		{
			textQuestions:'Какой оператор из этих - выполняет не только математические операции?',
	 		textAnswers: ['*', '-', '+', '/'],
	 		correctAnswer: 2
	 	},
	 	{
	 		textQuestions:'Какие конструкции для циклов есть в javascript?',
	 		textAnswers: ['Только две: for и while', 'Только одна: for', 'Три: for, while и do...while'],
	 		correctAnswer: 2
	 	},
	 	{
	 		textQuestions:'Что такое ECMAScript?',
	 		textAnswers: ['Спецификация языка Javascrip', 'Новый язык программирования', 'Переработанная реализация Javascript'],
	 		correctAnswer: 0
	 	}
 	],
 	createContainer() {
 		let conteiner = document.createElement('article');
 		conteiner.appendChild(this.createCaption());
 		conteiner.appendChild(this.createQuestions());
 		conteiner.appendChild(this.createButton());
 		return conteiner;
 	},
 	createCaption() {
 		let caption = document.createElement('h1');
 		caption.textContent = 'Тест по програмированию';
 		return caption;
 	},
 	createQuestions() {
 		let id = 0;
 		let list = document.createElement('ol');
 		this.questions.forEach((questAnswer, qIndex) => {
 			let question = document.createElement('li');
 			question.textContent = questAnswer.textQuestions;
 			let span = document.createElement('span');
 			question.appendChild(span);
 			let sectionAnswer = document.createElement('section');
 			question.appendChild(sectionAnswer);
 				
				questAnswer.textAnswers.forEach((elem, aIndex) => {
				let idId = id++;
				let answer = document.createElement('p');
				let input = document.createElement('input');
				input.setAttribute('type', 'checkbox');
				input.setAttribute('id', `check${qIndex}-${aIndex}`);
				let label = document.createElement('label');
				label.setAttribute('for', `check${qIndex}-${aIndex}`);
				label.textContent = elem;
				answer.appendChild(input);
				answer.appendChild(label);
				
				sectionAnswer.appendChild(answer);
				question.appendChild(sectionAnswer);
				list.appendChild(question);
				});
 			
 		});
 		return list;
 	},
 	createButton() {
 		let button = document.createElement('button');
 		button.textContent = 'Проверить мои результаты';
 		return button;
 	},
 	render() {
 		document.body.appendChild(this.createContainer());
 	}
};
app.render();  

let button = document.querySelector('button');
button.onclick = function() {
	let questionsLi = document.querySelectorAll('li');
	[...questionsLi].forEach((elemLi, indexQuestion) =>{
		let possibleAnswer = elemLi.querySelectorAll('input');
		[...possibleAnswer].forEach((elem, index) => {
			if(elem.checked) {
				if(index === app.questions[indexQuestion].correctAnswer) {
					let appAnswer = elemLi.childNodes[1];
					appAnswer.setAttribute('style', 'color: #11f91d');
					appAnswer.textContent = ' Верно';

				} else {
					let appAnswer = elemLi.childNodes[1];
					appAnswer.setAttribute('style', 'color: #f70408');
					appAnswer.textContent = ' Неверно';
				}
			}
		})
	})
}
