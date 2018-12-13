// принимает число и возвращает массив его делителей
function getDivisors(num) {
	var arr = [];
	for (var i = 0; i <= num; i++){
		if (num%i == 0) {
			arr.push(i);
		}
         
	}
	return arr;
}

//проверяет есть ли в массиве элемент с таким значением или нет
function inArray(value, arr) {
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] == value) {
			return true;
		}
	}

	return false;
}

var arr1 = [1,2,3];
var arr2 = [2,3,4];
// параметрами будет принимать два массива и возвращать массив элементов,
// которые есть и в одном, и во втором массиве
function getIntersection(arr1, arr2){
	var newarr = [];
	for ( var i = 0; i < arr1.length; i++){
		if (inArray(arr1[i], arr2)){
			newarr.push(arr1[i]);
		}
	}
    return newarr;
}

function getGreatestCommonDivisor(num1, num2) {
	var divisors = getIntersection(getDivisors(num1),getDivisors(num2)); //['2','3','6']
	return Number(Math.max.apply(null, divisors));
}

console.log(getGreatestCommonDivisor(12, 18));

