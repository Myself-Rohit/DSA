let arr = [1, 2, 3, 4, 5];
// method 1 : using in-build function
function rotateArr(arr) {
  arr.push(arr[0]);
  arr.shift();
  return arr;
}

console.log("Original = ", arr);
const ans = rotateArr(arr);
console.log("Output = ", ans);

// method 2 : In-place efficient rotation (optimal)
function rotateByOne(arr) {
  let n = arr.length;
  if (n < 2) {
    return arr;
  }
  const val = arr[0];
  for (let i = 0; i < n - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[n - 1] = val;
}

console.log("Original = ", arr);
const res = rotateByOne(arr);
console.log("Output = ", res);
