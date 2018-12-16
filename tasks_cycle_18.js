// tasks 1 Выведите с помощью цикла столбец чисел от 1 до 100
/*
for (var i = 1; i <= 100; i++){
	document.write(i + '<br>');
}
*/


// tasks 2 Выведите с помощью цикла столбец чисел от 100 до 1
/*
for (var i = 100; i > 0; i--){
	document.write(i + '<br>');
}
*/

// tasks 3 Выведите с помощью цикла столбец четных чисел от 1 до 100
/*
for (var i = 1; i <= 100; i++){
	if (i%2 == 0){
		document.write(i + '<br>');
	}
}
*/

// tasks 4 	Заполните массив 10-ю иксами с помощью цикла.
/*
var arr = [];

for (var i = 0; i < 10; i++){

	arr.push('x')
}
console.log(arr);
*/


// tasks 5 	Заполните массив числами от 1 до 10 с помощью цикла.

var arr = [];

for (var i = 1; i <= 10; i++){
	arr.push(i);
}

console.log(arr);