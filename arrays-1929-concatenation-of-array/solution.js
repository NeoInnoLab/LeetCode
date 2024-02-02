/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  // Beats 95.18%;  Time O(n); Space O(n)
  let ans = nums.concat(nums);
  return ans;
};
