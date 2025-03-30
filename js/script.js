// 1
// const processArray = (array, callback) => 
//     callback(array);

// const getSum = arr => arr.reduce((acc, curr) => acc + curr, 0);
// const getMin = arr => Math.min(...arr);
// const getMax = arr => Math.max(...arr);
const numbers = [3, 7, 1, 9, 4];
const processArray = (array, callback) => {callback(array)}
;
const getSum = function(arr) {return arr.reduce((acc, curr) => acc + curr, 0)}
const getMin = function(arr) {return Math.min(...arr)}
const getMax = function(arr) {return Math.max(...arr)}

console.log("Сума:", processArray(numbers, getSum));
console.log("Мінімальне значення:", processArray(numbers, getMin));
console.log("Максимальне значення:", processArray(numbers, getMax))
// 2
const operate = (a, b, callback) => {
    callback(a, b);
};

console.log(operate(10, 5, function(a, b){ return a - b}));
console.log(operate(10, 5, function(a, b){ return a + b}));
console.log(operate(10, 5, function(a, b){ return a * b}));
console.log(operate(10, 5, function(a, b){ return a / b}));