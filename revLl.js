function createNode(val){
    var node = {
    data : val,
    next : null
    }
    return node;
};

function addNode(node, val){
     if(!node){
         var node = createNode(val);
          return node;
     }
     node.next = createNode(val);
     return node.next ;
}

function createLinkList(arr){
     var n = null;
     var head;

     for(var i = 0; i<arr.length; i++){
        n = addNode(n , arr[i]);
        if(i == 0){
            head = n;
        }
     }
      return head;
}



function revL(head){
	var prev = null;
	var curr = head;
	var next;
	while(curr){
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	return prev;
}

var x = revL(createLinkList([2,3,5]));
console.log(x);