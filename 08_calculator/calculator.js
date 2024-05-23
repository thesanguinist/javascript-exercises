const add = function(num1, num2) {
	result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
	result = num1 - num2;
  return result;
};

const sum = function(array) {
  let result = 0;
  for(arr of array){
  result += arr;
  }
  return result;
};

const multiply = function(array) {
  let result = 1;
for (let arr of array){
  result *= arr;
} return result;
};

const power = function(num1, num2) {
	let result = 1;
  for (let i = 0; i <= num2 -1; i++){
    result *= num1;
  }return result;
};

const factorial = function(num) {
  let result = 1;
	for(let i = num; i > 0; i--){
    result *= i;
  }return result;
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
