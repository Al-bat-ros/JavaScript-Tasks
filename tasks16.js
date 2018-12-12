
function getDivisors(num) {
	var arr = [];
	for (var i = 0; i <= num; i++){
		if (num%i == 0) {
			arr.push(i);
		}
         
	}
	return arr;
}

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

function getIntersection(arr1, arr2){
	var newarr = [];
	for ( var i = 0; i < arr1.length; i++){
		if (inArray(arr1[i], arr2)){
			newarr.push(arr1[i]);
		}
	}
    return newarr;
}
console.log(getIntersection(arr1,arr2));

