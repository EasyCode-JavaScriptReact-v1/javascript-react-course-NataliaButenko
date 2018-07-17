//TASK 0
//let solution = [12, 23, 34, 12, 12, 23, 12, 45];
let solution = [4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,];
//let solution = [3, 3, 4, 6, 4, 5, 9, 9, 21, 9];
//let solution = [4, 8, 15, 16, 23, 42, 4, 15, 42, 42];
//let solution = [2, 2, 44, 44];

function result(arr) {
	let resArr = [];
	let objNumbers = arr.reduce((done, elem) => {
		if(elem in done) {
			done[elem] += 1;
		} else {
			done[elem] = 1;
		};
		return done;		
	}, {});
	for(let key in objNumbers) {
		if(objNumbers[key] % 2 != 0) {
			resArr.push(+key);
		};
	};	
	return resArr;
};
console.log(result(solution));




//TASK - 1
const someWebpackModule = `module.exports = {
    context: %%HOMEDIR%%,
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

//TASK - 1
let regExpSetpoint = /%%HOMEDIR%%/gmi;
//let regExpSetpoint = /%%APP_DIR%%/gmi;
//let regExpSetpoint = /%%APPNAME%%/gmi;

let regExpRequiredValue = './JavaScript-Basic';
//let regExpRequiredValue = 'fixtures/src';
//let regExpRequiredValue = 'app.js';

function regExpEndParse(str, setpoints, requiredValue) {
	let test = str.replace(setpoints, requiredValue);
	return test;
}

console.log(regExpEndParse(someWebpackModule, regExpSetpoint, regExpRequiredValue));




//Task3
window.onload = function() {
    let app = {
	 	questions: [
 			{textQuestions:'Вопрос №1',
		 	textAnswers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']},
		 	{textQuestions:'Вопрос №2',
		 	textAnswers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']},
		 	{textQuestions:'Вопрос №3',
		 	textAnswers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']}
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
	 		this.questions.forEach((questAnswer) => {
	 			let question = document.createElement('li');
	 			question.textContent = questAnswer.textQuestions;
	 			let sectionAnswer = document.createElement('section');
	 			question.appendChild(sectionAnswer);
	 				
 				questAnswer.textAnswers.forEach((elem) => {
 					let idId = id++;
					let answer = document.createElement('p');
					let input = document.createElement('input');
					input.setAttribute('type', 'checkbox');
					input.setAttribute('id', `check${idId}`); 
					let label = document.createElement('label');
					label.setAttribute('for', `check${idId}`); 
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
};
