Array.prototype.bubbleSort = function () {
  let decrement = 1
  while (decrement < this.length) {
    for (let inner = 0; inner < this.length - decrement; inner++) {
      if (this[inner] > this[inner + 1]) {
        let temp = this[inner];
        this[inner] = this[inner + 1];
        this[inner + 1] = temp;
      }
    }
    decrement++;
  }
  return this;
}

String.prototype.substrings = function () {
  let array = [];

  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      // debugger
      array.push(this.slice(i, j));
    }
  }
  return array;
}