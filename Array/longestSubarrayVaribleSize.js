let arr = [1, 2, 1, 0, 1, 1, 0];
let k = 4;

function longestSubarray(arr, k) {
  let n = arr.length;
  let sum = 0;
  let maxLen = 0;
  let start = 0;
  for (let end = 0; end < n; end++) {
    sum += arr[end];
    while (sum > k) {
      sum -= arr[start];
      start++;
    }
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
}

console.log("original = ", arr);
const result = longestSubarray(arr, k);
console.log("result = ", result);
