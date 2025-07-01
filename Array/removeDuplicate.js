// Removing duplicates from a sorted array

const arr = [1, 1, 1, 2, 3, 3, 4, 5, 6, 6, 6, 6, 6, 6, 7, 7];
// method 1 : using for and while loop
function removeDuplicate(arr) {
  const n = arr.length;
  let newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
    while (arr[i] === arr[i + 1] && i < n - 1) {
      i++;
    }
  }
  return newArr;
}

const answer = removeDuplicate(arr);
console.log("original = ", arr);
console.log("answer = ", answer);

// method 2 : using index pointer

function removeDuplicate2(arr) {
  const n = arr.length;
  if (n === 0) return [];
  let idx = 0;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr[idx] = arr[i];
      idx++;
    }
  }
  arr[idx] = arr[n - 1];
  return arr.slice(0, idx + 1);
}

const res = removeDuplicate2(arr);
console.log("original = ", arr);
console.log("answer = ", res);

// method 3 : using set
function removeDuplicate3(arr) {
  const n = arr.length;
  const arrSet = new Set(arr);
  const newArr = Array.from(arrSet);
  return newArr;
}

const res3 = removeDuplicate3(arr);
console.log("original = ", arr);
console.log("answer = ", res3);
