let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// method 1 :  brute-force solution
function maximumSum(arr) {
  let n = arr.length;
  let maximun = -Infinity;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (maximun < sum) {
        maximun = sum;
      }
    }
  }
  return maximun;
}

console.log("Original = ", arr);
const ans = maximumSum(arr);
console.log("Output = ", ans);

// method 2 :  Kadane’s Algorithm return maximum sum(optimal)
function maximumSum1(arr) {
  let n = arr.length;
  if (n === 0) return null;
  let currSum = arr[0];
  let maximum = arr[0];
  for (let i = 1; i < n; i++) {
    currSum = Math.max(arr[i], currSum + arr[i]);
    maximum = Math.max(maximum, currSum);
  }
  return maximum;
}
console.log("Original = ", arr);
const res = maximumSum1(arr);
console.log("Output = ", res);

// method 3 :  Kadane’s Algorithm return maximum sum subarray(optimal)
function maximumSum2(arr) {
  let n = arr.length;
  if (n === 0) return null;
  let currSum = arr[0];
  let maximum = arr[0];
  let start = 0;
  let tempStart = 0;
  let end = 0;
  for (let i = 1; i < n; i++) {
    if (arr[i] > currSum + arr[i]) {
      currSum = arr[i];
      tempStart = i;
    } else {
      currSum = currSum + arr[i];
    }
    if (currSum > maximum) {
      maximum = currSum;
      start = tempStart;
      end = i;
    }
  }
  return { maximum, subArr: arr.slice(start, end + 1) };
}
console.log("Original = ", arr);
const result = maximumSum2(arr);
console.log("Output maximum = ", result.maximum);
console.log("Output subarray = ", result.subArr);
