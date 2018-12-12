
function getDivisors(num) {
     var arr = [];
     for (var i = 0; i <= num; i++){
     	if (num % i == 0){
     		arr.push(i);
     	}
     }
  return arr;
}

console.log(getDivisors(100));