const s = "abcabjkjcbb";

// return  longest Substring Without repeating Character
function longestSubstringWithoutrepeatingCharacter(s) {
  let n = s.length;
  let maxLen = 0;
  let start = 0;
  let end = 0;
  let st = new Set();
  let str = "";
  while (end < n) {
    while (st.has(s[end])) {
      st.delete(s[start]);
      start++;
    }
    st.add(s[end]);
    if (end - start + 1 > maxLen) {
      maxLen = end - start + 1;
      str = s.slice(start, end + 1);
    }
    end++;
  }
  return { maxLen, str };
}

console.log("original = ", s);
const result = longestSubarrayWithoutrepeatingCharacter(s);
console.log("len = ", result.maxLen);
console.log("str = ", result.str);
