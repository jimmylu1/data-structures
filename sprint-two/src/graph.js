

// Instantiate a new graph
var Graph = function() {
  /* 
  need to store node values
  store edges in array of nodes
  */
  this.storage = {};
  /*
  store value of node as key: store edges as an array
  */
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
/*
node that gets added is a value
create a new node with a value that passed in by instantiate a new graph
*/
this.storage[node] = [];

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < Object.keys(this.storage).length; i++) {
    var key = Object.keys(this.storage)[i];
    if (parseInt(key) === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
  /*
  iterage over storage object
    iterate over each edge array
      find node value and remove from each edge array
  */
  for (var key in this.storage) {
    for (var i = 0; i < this.storage[key].length; i++) {
      var edgeValue = this.storage[key][i];
      if (edgeValue === node) {
        this.storage[key].splice(i, 1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.storage[fromNode].length; i++) {
    if (this.storage[fromNode][i] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  /*
  to add an edge we should push into the array of the key
  determine which two nodes are being connected.
  */
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  /*
  use indexof to find index of each node the other nodes edge array
  use splice to remove node from both edge arrays
  */
  var indexFrom = this.storage[toNode].indexOf(fromNode);
  var indexTo = this.storage[fromNode].indexOf(toNode);

  this.storage[fromNode].splice(indexTo, 1);
  this.storage[toNode].splice(indexFrom, 1);  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  /*
  iterate over each node
    invoke cb on each
  */
  for (var key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


