Array.prototype.myEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i])
  }
}

Array.prototype.myMap = function (cb) {
  let mapped = [];
  for (let i = 0; i < this.length; i++) {
    mapped.push(cb(this[i]));
  }
  return mapped;
}

Array.prototype.myReduce = function (cb, initial = undefined) {
  let accumulator;
  let startIndex = 0;
  if (initial === undefined) {
    accumulator = this[startIndex];
    startIndex++;
  } else {
    accumulator = initial;
  }
  for (let i = startIndex; i < this.length; i++) {
    accumulator = cb(accumulator, this[i])
  }
  return accumulator;
}