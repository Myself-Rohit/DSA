let arr = [0, 1, 0, 3, 12];
function moveToEnd(arr) {
  let n = arr.length;
  let k = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      if (i !== k) {
        [arr[i], arr[k]] = [arr[k], arr[i]];
      }
      k++;
    }
  }
  return arr;
}

console.log("Original = ", arr);
const ans = moveToEnd(arr);
console.log("Output = ", ans);
