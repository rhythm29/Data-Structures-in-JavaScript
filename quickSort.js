function quickSort(arr,left,right) {
	var index = partition(arr, left, right);
	if (left < index - 1)
		quickSort(arr, left, index-1);
	if (index < right)
		quickSort(arr, index, right);
}

function partition(a, low, high){
	var i = low;
	var j = high;
	var pivot = a[Math.floor((low + high) / 2)];	
  while(i<=j){
	while(a[i] < pivot){
		i++;
	}
	while(a[j] > pivot){
		j--;
	}
	if(i <= j){
        var temp = a[i]
        a[i] = a[j]
        a[j] = temp
        i++;
        j--;
    }
        
   }
   //temp = a[low]
   //a[low] = a[j]
   //a[j] = temp
   	console.log(a,pivot,low,high);

   return i;
}

var a = [2,3,1,5,4,7,6]
quickSort(a,0,6);
console.log(a);