"use strict";

function binarySearch(arr, num) {
  let min = 0;
  let max = arr.length - 1;
  while (min + 1 !== max) {
    let mid = Math.ceil((min + max) / 2);
    if (arr[mid] === num) {
      return mid;
    }
    if (arr[mid] < num) {
      min = mid;
    }
    if (arr[mid] > num) {
      max = mid;
    }
  }
  return -1;
}

module.exports = binarySearch;
