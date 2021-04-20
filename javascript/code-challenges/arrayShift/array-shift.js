"use strict";
//array is the array in which you want to insert.
//item is the value which you want to insert.

// function insertShiftArray(array, item) {
//   let middle = Math.floor(array.length / 2); //this puts it in the middle
//   array.splice(middle, 0, item);
//   return array;
// }
// console.log(insertShiftArray([2, 4, 6, 8], 5));
// console.log(insertShiftArray([4, 8, 15, 23, 42], 16));

// module.exports = function insertShiftArray(something) {
//   return true;
// };
// argument 1 is the index where you want to make the change. for us its (middle)

// argument 2 is the number of elements you want to remove starting at that index.
//we dont want to remove any so we put it as (0)

// argument 3 is the element you want to insert at that index.(item)

//////////////////////////////////////////////////////////////////////////

const insertShiftArray = (arr, val) => {
    const newArr = [];
    const middleIndex = Math.ceil(arr.length / 2);
    for (let i = 0; i <= arr.length; i++) 
      if (i < middleIndex) {
        newArr.push(arr[i]);
      } else if (i === middleIndex) {
        newArr.push(val);
      } else if (i > middleIndex) {
        newArr.push(arr[i - 1]);
      }
      console.log(middleIndex);
      console.log(newArr);
      return newArr;
  };
  
  insertShiftArray([2, 4, 6, 8], 5);
  insertShiftArray([4, 8, 15, 23, 42], 16);


  module.exports = { insertShiftArray };