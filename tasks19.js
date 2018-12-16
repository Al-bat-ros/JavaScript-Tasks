/*
function func(num) {
	num = num || 3;
	return num * num;
}
*/
/*
var i = 0;

function fancRecursion() {
	console.log(i++);
	if (i<=10){
		fancRecursion();
	}
}
*/
/*
var arr = [1, 2, 3, 4, 5];

function last(arr) {
	document.write(arr.pop() + '<br>');
	if (arr.length > 0){
		last(arr);
	}
}
*/
/*
var arr1 = [1,2,3,4,5,6,7,8,9,0];

function funcArrRecurs(arr){
	document.write(arr[i]);
	si++;
   if 

}


funcArrRecurs(arr1);
*/
/*
var arr2 = [10,20,30,40,50,60,70,80,90,100];

function recNum(arr) {
	console.log(arr.shift());
	if (arr.length > 0){
		recNum(arr2);
	}

}

recNum(arr2);
*/

var num = 123;

var arr = String(num).split('');
var sum = 0;
for (var i = 0; i < arr.length; i++){
        sum += Number(arr[i]);
}

console.log(sum);