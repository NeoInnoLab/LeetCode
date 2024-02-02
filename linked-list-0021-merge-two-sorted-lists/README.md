# LeetCode 21: Merge Two Sorted Lists

## Problem Description

Given two sorted linked lists, we need to merge them into a single sorted linked list and return the head of the merged list.

## Example

Input:
List 1: 1 -> 2 -> 4
List 2: 1 -> 3 -> 4

Output:
1 -> 1 -> 2 -> 3 -> 4 -> 4

## Approach

To solve this problem, we can use a simple iterative approach. We'll compare the values of the nodes from both lists and merge them in ascending order. We'll continue this process until we reach the end of either list. Finally, we'll append the remaining nodes from the non-empty list to the merged list.

## Complexity Analysis

The time complexity for this approach is O(n + m), where n and m are the lengths of the two input lists. The space complexity is O(1), as we are not using any extra space apart from the merged list.
