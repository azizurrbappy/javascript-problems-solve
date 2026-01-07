/*
Problem 7: Find Even Numbers in an Array
Write a function that returns all even numbers from a given array.

Example:

Input: [1, 2, 3, 4, 5, 6]
Output: [2, 4, 6]
*/

function getEvenNumbers(array) {
  return array.filter(n => n % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
