function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.ceil((arr.length - 1) / 2);

  while (start < end) {
    if (arr[middle] === val) {
      return middle;
    } else {
      if (arr[middle] < val) {
        start = middle;
      } else {
        end = middle;
      }
      middle = Math.ceil((start + end) / 2);
    }
  }
  return -1;
}

console.log(binarySearch([1, 4, 5, 6, 8, 9, 34, 45, 56, 78], 5));
