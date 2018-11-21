// Заполните массив числами от 1 до 10 с помощью цикла.

var arr = [];
//Решение №1
//for (var i = 1; i <= 10; i++){
//	arr[i] = i;
//}
//document.write(arr);

//Решение №2
for (var i = 1; i <= 10; i++){
	arr.push(i);
}
document.write(arr);