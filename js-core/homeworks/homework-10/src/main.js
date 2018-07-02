//Task0
let y = 5; //объявлена глобальная переменная 'y' со значением 5
let x = () => y; //объявлена стрелочная функция 'x' без аргументов которая возвращает 'y', тоесть 5

let z = t => { //объявлена стрелочная функция 'z' с аргументом 't'
  let y = 5;   //oбъявлена локальная переменная 'y' со значением 5
  t();     // 't' это колбек функция которую вызвали
};
console.log(y); //выводит в консоль глобальную переменную 'y' объявленую в 2 строке, соответственно выведет 5

z(x); // что вернет  //вызываем функцию 'z' с параметром 'x' который является функцией и возвращает глобальную переменную 'y'. Сама функция ничего не возвращает. Результатом будет undefined


//Task1
let $ = function(str) {
  return `<${str}></${str}>`;
};

let createBODY = $('body');
let createDIV = $('div');
console.log('Task1 --->', createBODY); // <body></body>
console.log('Task1 --->', createDIV); // <div></div>



// //Task2
// let ezjQuery = {
//  strTag: '',
//  add(str) {
//      return this.strTag = this.strTag + `<${str}></${str}>`;
//  }
// };


// console.log('Task2 --->', ezjQuery.add('body')); // <body></body>
// console.log('Task2 --->', ezjQuery.add('div')); // <body></body><div></div>
// console.log('Task2 --->', ezjQuery.add('h1')); // <body></body><div></div><h1></h1>



//Task3
let ezjQuery = {
  //strTag: '',
  tags: [],
  add(str, text) {
    this.tags.push({tagName: str, text: text || ''});
    return this;
    //return this.strTag = this.strTag + `<${str}></${str}>`;
  },
  render() {
    let strTag = '';
    for(let i = 0; i < this.tags.length; i++) {
      if(this.tags[i].text == '') {
        strTag += `<${this.tags[i].tagName}>`;
      } else {
        strTag += `<${this.tags[i].tagName}>${this.tags[i].text}`;
      };
    };
    for(let i = this.tags.length - 1; i >= 0; i--) {
      strTag += `</${this.tags[i].tagName}>`;
    };
    this.tags = [];
    return strTag;
  }
};

let helloList = ezjQuery
  .add('body') // <body></body>
  .add('div') // <body><div></div></body>
  .add('ul') // <body><div><ul></ul></div></body>
  .add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
  .render();
console.log('Task3 --->', helloList); // <body><div><ul><li>Hello</li></ul></div></body>
document.write(helloList)
//  Обратите внимание, что после вызова render создание строки началось сначала

let bodyDiv = ezjQuery
  .add('body') //<body></body>
  .add('div') //<body><div></div></body>
  .render();
console.log('Task3 --->', bodyDiv); //<body><div></div></body>
