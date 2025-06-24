function findMax(arr) {
  let maximum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }
  return maximum;
}

const arr = [5, 1, 9, 3, 7];
const maximum = findMax(arr);
console.log("array = ", arr);
console.log("maximum element = ", maximum);
