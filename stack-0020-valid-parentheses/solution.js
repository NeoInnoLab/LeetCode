/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // a Stack
  // Beats 83.37%; Time O(n); Space O(n)
  let stack = [];
  for (let i of s) {
    if (i === "(" || i === "{" || i === "[") {
      stack.push(i);
    } else if (
      stack.length > 0 &&
      ((i === ")" && stack.at(-1) === "(") ||
        (i === "}" && stack.at(-1) === "{") ||
        (i === "]" && stack.at(-1) === "["))
    ) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0 && true;
};
