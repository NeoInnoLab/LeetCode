# LeetCode 27. Remove Element

## Problem Description

Given an array `nums` and a value `val`, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

**Example 1:**

Input: `nums = [3,2,2,3], val = 3`
Output: `2, nums = [2,2]`
Explanation: Your function should return length = 2, with the first two elements of nums being 2.

**Example 2:**

Input: `nums = [0,1,2,2,3,0,4,2], val = 2`
Output: `5, nums = [0,1,3,0,4]`
Explanation: Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.

## Approach

To solve this problem, we can use the two-pointer technique. We can maintain two pointers, `i` and `j`, where `i` is the slow-runner and `j` is the fast-runner.

- Initialize `i` to 0.
- Iterate through the array using `j`:
  - If `nums[j]` is not equal to `val`, assign `nums[j]` to `nums[i]` and increment `i`.
- Finally, return `i` as the new length of the modified array.

## Complexity Analysis

The time complexity for this approach is O(n), where n is the length of the input array `nums`. This is because we iterate through the array once.
The space complexity is O(1) since we are modifying the input array in-place without using any extra space.

## Related Topics

- Array
- Two Pointers
