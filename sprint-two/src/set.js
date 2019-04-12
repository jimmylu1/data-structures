var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  /*
  make item as key in set._storage and value as item
  */
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  //if item is in set, return true else return false

  return this._storage[item] === item;
};

setPrototype.remove = function(item) {
  // delete item
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
