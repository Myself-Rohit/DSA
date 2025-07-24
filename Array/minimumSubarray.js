let arr = [2, 3, 1, 2, 4, 3];
let target = 7;

function minimunSubarray(arr, target) {
  const n = arr.length;
  let start = 0;
  let end = 0;
  let minLength = Infinity;
  let prefixSum = 0;
  for (end = 0; end < n; end++) {
    prefixSum += arr[end];
    while (prefixSum >= target) {
      minLength = Math.min(minLength, end - start + 1);
      prefixSum -= arr[start];
      start++;
    }
  }
  return minLength == Infinity ? 0 : minLength;
}

console.log("original = ", arr);
const result = minimunSubarray(arr, target);
console.log("result = ", result);
