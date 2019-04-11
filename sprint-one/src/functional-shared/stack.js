var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
     storage: {},
     key: 0,
  };

    _.extend(someInstance, stackMethods);
    return someInstance;
};

var stackMethods = {
    push: function(value){
        this.storage[this.key++] = value;
    },

    pop: function(){
        if (this.key > 0){
            var last = this.storage[--this.key];
            delete this.storage[this.key];
            return last;
        };
    },

    size: function(value){
        return this.key;
    }
};






