var BinarySearchTree = function(value) {
  /*
  value property 
  .left property
  .right property

  we need to be able to create new node for each tree
  */
  var newTree = Object.create(BinarySearchTree.treeMaker);

  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  return newTree;
};

BinarySearchTree.treeMaker = {};

BinarySearchTree.treeMaker.insert = function(value) {
  if (value === this.value) {
    return 
  }

  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
      
    } else {
      this.left.insert(value);
    }
  }

  if (value > this.value) {
    
    if (this.right === null) {
      this.right = BinarySearchTree(value);;
    } else {
      this.right.insert(value);
    }
  }
}

BinarySearchTree.treeMaker.contains = function(value) {
  var result = false
  if (this.value === value) {
    result = true;
    return result;
  }
  if (value < this.value) {
    if (this.left) {
      if(this.left.contains(value)){
        result = true;
        return result;
      }
    }
  }
  if (value > this.value) {
    if (this.right) {
      if(this.right.contains(value)){
        result = true;
        return result;
      }
    }
  }
  return result;
}

BinarySearchTree.treeMaker.depthFirstLog = function(callback) {
/*
  invoke callback on root node value
  if right node is not null
    recursive call 
  if left node is not null
    recursive call

  return output array
*/
  callback(this.value);
  if(this.left) {
    this.left.depthFirstLog(callback);
  }
  if(this.right) {
    this.right.depthFirstLog(callback);
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */

