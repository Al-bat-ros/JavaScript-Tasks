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
//
//
function hide() {
	var elem = document.getElementById('input');
	elem.value = 'Ой я поменяла свой текст и css';
	elem.style.width = '300px';
	elem.style.height = '50px';
	elem.style.color = 'red';
	elem.style.borderRadius = '10px';

}
