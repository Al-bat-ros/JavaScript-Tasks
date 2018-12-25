
function func() {
	var elems = document.getElementsByTagName('p');
	for (var i = 0; i < elems.length; i++){
		elems[i].innerHTML = '!';
	}
}