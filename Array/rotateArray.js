let arr = [1, 2, 3, 4, 5];
let k = 2;
// method 1 : with extra space
function rotateArr(arr, k) {
  let n = arr.length;
  if (k > n) {
    k = k % n;
  }
  let newArr = [];
  for (let i = 0; i < k; i++) {
    newArr.push(arr[i]);
  }
  for (let i = k; i < n; i++) {
    arr[i - k] = arr[i];
  }
  for (let i = n - k; i < n; i++) {
    arr.pop();
  }
  for (let i = 0; i < newArr.length; i++) {
    arr.push(newArr[i]);
  }
  return arr;
}

console.log("Original = ", arr);
const ans = rotateArr(arr, k);
console.log("Output = ", ans);

// method 2 : in-place approach (optimal)
function rev(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}
function rotateArray(arr, k) {
  let n = arr.length;
  if (k > n) {
    k = k % n;
  }
  rev(arr, 0, k - 1);
  rev(arr, k, n - 1);
  rev(arr, 0, n - 1);

  return arr;
}

console.log("Original = ", arr);
const res = rotateArray(arr, k);
console.log("Output = ", res);
