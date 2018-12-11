//принимат число, а возвращает массив цифр
function getDigits(num) {
	return String(num).split('');
}
//принимает массив и возвращающает сумму элементов этого массива
function arreySum(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++){
		sum += Number(arr[i]);
	}
    return sum;
}
//которая параметром принимает число и возвращает true, 
//если сумма цифр этого числа от 1 до 9, и false - если это не так
function inRange(num) {
	var sum = arreySum(getDigits(num));

	return sum > 1 && sum < 9;
}
//запишем в новый массив только те элементы, сумма цифр в которых от 1 до 9
var arr = [12, 19, 28, 13, 14, 345];
var result = [];

for (var i = 0; i < arr.length; i++){
	if (inRange(arr[i])){
		result.push(arr[i]);
	}
}

console.log(result);

//дан массив с числами, найдем сумму всех цифр из этих чисел.
var sum = 0;

for (var i = 0; i < arr.length; i++){
	sum += arreySum(getDigits(arr[i]));
}
console.log(sum);