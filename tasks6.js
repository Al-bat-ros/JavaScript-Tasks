var str =  'var_test_text';
var arr = str.split('_');

for (var i = 0; i < arr.length; i++){
	arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
}
var result = arr.join('');
document.write(result);
