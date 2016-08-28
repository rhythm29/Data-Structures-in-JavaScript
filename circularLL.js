var head = null;
var tail = null;
function createNode(val){
	return{
		data:val,
		next:null
	}
}

function createList(val){
	var node = createNode(val)
	if(head == null){
		head = node;
		tail = node;
		//return head;
    }
    tail.next = node;
    tail = node;
    tail.next = head;
    	//console.log('hi');
    }

function print(){
	console.log(head.data)
	var  temp = head.next;
	while(temp != head){
		console.log(temp.data);
		temp = temp.next;
	}
}

//var x = createList(5);
//console.log(createList(6));

createList(6);
createList(5);
print();

