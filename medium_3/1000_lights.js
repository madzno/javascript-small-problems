"use strict";
/*
Data structure
- an array of booleans and indices represent the number of the lights

Algorithm
- define a function lightsOn with one parameter switches

- generateLightsArr
- declare a variable lightsArr to an array with one element 'false' (indice 0)
- start a for loop, declare a variable counter to 0, iterate while counter is less than or equal to switches, and add 1 to counter
- for each counter, push a 'false' to the lights Arr

- toggle for N rounds
- start a for loop, declare a variable rounds to 1, iterate while counter is less than or equal to switches, and add 1 to counter
 -  for each round, iterate through the lightsArr with index
  - if the index is 0, assign the element to false
  - if the index is evenly divisible by rounds and the current element is equal to true, change the element to false
  - if the index is evenly divisible by rounds and the current element is equal to false, change the element to true

- get the index's of the true elements
- declare a variable onLights and initilaize it to an empty array
- iterate through lightsArr, if the current element is true add its index to onLights

- return onLIghts
*/

function generateLightsArr(switches) {
  let lightsArr = [false];
  for (let counter = 1; counter <= switches; counter += 1) {
    lightsArr.push(false);
  }

  return lightsArr;
}

function lightsOn(switches) {
  let lightsArr = generateLightsArr(switches);

  for (let rounds = 1; rounds <= switches; rounds += 1) {
    lightsArr.forEach((light, index, array) => {
      if (index === 0) {
        array[index] = false;
      } else if ((index % rounds === 0) && light === true) {
        array[index] = false;
      } else if ((index % rounds === 0) && light === false) {
        array[index] = true;
      }
    });
  }

  let onLights = [];
  lightsArr.forEach((element, idx) => {
    if (element === true) {
      onLights.push(idx);
    }
  });

  return onLights;
}


console.log(lightsOn(5)); // [1, 4]
console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(7)); // [1, 4]
console.log(lightsOn(10)); // [1, 4, 9]
console.log(lightsOn(1)); // [1]
