function func(num) {
	num = num || 3;
	return num * num;
}

var i = 0;

function fancRecursion() {
	console.log(i++);
	if (i<=10){
		fancRecursion();
	}
}

var arr = [1, 2, 3, 4, 5];

function last(arr) {
	document.write(arr.pop() + '<br>');
	if (arr.length > 0){
		last(arr);
	}
}

last(arr);