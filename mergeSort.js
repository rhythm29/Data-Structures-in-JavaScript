function mergeSort(arr, start,end){
	if(arr.length<=1){
		return arr;
	}
	var mid = Math.floor(arr.length /2);
	var left = arr.slice(0,mid);
	var right = arr.slice(mid,arr.length);
	var a = mergeSort(left,start,mid);
	var b =  mergeSort(right,mid,end);
	return merge(a,b);
}

function merge(a, b){
	var i = 0;
	var j = 0;
	var c = [];
	while(i < a.length && j < b.length){
        if(a[i]<b[j]){
        	c.push(a[i])
        	i++
        }
        else{
        	c.push(b[j])
        	j++
        }
	}
	if(i == a.length){
		for(var k = j; k<b.length; k++){
			c.push(b[k]);
		}
	}
	if(j == b.length){
		for(var k = i; k<a.length; k++){
			c.push(a[k]);
		}
	}
	return c;
}
var arr = [12,2,13,6];
console.log(mergeSort(arr,0,arr.length-1));

