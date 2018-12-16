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
/*
var arr = [];

for (var i = 1; i <= 10; i++){
	arr.push(i);
	// или
	// arr[i] = 'x';
}

console.log(arr);
*/


// tasks 6 	Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла.
//          Дроби округляйте до двух знаков в дробной части
/*
  var arr = [];
  for (var i = 0; i < 10; i++){
     arr[i] = Math.random().toFixed(2);
  }
  console.log(arr);
  */


  // tasks 7 Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
  /*
  var arr = [];

  for (var i = 0; i < 10; i++){
  	arr[i] =Math.round(Math.random() * (10 - 1 + 1 )) + 1;
  }

  console.log(arr);
  */

  // tasks 8 Дан массив с числами. 
  //         С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти
  /*
  var arr = [1,2,3,4,8,13,266,34,68,9];
  
  for (var i = 0; i < arr.length; i++){
  	  if (arr[i] > 0 && arr[i] < 10){
  	  console.log(arr[i]);
  	  }
  }
  */

  // tasks 9 	Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. 
  //            Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. 
  //            Если такого элемента нет - ничего не выводите.
 /*
  var arr = [1,2,3,4,5,6,8,11,43,121];

  for (var i = 0; i < arr.length; i++){
  	if (arr[i] == 5){
  		document.write('Есть');
  		break;
  	}
  }
*/


// tasks 10 Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.

var arr = [1,2,3,4,5,6,8,11,43,121];
var sum = 0;

for (var i = 0; i < arr.length; i++){
	sum += arr[i];
}
document.write(sum);




