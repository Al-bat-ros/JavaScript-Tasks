// задача
// <input type="text" id="input" value="Ку-ку"><button onclick="hide()">Нажми на меня!</button>
// <button onclick='show()'>Нажми потом на меня</button>
//
/*
function hide(){
   var elem = document.getElementById('input');
   elem.style.display = 'none';
}
function show(){
	elem = document.getElementById('input');
	elem.style.display = 'inline-block';
}
*/
//---------------------------------------------------------
//
// задача
//
//<input type="text" id="input" value="Ку-ку">
//       <br>
//       <br>
//       <button onclick="hide()">Нажми на меня!</button>
//       
/*
function hide() {
	var elem = document.getElementById('input');
	elem.value = 'Ой я поменяла свой текст и css';
	elem.style.width = '300px';
	elem.style.height = '50px';
	elem.style.color = 'red';
	elem.style.borderRadius = '10px';

}
*/
//---------------------------------------------------------
//
// Задача
//
// <input type="submit" id="block" onclick="block(this)" value="О, на меня снова можно нажимать!">
// <input type="submit" id="unblock" onclick="unblock(this)" style="display: none" value="Нажми на меня что-бы разблокировать!">
//
//
/*

function block() {
	var block = document.getElementById('block');
	var unblock = document.getElementById('unblock');
	block.value = 'На меня болше нельзя нажать';
	block.disabled = true;
	unblock.style.display = 'block';
}

function unblock() {
	var block = document.getElementById('block');
	var unblock = document.getElementById('unblock');
	block.value = 'О, на меня сново можно нажимать';
	block.disabled = false;
	unblock.style.display = 'none';

}
*/
//-----------------------------------------------------------------
//
// Задача
//
// <p>Кнопка считает кол-во нажатий по ней</p>
// <input type="submit" onclick="go(this)" value="0">
//

/*
  function go(elem) {
  	var num = parseInt(elem.value)+1;
  	elem.value = num;
  }
 */
 //----------------------------------------------------------------
 //
 // Задача
 //
 // <input type="text" id="text" value="Теперь я плавую справа">
 // <button onclick="go(this)">Нажми на меня</button> 
 //
 /*
 function go(elem) {
 	var text = document.getElementById('text');
 	text.style.cssFloat = 'right';
 }
 */
//------------------------------------------------------------------
//
// Задача
//
// <input type="text" class="eee www ddd" id="text" value="Ку-ку">
// <button onclick="go(this)">Нажми на меня</button> 
//
/*
function go(elem) {
	var text = document.getElementById('text');
	text.value = 'Мои css классы: '+elem.className;
}
*/
//------------------------------------------------
//
// Для закрепления 1
//
// <input type="text" id="input1" value="Привет!"> 
// <input type="text" id="input2" value="Пока!">
// <button onclick="go(this)">Нажми на меня</button>
//
/*
function go(){
	var input1 = document.getElementById('input1');
	var input2 = document.getElementById('input2');
	var tmp = input1.value;
	input1.value = input2.value;
	input2.value = tmp;
}
*/
//---------------------------------------------------
//
// Для закрепления 2
// <p>По нажатию на кнопку в нижнем инпуте появится квадрат числа из верхнего инпута</p>
// <input type="text" id="test" value="" placeholder="Введите число!"> 
// <input type="text" id="result" placeholder="Здесь появится результат." disabled="">
// <button onclick="go(this)">Нажми на меня</button>
//
//
/*
function go(){
	var test = document.getElementById('test');
	var value = test.value;
	var result  = document.getElementById('result');
	result.value = value*value; 
}
*/
//-----------------------------------------------------
//
// Для закрепления 3
//
// <p>
//	  По нажатию на кнопку в нижнем инпуте появится квадрат числа из верхнего инпута.
//	  Если введено не число - должна показаться ошибка.
//	</p>
//     
//      <input type="text" id="test" value="" placeholder="Введите число!">
//      <br> 
//      <br>
//      <input type="text" id="result" placeholder="Здесь появится результат." disabled="">
//      <br>
//      <br>
//      <button onclick="go(this)">Нажми на меня</button>
//
/*
function go() {
	var test = document.getElementById('test');
	var value = test.value;
	if (!isNaN(value)){
	    var result = document.getElementById('result');
	    result.value = value*value;
	}else{
		alert('Ваедено не число');
	}
}
*/
//--------------------------------------------------------
//
// Для закрепления 4
//
//
/*
function go(elem) {
    elem.disabled = true;
    elem.style.cursor = 'not-allowed';
}
*/
//--------------------------------------------------------
//
//
// Для закрепления 5
//	<input type="text" id="textNum" value=""> 
/*
	<br>
	<br>
	<input type="submit"  onclick="num('+')" value="Я добавлю +">
	<br>
    <input type="submit"  onclick="num('-')" value="Я добавлю -">
    <br>
    <input type="submit"  onclick="num('/')" value="Я добавлю /">
    <br>
    <input type="submit"  onclick="num('*')" value="Я добавлю *">
    <br>
    <br>
    <br>
    <input type="submit" onclick="num('1')" value="1">
    <br>
    <input type="submit" onclick="num('2')" value="2">
	<br>
	<input type="submit" onclick="num('3')" value="3">
	<br>
	<input type="submit" onclick="num('4')" value="4">
	<br>
	<input type="submit" onclick="num('5')" value="5">
	<br>
	<input type="submit" onclick="num('6')" value="6">
	<br>
	<input type="submit" onclick="num('7')" value="7">
	<br>
	<input type="submit" onclick="num('8')" value="8">
	<br>
	<input type="submit" onclick="num('9')" value="9">
	<br>
	<input type="submit" onclick="num('0')" value="0">
	<br>
	*/
//
/*
function num(elem) {
	var text = document.getElementById('textNum');
    text.value = text.value + elem;
}
*/
//-------------------------------------------------------------------








