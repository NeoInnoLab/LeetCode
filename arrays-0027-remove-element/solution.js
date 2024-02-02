/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // splice(start, deleteCount, item1, item2, ..., itemN)
  // splice & i--
  // Beats 88.35%  time: O(n); space: O(n)
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};
