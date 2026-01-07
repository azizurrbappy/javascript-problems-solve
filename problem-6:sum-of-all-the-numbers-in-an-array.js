/*
Problem 6: Sum of All Numbers in an Array
Write a function that returns the sum of all numbers in an array.

Example:
Input: [1, 2, 3, 4]
Output: 10
*/

function arraySum(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }
  return sum;
}

console.log(arraySum([1, 2, 3, 4]));
