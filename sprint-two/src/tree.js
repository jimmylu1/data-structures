var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
  //use extend function  
  
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  /*
  look through tree to check for value
  check top node for target value
    if node.value does not equal target
      iterate over children
        check target value of current node
          if current node value === target
            return true
          check if current node has children
            if so, use recursion

      return false
  */
  // var recursion = function(node) {
  //   console.log(node, this, 'what is this???');
  //   if (node.value === target) {
  //     return true;
  //   }
  //   if (node.children.length > 0) {
  //     for (var i = 0; node.children.length; i++) {
  //       if (node.children[i].value === target) {
  //         return true;
  //       }
  //       if (node.children[i].children.length > 0) {
  //         recursion(node.children[i])
  //       }
  //     }
  //   }
  //   return false;
  // }
  // recursion(this);


  var node = this
  console.log(node, 'what is this?????')
  console.log(this.children[0].children);
  if (node.value === target) {
    return true;
  } 
    for (var i = 0; i < node.children.length; i++) {
      var currentNode = node.children[i];
      if (currentNode.value === target) {
        return true;
      }
      if (currentNode.children.length > 0) {
        console.log(this.children[i])
        if(this.children[i].contains(target)){
          return true;
        };
      }
    }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
