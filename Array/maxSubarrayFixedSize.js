let arr = [2, 1, 5, 1, 3, 2];
let k = 3;

// method 1 :  brute-force solution
function findMaxSubarray(arr, k) {
  let n = arr.length;
  let maximum = -Infinity;
  for (let i = 0; i < n - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    maximum = Math.max(maximum, sum);
  }
  return maximum;
}

console.log("original = ", arr);
const answer = findMaxSubarray(arr, k);
console.log("answer = ", answer);

// method 2 :  Sliding Window approach (optimal)
function findMaxSubarray1(arr, k) {
  let n = arr.length;
  if (n < k) return null;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  let maximum = sum;
  for (let i = 1; i <= n - k; i++) {
    sum = sum + arr[i + k - 1] - arr[i - 1];
    maximum = Math.max(sum, maximum);
  }

  return maximum;
}

console.log("original = ", arr);
const result = findMaxSubarray1(arr, k);
console.log("result = ", result);
