/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  // Eg. ["5","2","C","D","+"]
  // C: Remove the previous
  // D: Double the previous
  // +: Sum up the two previous
  // Use at(-1) for peek() in JS
  // Check if the string is Number, use !isNaN(parseInt(val))
  // NaN: Not a Number
  // Beats 92.56%; Time O(n); Space O(n)

  let stack = [];
  let ans = 0;
  for (let op of operations) {
    if (op === "C" && stack.length > 0) {
      stack.pop();
    } else if (op === "D") {
      stack.push(stack.at(-1) * 2);
    } else if (op === "+") {
      let a = stack.at(-1);
      stack.pop();
      let b = stack.at(-1);
      stack.push(a);
      stack.push(a + b);
    } else {
      stack.push(parseInt(op));
    }
  }
  for (let s of stack) {
    ans += s;
  }
  return ans;
};
