/*
Input = a string
Output = true if the string is a palindrome and false if its not

Rules
1. case matters (the letters must also have the same case on either side)
2. all types of characters matter (spaces and punctuation)

What is a palindrome?
A palindrome is a string that reads the same way backwards as it does
forwards

Algorithm
1. define a function isPalindrome with one parameter, string
2. declare a variable reversedString to the return value of calling split, reverse, and join
on the input string
3. return the result of string === reversedString
*/

function isPalindrome(string) {
  let reversedString = string.split('').reverse().join('');
  return string === reversedString;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
