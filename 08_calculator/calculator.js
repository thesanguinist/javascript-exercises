const add = function(num1, num2) {
	result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
	result = num1 - num2;
  return result;
};

const sum = function(array) {
  let accumulator = 0;
  let index = 0;
  let result = array.reduce((accumulator, index) => accumulator + index);
//  for(let index = 0; index < array.length; index++){
//    if (array.length == 1){
//      result = array[0];
//    } else
//  result += array[i];
  return result;
};

const multiply = function(array) {

};

const power = function(num1, num2) {
	
};

const factorial = function(num) {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
