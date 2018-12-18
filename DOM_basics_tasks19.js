//
//Задача 4 . Квадрат содержимого инпута
//
//  <button onclick="buttonClick()">Нажми на меня</button>
//  <input type="text" id="input" placeholder="Введите число!"
//
/*
function buttonClick() {
	var input = document.getElementById('input');
	var number = Number(input.value);
	var square = number*number;
	alert(square);
}
*/
//-------------------------------------------------------

// Задача 5 . Обмен содержимым между инпутами
//
//   <button onclick="buttonClick()">Нажми на меня</button>
//   <input type="text" id="input1" value="!!!"><input type="text" id="input2" value="???"
//
/*
function buttonClick() {
	var input1 = document.getElementById('input1');
	var input2 = document.getElementById('input2');
	var input1Value = input1.value;
	var input2Value = input2.value;
	input1.value = input2Value;
	input2.value = input1Value;
}
*/
//-------------------------------------------------------


// Задача 6. По нажатию на кнопку меняется ее текст
// Решим задачу через this:
//
//   <input type="button" onclick="buttonClick(this)" value="Нажми на меня">
//
/*
function buttonClick(elem) {
	elem.value = 'Новый текст кнопки';
}
*/
//--------------------------------------------------------


// Задача 7. Работа с CSS
//
//   <button onclick="buttonClick()">Нажми на меня</button>
//   <input type="text" id="input" value="Какой-то текст!">
//
/*
function buttonClick() {

	var input = document.getElementById('input');
	input.style.color = 'red';

}
*/
//--------------------------------------------------------

// Задача 8. Блокирование поле ввода
//
//<button onclick="button1Click()">Заблокировать</button>
//<button onclick="button2Click()">Отблокировать</button>
//<input type="text" id="input" value="Какой-то текст!">
//
//
// заблокирует 
/*
function buttonClick1() {
	var input = document.getElementById('input');
	input.disabled = true;

}
// разблокирует
function buttonClick2() {
	var input = document.getElementById('input');
	input.disabled = false;
}
*/
//--------------------------------------------------------