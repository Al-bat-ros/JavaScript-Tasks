//
/*
function func() {
	document.forms.form1.elements.input2.value = '!';
	var elements = document.forms[1].elements;
	for (var i = 0; i < elements.length; i++) {
		elements[i].value = '!';
	}
}
*/
//---------------------------------
// Продвинутая работа с атрибутами
//---------------------------------
// <input type="text" value="!" id="test">
// <input type="submit" onclick="func()">
//
// получим значение атрибута value
//
/*
function func(){
	var elem = document.getElementById('test');
	alert(elem.getAttribute('value'));
}
*/
//--------------------------------
//А теперь запишем новое значение 'www' в атрибут value: 
//
/*
function func(){
	var elem = document.getElementById('test');
	elem.setAttribute('value', 'www');
}
*/
//-----------------------------------
//Удалим атрибут value совсем: 
//
/*
function func(){
	var elem = document.getElementById('test');
	elem.removeAttribute('value');
}
*/
//-------------------------------------
// проверим наличие атрибута value у нашего свойства: 
//
/*
function func(){
	var elem = document.getElementById('test');
	alert(elem.hasAttribute('value'));
}
*/
//------------------------------------
//
// Получение свойств по их классу
//
//
/*
        <p class="www">Текст обзаца.</p>
		<p class="www">Текст обзаца.</p>
		<p class="www">Текст обзаца.</p>
		<p>Текст обзаца.</p>
        <input type="submit" onclick="func()">
*/
/*
function func() {
	var elems = document.getElementsByClassName('www');
	for (var i = 0; i < elems.length; i++){
		elems[i].innerHTML = '!'
	}
}
*/
//---------------------------------------------
//
// Получение свойств селектором CSS
//
// <input type="text" value="!" class="test">
// <input type="submit" onclick="func()">
//
//получаем инпут с классом test и выводим на экран содержимое его атрибута value: 
//
/*
function func(){
	var elem = document.querySelector('input.test');
	alert(elem.getAttribute('value'));
}
*/
//-------------------------------------------------
//
//получим свойство с id равным test
//
// <input type="text" value="!" id="test">
// <input type="submit" onclick="func()">
//
/*
function func() {
	var elem = document.querySelector('#test');
	alert(elem.getAttribute('value'));
}
*/
//----------------------------------------------------
//
// получаем все свойства с классом www и ставим им текст '!':
//
//
/*
        <p class="www">Текст обзаца</p>
		<p class="www">Текст обзаца</p>
		<p class="www">Текст обзаца</p>
		<p>Текст обзаца</p>
        <input type="submit" onclick="func()">
*/
//
/*
function func() {
	var elems = document.querySelectorAll('p.www');
	
	for (var i = 0; i < elems.length; i++){
		elems[i].innerHTML = '!';
	}
	
}
*/
//------------------------------------------------
//
//
// Атрибуты data-
//
//      <div id="elem" data-price="1000" data-product-number="5">
//			Товар Джинсы
//		</div>
//      <input type="submit" onclick="func()">
//
// обратиться к таким атрибутам как к с свойствам объекта,
// при помощи специального свойства dataset: 
//
/*
function func() {
	var elem = document.getElementById('elem');

	alert(elem.dataset.price);
	alert(elem.dataset.productNumber);
}
*/
//
//обращаться с помощью методов типа getAttribute 
//
/*
function func() {
	var elem = document.getElementById('elem');

	alert(elem.getAttribute('data-price'));
	alert(elem.getAttribute('data-product-number'));
}
*/
//----------------------------------------------------
//
// Разница между способами получения атрибутов
//
//  <input type="text" id="test" value="old">
//  <input type="submit" onclick="func()">
//
//При изменении свойства elem.value атрибут elem.getAttribute('value') не меняется: 
//
/*
function func() {
	var elem = document.getElementById('test');

	elem.value = 'new';  //поменяли свойство
	alert(elem.getAttribute('value')); //выведет 'old' - не изменилось!

}
*/
//
//А вот изменение атрибута обновляет свойство: 
//
/*
function func(){
	var elem = document.getElementById('test');

	elem.getAttribute('value', 'new'); //поменяли атрибут
	alert(elem.value); //выведет 'new' - elem.value изменилось!
}
*/ 
//Получается, что атрибут elem.getAttribute('value') хранит исходное значение даже после того, 
//как пользователь заполнил поле и свойство изменилось.
//Например, можно взять изначальное значение из атрибута и сравнить со свойством, чтобы узнать, изменилось ли значение. 
//А при необходимости и перезаписать свойство атрибутом, отменив изменения. 
