# LeetCode 225: Implement Stack using Queues

This is a solution to the LeetCode problem 225 - Implement Stack using Queues. The problem requires implementing a stack using only queues. The stack should support the following operations: push, pop, top, and empty.

The solution provided in this repository demonstrates how to implement a stack using two queues. It provides an efficient implementation of the stack operations and ensures that the stack behaves as expected.

## Problem Description

Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

## Example

`Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False`
