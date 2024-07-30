const add = function(num1, num2) {
	return num1+num2
};

const subtract = function(num1, num2) {
	return num1-num2
};

const sum = function(array1) {
	if (array1.length === 0) {
    return 0;
  } 
  return array1.reduce((a, b) => a + b);
};

const multiply = function(array1) {
  return array1.reduce((a, b) => a * b, 1);
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(array) {
	return array!==0 ? array * factorial(array-1) : 1
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
