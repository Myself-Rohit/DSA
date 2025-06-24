// 2. Reverse an array
// method 1 : Using a simple for loop and pushing into a new array
const arr = [1, 2, 3, 4, 5];

console.log("method 1");
console.log("original = ", arr);

function findReverse(arr) {
  let arrRev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrRev.push(arr[i]);
  }
  return arrRev;
}

let rev1 = findReverse(arr);
console.log("reverse = ", rev1);

// method 2 : Using the built-in reverse() method (interviewer might ask about this)
console.log("method 2");
console.log("original = ", arr);

const rev2 = arr.reverse();
console.log("reverse = ", rev2);

// method 2 : Using the two-pointer approach (in-place reversal)

console.log("method 3");
console.log("original = ", arr);
function findRev(arr) {
  const n = arr.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    arr[i] = arr[i] + arr[n - i - 1];
    arr[n - i - 1] = arr[i] - arr[n - i - 1];
    arr[i] = arr[i] - arr[n - i - 1];
  }
  return arr;
}
const rev3 = findRev(arr);
console.log("reverse = ", rev3);
