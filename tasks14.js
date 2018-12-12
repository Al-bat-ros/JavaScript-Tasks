var arr = [1,2,3,4,5,6,7,8,9];

function getDigitsSum(num) {
	var s = String(num).split('');
	var sum = 0;
	  for (var i = 0; i < s.length; i++) {
           sum += Number(s[i]);
	  }
    return sum;
}

function isEven(num) {
	return num%2 == 0;
}
var result = [];
for ( var i = 0; i < arr.length; i++){
   if (isEven(arr[i])){
   	result.push(arr[i]);
   }
}

console.log(result);
