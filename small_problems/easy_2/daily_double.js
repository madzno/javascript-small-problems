/*
Input = string
output = new string

Rules
1. new strings should have consecutive duplicate characters
collapsed into a single character

Algorithm
1. define a function crunch that takes a string as an argument
2. initilaize a variable resultString to an empty string
3. iterate through the imput string, if the
*/

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
