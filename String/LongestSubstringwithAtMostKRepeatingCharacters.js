// Longest Substring with At Most K Repeating Characters
let s = "aaabbcc";
let k = 2;
function longestSubString(s, k) {
  let maxLen = 0;
  let n = s.length;
  let end = 0;
  let start = 0;
  let map = new Map();
  while (end < n) {
    map.set(s[end], (map.get(s[end]) || 0) + 1);
    while ([...map.values()].some((count) => count > k)) {
      map.set(s[start], map.get(s[start]) - 1);
      if (map.get(s[start]) === 0) map.delete(s[start]);
      start++;
    }
    maxLen = Math.max(maxLen, end - start + 1);
    end++;
  }
  return maxLen;
}

console.log("Original = ", s);
const res = longestSubString(s, k);
console.log("longest substring = ", res);
