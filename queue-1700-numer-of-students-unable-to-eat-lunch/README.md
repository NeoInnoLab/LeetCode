# LeetCode 1700: Number of Students Unable to Eat Lunch

## Problem Description

You are given two arrays, `students` and `sandwiches`, where `students[i]` is the preference of the `i-th` student and `sandwiches[j]` is the type of the `j-th` sandwich. The students are numbered from `0` to `n - 1` and the sandwiches are numbered from `0` to `m - 1`.

The students choose their sandwiches in the order they appear in the `students` array. If the student's preference is equal to the type of the sandwich, they will take it and move on to the next student. Otherwise, they will leave it and go to the next student.

You need to determine the number of students who are unable to eat lunch.

## Example 1

`Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
Output: 0
Explanation:

- Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].
- Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].
- Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [0,1].
- Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].
- Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].
  Hence all students are able to eat.`

## Example 2

`Input: students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
Output: 3
`
