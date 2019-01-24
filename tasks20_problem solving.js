//-------------------------------------------------
// задача 1
//
// <button onclick="buttonClick()">Нажми на меня</button>
// <span id="elem">Это span с текстом.</span>
/*
function buttonClick() {
	var elem = document.getElementById('elem');
	elem.innerHTML = '!!!';
}
*/
//-------------------------------------------------
// Задача 2
//
// <button onclick="buttonClick()">Нажми на меня</button>
// <span id="elem">Это span с текстом.</span>
/*
function buttonClick() {
	var elem = document.getElementById('elem');
	elem.outerHTML = '<b>' + elem.innerHTML + '<b>';
}
*/
//--------------------------------------------------
// Задача 3 
//
//      <h2>Заголовок, не поменяется.</h2>
//       <p>Абзац, поменяется.</p>
//       <p>Абзац, поменяется.</p>
//       <p>Абзац, поменяется.</p>
/*
		<input type="submit" onclick="func()">
function func() {
	var elems = document.getElementsByTagName('p');
	for ( var i = 0; i < elems.length; i++) {
       elems[i].innerHTML = i+1;
	}
}
*/
//-------------------------------------------------------
// Задача 4
//
//  <h2 class="zzz">Заголовок с классом zzz.</h2>
//  <p class="zzz">Абзац с классом zzz.</p>
//  <p class="zzz">Абзац с классом zzz.</p>
//  <p>Просто абзац, не поменяется.</p>

// <input type="submit" onclick="func()">
/*
function func() {
	var elems = document.getElementsByClassName('zzz');
	for ( var i = 0; i < elems.length; i++) {
		elems[i].innerHTML = i+1;
	}
}
*/
//--------------------------------------------------------
//  задача 5
//
///  <h2 class="zzz">Заголовок с классом zzz.</h2>
//  <p class="zzz">Абзац с классом zzz.</p>
//  <p class="zzz">Абзац с классом zzz.</p>
//  <p>Просто абзац, не поменяется.</p>

// <input type="submit" onclick="func()">
/*
function func(){
	var elems = document.querySelectorAll('p.zzz');
	for ( var i = 0; i < elems.length; i++){
		elems[i].innerHTML = i+1;
	}
}
*/
//==================================================
// Задачи для решения
//------------------------
//  Свойства innerHTML, outerHTML
//
// Задача 1 
//
// <p id="test"> При нажатии на кнопку текст в абзаце поменяется. </p>
// <input type="submit" onclick="func()">
//
/*
function func(){
	var elem = document.getElementById('test');
	elem.innerHTML = 'Ку-ку! А я <b>жирный</b>!';
}
*/
//--------------------------------------------------
//
// Задача 2
//
//  <p id="test">При нажатии на кнопку текст в абзаце поменяется</p>
//  <input type="submit" onclick="func()">
//
/*
function func(){
	var elem = document.getElementById('test');
	elem.outerHTML = '<h3>Абзац превратился в h3!</h3>';
}
*/
//------------------------------------------------------