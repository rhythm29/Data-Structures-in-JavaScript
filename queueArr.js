var queue = [];
var n = 10;
var first = -1;
var point = 0;



function enque(ele){
    if(first== n){
    	return "oveflow";
    }
    first++;
    queue[first] = ele;
    return queue
}

 

function deque(){
	if(first == -1){
		console.log("queue empty");
	}
	ele = queue[point];
	point++;
	return ele;

}
for(var i = 1; i<5;i++){
    var x = enque(i);
}
console.log(x);
console.log(deque());