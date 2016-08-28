function createNode(val){
      return {value : val,
      left : null,
      right : null}
}


function addNode(root, val){
    if(!root){
          root = createNode(val);
          return;
      }

    var currentNode = root;
    var node1 = createNode(val);
    while(currentNode){
         if(node1.value > currentNode.value){
             if(!currentNode.right){
                 currentNode.right = node1;
                 break;
              }
            else{
                currentNode = currentNode.right;
            }
          }
         else{
             if(!currentNode.left){
                 currentNode.left = node1;
                 break;
              }
            else{
                currentNode = currentNode.left;
            }
        }
    }
    return root;
}
var root = createNode(50);
var x = addNode(root,60);
var y = addNode(root,12);
console.log(addNode(root,112));





