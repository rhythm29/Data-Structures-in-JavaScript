function createNode(val){
	return{
		data:val,
		lc:null,
		rc:null
	}
}

function createTree(root, val){
	if(!root){
		return root = createNode(val);
	}
	var node = createNode(val);
	if(node.data > root.data){
		var newNode = createTree(root.rc, node.data);
		root.rc = newNode;
		return root
	}
	else{
		var newNode = createTree(root.lc,node.data);
		root.lc = newNode;
		return root;
	}
}
// var x = createNode(50);
// //var y = createTree(x,60);
// console.log(createTree(x,30));
function print(){
    var a = [24,33,12,25,37,2];
    var n = null;
    var root;
    for(var i = 0; i< a.length; i++){
	    n = createTree(n , a[i]);
	    if(i == 0){
		root = n;
	    }
    }
    return root;
}

console.log(print());