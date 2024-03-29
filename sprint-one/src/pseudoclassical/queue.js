var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.key = 0;
};

Queue.prototype.enqueue = function (value) {
    this.storage[this.key++] = value;
};

Queue.prototype.dequeue = function () {
    if (this.key > 0){
        var removeVal = this.storage[0];
        for(let i = 0; i < this.key; i++){
            this.storage[i] = this.storage[i + 1];
        }
        delete this.storage[--this.key];
        return removeVal;
    }
};

Queue.prototype.size = function () {
    return this.key;
}

