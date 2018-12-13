var str = 'var_text_hello';

var arr = str.split('_').join('');

function sub(a,b){
	var newstr = arr.substr(a,b);
	return newstr;
}

console.log(sub(0, 3) + sub(3, 1).toUpperCase() + sub(4, 3) + sub(7, 1).toUpperCase() + sub(8));
