/* 
Problem 1: Reverse a String
Write a function that takes a string and returns it reversed.

Example:
Input: "hello"
Output: "olleh" 
*/

function reverseString(string) {
  const reversedString = string.split('').reverse().join('');
  return reversedString;
}

console.log(reverseString('hello'));
