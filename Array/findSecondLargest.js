let arr = [1, 4, 2, 7, 5];

function secondLargest(arr) {
  let n = arr.length;
  if (n < 2) return null;

  let first = -Infinity;
  let sec = -Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] > first) {
      sec = first;
      first = arr[i];
    } else if (arr[i] > sec && arr[i] !== first) {
      sec = arr[i];
    }
  }
  return sec === -Infinity ? null : sec;
}

console.log("Original = ", arr);
const ans = secondLargest(arr);
console.log("Output = ", ans);
