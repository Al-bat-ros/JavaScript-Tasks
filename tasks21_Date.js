//
/*
var date = new Date();
var day = date.getDay();
var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
alert(days[day]);
*/
/*
var date = new Date();
var day = date.getDay();
var month = date.getMonth()+1;
var year = date.getFullYear();
document.write(day+'-'+month+'-'+year);
*/
//
/*
var months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
var date = new Date();
alert(months[date.getMonth()]);
*/

/*
function go(num){
	var s = '';
 while (num > 0){
		s = String(num%2)+s;
		num = num/2;
	}
    return s
}
 console.log(go(9));
 */
 //--------------------------------------------------------
 //        <input type="text" value="" id="text">
 //        <input type="submit" onclick="go()">  
 /*
 var date = new Date();
 var seconds = date.getSeconds();
 var minutes = date.getMinutes();
 var hours = date.getHours();
 var day = date.getDay();
 var months = date.getDay()+1;
 var year = date.getFullYear();
 
 function go(text){
 var elem = document.getElementById('text');

	 if (hours <= 9){
	 	var hours = '0' + hours;
	 }

	 if (minutes <= 9){
	 	var minutes = '0' + minutes;  
	 }

	 if (seconds <= 9){
	 	var seconds = '0' + seconds;
	 }
	 if (day <= 9){
	 	var day = '0' + day;
	 }
	 if (months <= 9){
	    var months = '0' + months;
	 }
 
 var time = hours+':'+minutes+':'+seconds+' '+day+'.'+months+'.'+year;

elem.value = time;
window.setInterval(go, 1000);
}
*/
//------------------------------------------------------------------
//
//        <input type="text" value="1" id="text">
//        <input type="submit" onclick="start()" value="start">  
//        <input type="submit" onclick="stop()" value="stop"> 

/*
function start(){
	window.timerId = setInterval(timer, 1000);
}

function stop(){
	clearInterval(window.timerId);
	var elem = document.getElementById('text');
	elem.value = '0';
}

function timer(){
   var elem = document.getElementById('text');
   elem.value = parseInt(elem.value)+1;
}
*/
//---------------------------------------------------------------
// Таймер 
//		<div id="center">
//           <p id="text">0</p>
//           <input type="submit" onclick="start()" value="start">
//        </div> 
//
/*
function start(){
	
window.timerId = setInterval(timer, 1000);
}

function stop(){

    clearInterval(window.timerId);
}

function timer(){
	var elem = document.getElementById('text');
	elem.innerHTML = parseInt(elem.innerHTML)+1;
}
*/
//-----------------------------------------------------------------
//

function time(){
	window.setInterval(timer, 1000);
}
function timer(){
  var clock = document.getElementById('clock');

  var date = new Date();

  clock.innerHTML = addZero(date.getHours())+':'+addZero(date.getMinutes())+':'+addZero(date.getSeconds());
	

}

function addZero(num){
	if (num <= 9){
		    return '0'+num;
	}else{
			return num;
	}

}



