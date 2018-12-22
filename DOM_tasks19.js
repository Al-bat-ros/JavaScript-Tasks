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









