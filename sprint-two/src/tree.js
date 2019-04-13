var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree; 
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } 
  for (var i = 0; i < this.children.length; i++) {
    var currentNode = this.children[i];
    if (currentNode.value === target) {
      return true;
    }
    if (currentNode.children.length > 0) {
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
