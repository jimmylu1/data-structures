class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.old = 1;
    this.new = 1;
    this.storage = {};
  }


  enqueue(val) {
    this.storage[this.new] = val;
    this.new++;
  }


  dequeue() {
    if(this.old !== this.new) {
        var removedVal = this.storage[this.old];
        delete this.storage[this.old];
        this.old++;
        return removedVal;
    }
  }


  size() {
    return this.new - this.old;
  }
}


