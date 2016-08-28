var n = 10;
var stack = [];
var top = -1;

function push(ele){
	if(top == n){
		return "overflow"
	}
	top = top+1;
	stack[top] = ele;
	return stack[top];
}


function pop(){
	if(top == -1){
		return "underflow";
	}
	var ele = stack[top];
	top--
	return ele;
}

for(var i = 0; i<5;i++){
	var x = push(i);
}

//console.log(x);

console.log(stack);