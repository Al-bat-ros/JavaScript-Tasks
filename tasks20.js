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