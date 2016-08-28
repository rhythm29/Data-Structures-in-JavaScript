var head = null;
var tail = null;

function createNode(value){
	return{
		data:value,
		next:null,
		previous:null
	}
}

function push(val){
	var node = createNode(val);
	if(head == null){
		head = node;
		tail = node;
		return head
	}
	node.previous = tail;
	tail.next = node;
	tail = node;
	return head;
}

function print(){
	var temp = head;
	while(temp != null){
		console.log(temp.data);
		temp = temp.next;
	}
}

function rev(){
	var temp = tail;
	while(temp != null){
		console.log(temp.data);
		temp = temp.previous;
	}
}


var x = push(5);
console.log(JSON.stringify(push(7),null,4));
//push(8);
//print();
//rev();