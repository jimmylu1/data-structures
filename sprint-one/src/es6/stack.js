class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.key = 0;
  }

  push(value) {
    this.storage[this.key] = value;
    this.key++;
  };

  pop() {
    if(this.key) {
        this.key --;
        return this.storage[this.key];
    };
  };

  size() {
    return this.key;
  }

}
