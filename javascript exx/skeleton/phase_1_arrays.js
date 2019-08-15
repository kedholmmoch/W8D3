Array.prototype.uniq = function() {
  let hash = {};
  this.forEach( function (el) {
    if (hash[el] === undefined) {
      hash[el] = true;
    }
  } );
  return Object.keys(hash);
};

Array.prototype.twoSum = function() {
  let startIndex = 0;
  let endIndex = this.length;
  let pairs = [];
  while (startIndex < endIndex - 1) {
    for (let i = startIndex + 1; i < endIndex; i++) {
      if (this[i] + this[startIndex] === 0) {
        pairs.push([startIndex, i]);
      }
    }
    startIndex++;
  }
  return pairs;
}

Array.prototype.transpose = function () {
  size = this.length;
  matrix = [];
  for(let i = 0; i < size; i++) {
    matrix.push([])
  }
  this.forEach( function (row, row_idx) {
    row.forEach( function (el, col_idx) {
      // debugger
      matrix[col_idx].push(el);
    } );
  } );
  return matrix;
}





