//Task1
function solution1() {
  let str = '';
  return function (someString) {
    return str = str + someString + ' ';
  };
};

let stringBuffer = solution1();

console.log(stringBuffer('Замыкания')); // Замыкания
console.log(stringBuffer('Использовать нужно')); // Замыкания Использовать нужно
console.log(stringBuffer('Привет')); // Замыкания Использовать нужно Привет вызываем много раз 
console.log(stringBuffer('вызываем много раз'));


//Task2
function validBraces(str) {
  let arrStr = str.split('');
  let openingRound = arrStr.filter(function(elem) {
    return elem == '(';
  });
  let closingRound = arrStr.filter(function(elem) {
    return elem == ')';
  });
  let openingCurly = arrStr.filter(function(elem) {
    return elem == '{';
  });
  let closingCurly = arrStr.filter(function(elem) {
    return elem == '}';
  });
  let openingSquare = arrStr.filter(function(elem) {
    return elem == '[';
  });
  let closingSquare = arrStr.filter(function(elem) {
    return elem == ']';
  });
  if (openingRound.length == closingRound.length && 
    openingCurly.length == closingCurly.length &&
    openingSquare.length == closingSquare.length) {
    return true;
  } else {
    return false;
  };
};

console.log(validBraces('(){}[]')); // => returns true
console.log(validBraces('(}')); // => returns false
console.log(validBraces('[(])')); // => returns false
console.log(validBraces('([{}])')); // => returns true
console.log(validBraces('({[]})')); // => returns true




//Super
function memoiz() {
  let cache = {};
  let sum =  function (num) {
    if(num > 1) {

      if(cache[num]){
        console.log('Значение взято из кэш');
        return cache[num];
      };
      let tmp = num + sum(num - 1);
      cache[num] = tmp;
      return tmp;
    };
    console.log('Значение кешировано');
    return num;
  };
  return sum;
};

let sum = memoiz();
console.log(sum(5)); // 15 Значение кешировано
console.log(sum(5)); // 15 Значение взято из кэш
console.log(sum(6)); // 15 Значение взято из кэш
console.log(sum(6));

