# LeetCode 1929: Concatenation of Array

## Problem Description

Given an integer array `nums` of length `n`, you need to create a new array `ans` of length `2n`, where `ans[i] == nums[i]` and `ans[i + n] == nums[i]` for `0 <= i < n` (0-indexed).

Return the concatenated array `ans`.

## Example

Input: `nums = [1,2,1]`
Output: `[1,2,1,1,2,1]`

Input: `nums = [1,3,2,1]`
Output: `[1,3,2,1,1,3,2,1]`

## Constraints

- `1 <= n <= 1000`
- `1 <= nums[i] <= 1000`

## Solution

The solution is straightforward. We can initialize an empty array `ans` and then iterate over the elements of `nums`. For each element `num`, we append it to `ans` twice. Finally, we return `ans`.
