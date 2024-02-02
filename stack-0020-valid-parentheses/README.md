# LeetCode 20: Valid Parentheses

## Problem Description

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

## Example

`
Input: "()"
Output: true

Input: "()[]{}"
Output: true

Input: "(]"
Output: false
`

## Approach

To solve this problem, we can use a stack data structure to keep track of the opening brackets. Whenever we encounter a closing bracket, we check if it matches the top of the stack. If it does, we pop the top element from the stack. If it doesn't, or if the stack is empty, the string is not valid.

## Complexity Analysis

The time complexity for this approach is O(n), where n is the length of the input string. This is because we iterate through the string once. The space complexity is also O(n), as the stack can store at most n/2 elements in the worst case.

## Related Topics

- Stack
- String
