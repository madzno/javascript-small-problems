/*
Input = an array
Output = two arrays, the input array split in half

Algorithm
1. define a function halvsies with a parameter, array
2. declare a variable halfwayPoint and initialize it to the length of halvsies
divided by 2 and rounded up
3. initialize a variable firstHalf to the return value of calling slice and providing 0 as the starting
index and halfwayPoint as the ending index
4. initialize a varaible seocndHalf to the return value of calling slice and providing halfwayPoint
as the starting index and no ending index (automatically will end at the end of the array)
5. return an array with the first element as firstHalf and the second element as secondHalf
*/

function halvsies(arr) {
  let halfwayPoint = Math.ceil(arr.length / 2);
  let firstHalf = arr.slice(0, halfwayPoint);
  let secondHalf = arr.slice(halfwayPoint);
  return [firstHalf, secondHalf];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
