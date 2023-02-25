/*
INput = two arrays
Output = a single array with each element being the product of the element at that index in the other 2 arrays

Algorithm
- declare a function multiplyList with two parameters arr1 and arr2
- initialize a variable productsArr to an empty array
- iterate through the first array with an index parameter,
- declare a varible currentProduct and initialize it to the result of multiplying the current number by the number at the
same current index in arr 2
- push currentProduct to the productsArr
- return the productsarr
*/

function multiplyList(arr1, arr2) {
  let productsArr = [];

  arr1.forEach((number, index) => {
    let currentProduct = number * arr2[index];
    productsArr.push(currentProduct);
  });

  return productsArr;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
