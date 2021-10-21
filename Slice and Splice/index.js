function frankenSplice(arr1, arr2, n) {
  let joinedArray = arr2.slice();
  joinedArray.splice(n,0,...arr1);
  return joinedArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);