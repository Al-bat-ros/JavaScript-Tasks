function ucfirst(str) {
	return str[0].toUpperCase() + str.substr(1);
}


function ucArrFirst(strarr) {
	var arr = strarr.split(' ');
	var strarr = [];
	for (var i = 0; i < arr.length; i++){
     strarr.push(ucfirst(arr[i]));
	}
	return strarr.join(' ');
}

console.log(ucArrFirst('hello world aleksey'));