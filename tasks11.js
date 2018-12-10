
 var arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
var sum = 0;
for ( var i = 0; i < arr.length; i++){
	for (var k = 0; k < arr[i].length; k++){
	   for (var j = 0; j < arr[i][k].length; j++){
         sum += arr[i][k][j];
       }
	}
}
console.log(sum);