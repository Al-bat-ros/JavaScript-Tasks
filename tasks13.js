
var arr = [1, 2, 3, -1, -2, -3];

function isPositive(num){
	return num >= 0;
}

var newArr = [];

for ( var i = 0; i < arr.length; i++){
	if (isPositive(arr[i])){
      newArr.push(arr[i]);
	}

}
console.log(newArr);