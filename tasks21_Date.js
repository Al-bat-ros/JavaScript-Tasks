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


 
 function go(text){
 var date = new Date();
 var seconds = date.getSeconds();
 var minutes = date.getMinutes();
 var hours = date.getHours();
 var day = date.getDay();
 var months = date.getDay()+1;
 var year = date.getFullYear();

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
var elem = document.getElementById('text');
elem.value = time;
window.setInterval(go, 1000);
}

