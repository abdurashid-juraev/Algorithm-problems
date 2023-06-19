// @ts-nocheck
// * Given an array of integers, return a new array with each value doubled.

// * [1, 2, 3] --> [2, 4, 6]

const arr = [1, 2, 3];
function maps(x) {
  let double = x.map((el) => el * 2);
  return double;
}
maps(arr);

// * Time: 857ms Passed: 1Failed: 0
