var a = [1,2,3,4,5,6,7];

function cahNum(arr){
	for (var i = 0; i < arr.length; i++){
		if (arr[i] == 5){
			return true;
		}
	}
	return false;
}
if (cahNum(a) == true){
	document.write('Есть');
}else{
	document.write('Нет');
}
