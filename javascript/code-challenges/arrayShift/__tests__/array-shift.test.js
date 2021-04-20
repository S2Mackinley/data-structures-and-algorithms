"use strict";

const { insertShiftArray } = require('../array-shift');

describe("***Array Shift***", () => {
  test("It should return an array with the given number inserted into the middle", () => {
    expect(insertShiftArray([2, 4, 6, 8], 5)).toStrictEqual([2, 4, 5, 6, 8]);
    expect(insertShiftArray([4,8,15,23,42], 16)).toStrictEqual([4,8,15,16,23,42]);
  });
});
