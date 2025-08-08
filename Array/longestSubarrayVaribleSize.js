let arr = [1, 2, 1, 0, 1, 1, 0];
let k = 4;
// works only for positive array elements
// Sliding Window fails if array has negative value
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

// works for all(positive/negative/zero) array elements

function findLongestSubarray(arr, k) {
  let map = new Map();
  let prefixSum = 0;
  let maxLen = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    prefixSum += arr[i];
    if (prefixSum === k) {
      maxLen++;
    }
    if (map.has(prefixSum - k)) {
      const len = i - map.get(prefixSum - k);
      maxLen = Math.max(maxLen, len);
    }
    if (!map.has(prefixSum)) {
      map.set(prefixSum, i);
    }
  }
  return maxLen;
}

console.log("original = ", arr);
const ans = findLongestSubarray(arr, k);
console.log("answer = ", ans);

