import test from 'ava'
/**
 * Define a function that Zeros out any Negative Values in an Array
 *  - this function should set any negative numbers to 0
 *  - return the new array
 *
 */

const zeroOutArrayNegativeValues = (arr) => {
};

test('zeroOutArrayNegativeValues()', (t) => {
  t.deepEqual(zeroOutArrayNegativeValues([1, 2, -3, -4, 5]), [1, 2, 0, 0, 5]);
  t.deepEqual(zeroOutArrayNegativeValues([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  t.deepEqual(zeroOutArrayNegativeValues([]), []);
})

/**
 * Shift array values Left
 *   - this should Shift the array values left 1 spot and leave a 0 at the end
    - return the new array
 */

const shiftArrayValsLeft = (arr) => {
}

test('shiftArrayValsLeft()', (t) => {
  t.deepEqual(shiftArrayValsLeft([1, 2, -3, -4, 5]), [2, -3, -4, 5, 0]);
  t.deepEqual(shiftArrayValsLeft([1]), [0]);
  t.deepEqual(shiftArrayValsLeft([]), []);
})

/**
 * Swap String for Array Negatives Values
 * - replace any Negative values for the string "PROforma"
 */

const swapStringForNegativeValues = (arr) => {
}

test('swapStringForNegativeValues()', (t) => {
  t.deepEqual(swapStringForNegativeValues([1, 2, -3, -4, 5]), [1, 2, "PROforma", "PROforma", 5]);
  t.deepEqual(swapStringForNegativeValues([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  t.deepEqual(swapStringForNegativeValues([]), []);
})

/**
 * Return Odds Array 1 - 255
 *  Return an array that contains the odd numbers in the range 1-255
 */

const returnOddArray1to255 = () => {

}

test('returnOddArray1to255()', (t) => {
  t.deepEqual(returnOddArray1to255().length, 128);
  const result = returnOddArray1to255();
  result.forEach(i => {
    t.is(i % 2, 1, `Value ${i} is not even`)
  })
})

/**
 * Greater than Y
 * - return the count of numbers that are greater than  equal y
 */
const greaterThanY = (arr, y) => {
}

test("greaterThanY()", t => {
  t.deepEqual(greaterThanY([1,1,1,3,1,1,1], 2), 1)  
  t.deepEqual(greaterThanY([1,1,1,100,1,101,], 50), 2)  
  t.deepEqual(greaterThanY([1,1,1,3,1,1], 5), 0)  
  t.deepEqual(greaterThanY([-10, 0, 10], 0), 2)  
})




/**
 * Square and Sum all Values in array
 *  - return the sum of the squares of array of numbers
 */
const squareAndSumArr = (arr) => {
  
}


test("squareArr", t => {
  t.is(squareAndSumArr([2,2]), 8)
  t.is(squareAndSumArr([4,3,2]), 29)
  t.is(squareAndSumArr([101,100,200]), 60201)
  t.is(squareAndSumArr([]), 0)
})

