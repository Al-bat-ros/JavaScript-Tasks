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
var months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
var date = new Date();
alert(months[date.getMonth()]);