var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.key = 0;
  this.storage = {};
};

Stack.prototype.push = function(value){
    this.storage[this.key++] = value;
};

Stack.prototype.pop = function(){
    if(this.key > 0) {
        var removeVal = this.storage[--this.key];
        delete this.storage[this.key];
        return removeVal;
    }
};

Stack.prototype.size = function() {
    return this.key;
}



