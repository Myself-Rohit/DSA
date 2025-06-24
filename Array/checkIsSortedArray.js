function isSorted(arr) {
  const n = arr.length;
  if (n < 2) {
    return true;
  }
  for (let i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

const arr = [1, 2, 3, 4, 5];
console.log("original = ", arr);
console.log("sorted = ", isSorted(arr));
