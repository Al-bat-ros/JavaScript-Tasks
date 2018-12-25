
function func() {
	var forms = document.forms;
	for (var i = 0; i < forms.length; i++){
		forms[i].innerHTML = '!' ;
	}
}