function range(start, end) {
  if (start === end) {
    return [end];
  }
  return [start].concat(range(start + 1, end));
}

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sumRec(arr.slice(1));
}

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent(base, exp - 1);
}

function fibonacci(num) {
  if (num === 1) {
    return [1];
  } else if (num === 2) {
    return [1, 1];
  }
  // debugger
  let prevFib = fibonacci(num - 1);
  let prevFibLength = prevFib.length;
  prevFib.push(prevFib[prevFibLength - 1] + prevFib[prevFibLength - 2]);
  return prevFib;
}

function deepDup(array) {
  if (Array.isArray(array)) {
    if (array.length === 0) {
      return [];
    }
    let res = [deepDup(array[0])].concat(deepDup(array.slice(1)));
    return res;
  }
  else {
    return [array];
  }
}

function bsearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }
  let midIdx = Math.floor(arr.length / 2);
  if (arr[midIdx] === target) {
    return midIdx;
  } else if (target > arr[midIdx]) {
    return bsearch(arr.slice(midIdx + 1), target) + midIdx + 1;
  } else {
    return bsearch(arr.slice(0, midIdx), target)
  }
}

function merge(arr1, arr2) {
  let sorted = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }
  // debugger
  return sorted.concat(arr1, arr2);

}

function mergesort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  // debugger
  let midIdx = Math.floor(arr.length / 2);
  let left = arr.slice(0, midIdx);
  let right = arr.slice(midIdx);
  let merged = merge(mergesort(left), mergesort(right));
  return merged;
}