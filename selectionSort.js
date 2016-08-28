function selectionSort(a){
	for(var i = 0; i< a.length; i++){
		min = i;
		for(var j = i+1; j< a.length; j++){
            if(a[min] > a[j]){
            	min = j
            }
		}
		if(min != i){
			var temp = a[min];
            	a[min] = a[i];
            	a[i] = temp;
		}
	}
	return a;
}

console.log(selectionSort([2,1,5,3,4]));
