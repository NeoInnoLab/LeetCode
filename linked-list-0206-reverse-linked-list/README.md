# LeetCode 206: Reverse Linked List

## Problem Description

Given the head of a singly linked list, reverse the list and return the reversed list.

## Example

Input: 1 -> 2 -> 3 -> 4 -> 5
Output: 5 -> 4 -> 3 -> 2 -> 1

## Approach

To reverse a linked list, we can use the iterative or recursive approach. In the iterative approach, we maintain three pointers: `prev`, `curr`, and `next`. We update the pointers in each iteration to reverse the links between the nodes. In the recursive approach, we recursively reverse the rest of the list and then update the links.

## Complexity Analysis

The time complexity for both the iterative and recursive approaches is O(n), where n is the number of nodes in the linked list. The space complexity is O(1) for the iterative approach and O(n) for the recursive approach due to the recursive call stack.

## Related Topics

- Linked List
- Two Pointers
