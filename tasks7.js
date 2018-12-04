var a = 'я учу JavaScript';
var str = a.substr(0, 1).toUpperCase()+ a.substr(1);

console.log(str);

var b = 'я учу JavaScript';
var arr = b.split('');
arr[0] = arr[0].toUpperCase();
var result = arr.join('');
console.log(result);

var c = 'я учу JavaScript';
str = c[0].toUpperCase()+ c.substr(1);
console.log(str);
