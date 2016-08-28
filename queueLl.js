var n = 10;
var first = null;
var last = null;
function createNode(value){
	return {
		data:value,
		next:null
	}
}

function enque(ele){
	var newNode = createNode(ele);
	if(first == null){
        first = newNode;
        last = newNode;
        return first;
    }
    else{
        //last.next = newNode;
        //last = newNode;
        //return first;
        newNode.next = last;
        last = newNode;
        return last
    } 
}

function deque(){
	var ele = first.data;
	first = first.next;
	return ele;
}



for(var i = 1;i<4;i++){
	var x = enque(i);
}

console.log(x);

console.log(deque());