
function func() {
	var elements = document.forms[1].elements;
	for (var i = 0; i < elements.length; i++) {
		elements[i].value = '!';
	}
}