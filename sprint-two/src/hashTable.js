

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
    this._storage.each(function(element, i) {
      if (index === i) {
        element.push([k, v]);
      }
    });
  } else {
    this._storage.each(function(element, i) {
      if (index === i) {
        for (var j = 0; j < element.length; j++) {
          if (element[j][0] === k) {
            element[j][1] = v;
          } else {
            element.push([k, v]);
          }
        }
      }
    });
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(element, i) {
    if (i === index) {
      for (var j = 0; element.length; j++) {
        if (k === element[j][0]) {
          element.splice(j,1);
        }
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


