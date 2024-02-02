# LeetCode Problem 26: Remove Duplicates from Sorted Array

## Problem Description

Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

## Example

`Input: nums = [1,1,2]
Output: 2, nums = [1,2]

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4]`

## Approach

To solve this problem, we can use two pointers: one to iterate through the array and another to keep track of the unique elements.

1. Initialize a pointer `i` to 0.
2. Iterate through the array starting from index 1.
3. If the current element is different from the previous element, increment `i` and update `nums[i]` with the current element.
4. Return `i + 1` as the new length of the array.

## Complexity Analysis

- Time complexity: O(n), where n is the length of the input array.
- Space complexity: O(1), as we are modifying the input array in-place.
