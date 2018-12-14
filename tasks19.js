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
fancRecursion();