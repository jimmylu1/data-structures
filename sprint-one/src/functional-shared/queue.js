var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {
    storage : {},
    key : 0,
    head : 0,
    tail : 0,
  }
  _.extend(someInstance, queueMethods);
  return someInstance;

};

var queueMethods = {
    enqueue: function (value) {
        this.storage[this.key++] = value;
    },


    dequeue: function() {
        if(this.key > 0){
            var removeVal = this.storage[this.head];
            for(let i = 0; i < this.key; i++){
                this.storage[i] = this.storage[i + 1];
            }
            delete this.storage[--this.key];
            return removeVal;
        }
    },



    size: function() {
        return this.key;
    }

};

