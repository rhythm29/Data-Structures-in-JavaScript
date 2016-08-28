function buubleSort(a){
	var swap = false;
	for(var i = 0; i< a.length; i++){
		for(var j = 0; j< a.length; j++){
			if(a[j] > a[j+1]){
				var temp = a[j];
				a[j] = a[j+1];
				a[j+1] = temp;
				swap = true;
			}
		}
		if(swap == false){
			break
		}
	}
	return a;
}

console.log(buubleSort([3,5,1,7,6,2]));
// function swap(a, b){
// 	var temp = a
// 	a = b
// 	b = temp
// 	return [a,b]
// }

