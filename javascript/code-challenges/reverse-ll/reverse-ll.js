'use strict';

function reverseArray (a) {
  let b = [], counter = 0;

  for (let i = a.length - 1; i >= 0; i--) {
    b[counter] = a[i];
    counter += 1;
  }
  console.log(b);
  return b;
}

module.exports = reverseArray;
