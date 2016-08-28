
var top = null;
function createNode(value){
    return {
    	data:value,
    	next:null
    }
}

function push(ele){
	var ele = createNode(ele);
	ele.next = top;
	top = ele;
	return top;
}

function pop(){
	if(top!= null){
	    var ele = top.data;
	    top = top.next;
	    return ele;
    }
    return null;
}

for(var i = 2;i<7;i++){
	var x = push(i);
}


console.log(JSON.stringify(x,null,4));

//console.log(pop());

