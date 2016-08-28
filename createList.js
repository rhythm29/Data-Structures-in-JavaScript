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

function traverseList(head){
    while(head != null){
        console.log(head.data);
        head = head.next;      
    }
}

function addBeg(head, val){
    if(head == null){
        var node = createNode(val);
        return node
    }
    var temp = head;
    head = createNode(val);
    head.next = temp;
    return head;
}

function addMid(head, val, newVal){
    if(head == null){
        return null;
    }
    if(head.data == val){
        return addBeg(head, newVal);
    }
    var prev = head;
    var curr = head.next;
    while(curr != null){
        if(curr.data == val){
            temp = prev.next;
            prev.next = createNode(newVal);
            prev.next.next = temp;
            return head

        }
        curr = curr.next;
        prev = prev.next;
    }
}

function delete1(head,val){
  if(head == null){
    return null
  }
  var prev = head;
  var curr = head.next
  if(head.data == val){
    return head.next;
  }
  while(curr != null){
    if(curr.data == val){
      prev.next = curr.next
      return head
    }
    curr = curr.next;
    prev = prev.next
  }
  return head;
}


console.log(delete1(createLinkList([1,2,3]),3));

//console.log(traverseList(createLinkList([1,2,3,4,5])));

//console.log(addBeg(createLinkList([1,2,3,4,5]),6));

//console.log(traverseList(addMid(createLinkList([1,2,3,4,5]),3,8)));




