// Longest Substring with At Most K Distinct Characters
let s = "eceba";
let k = 2;
let start = 0;
let end = 0;

function subStringWithAtMostKDistinctChar(s, k) {
  let n = s.length;
  let maxLen = 0;
  let map = new Map();
  let start = 0;
  let end = 0;
  let str = "";
  while (end < n) {
    map.set(s[end], (map.get(s[end]) || 0) + 1);
    while (map.size > k) {
      map.set(s[start], map.get(s[start]) - 1);
      if (map.get(s[start]) == 0) {
        map.delete(s[start]);
      }
      start++;
    }

    if (end - start + 1 > maxLen) {
      maxLen = end - start + 1;
      str = s.splice(start, end + 1);
    }
    end++;
  }

  return { maxLen, str };
}

console.log("Original = ", s);
const res = subStringWithAtMostKDistinctChar(s, k);
console.log("Output = ", res);
