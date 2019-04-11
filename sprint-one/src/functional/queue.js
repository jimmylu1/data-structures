var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;
  var head = 0;
  var tail = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[tail++] = value;
    key++;
  };

  someInstance.dequeue = function() {
    if(key > 0){
      var removeVal = storage[head];
      delete storage[head++];
      key--;
      return removeVal;
    }
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};
