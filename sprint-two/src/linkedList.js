var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    /*
    node.prev = list.tail
    list.tail = value
    when a node is added to tail, new node should become list.tail
    previous tail should now have a node.next equal list.tail instead of null
    */
    if (list.tail !== null) {
      /*
      condition to determine if there is something to add the new node to tail
      */
      list.tail.next = node;
      list.tail = node;
    } else {
      list.head = node;
      //list.head.next?
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var newHead = list.head.next;
    var val = list.head.value;
    list.head = newHead;
    return val;
  };

  list.contains = function(target) {
    /*
    search through all nodes to find target/value
    should return true if target/value is in the list
    should return false if target/value is NOT in the list

    search through list
      start search from head
        recursive function until target is reached
          base case
            if (target === value) {
              return true;
            }
        return false if target is not found
    */

   list.currNode = list.head;
     while (list.currNode !== list.tail) {
       if (list.currNode.value === target) {
         return true;
       } else {
         list.currNode = list.currNode.next;
       }
     }
     if (list.currNode.value === target) {
       return true;
     }
     return false;  
   };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  // node.prev = null;

  return node;
};
    

/*
REFACTOR CODE BELOW
*/
    // for (var key in list) {
    //   var node = list[key];
    //   if (typeof list[key] === 'object') {

    //     if (node.value === target) {
    //       return true;
    //     } 
    //     if (node !== list.tail) {
    //       list.contains(node.next);
    //     } 
    //     return false;
    //   }
    // }

  //   var recurse = function (node, target) {

  //     if (node.value === target.value) {
  //       return true; 
  //     } 
  //     else if (node.next) {
  //       recurse(node.next);
  //     } else {
  //       return false;
  //     }
  //   }
  //   recurse(list, target);
  




// for (var key in list.head) {
      //   if (list[key].value === target) {
      //     return true;
      //   } else {
      //     list.contains(list)
      //   }
      // }

/*
 * Complexity: What is the time complexity of the above functions?
 */