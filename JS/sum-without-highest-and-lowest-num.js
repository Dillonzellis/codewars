// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

const ar1 = [6, 2, 1, 8, 10];
const ar2 = [1, 1, 11, 2, 3];
// { 1, 1, 11, 2, 3 } => 6

function sumArray2(array) {
  const highest = Math.max(...array);
  const lowest = Math.min(...array);
  console.log(highest);
  console.log(lowest);

  const highFilter = array.filter(function (value) {
    return value != highest;
  });

  const lowFilter = highFilter.filter(function (value) {
    return value != lowest;
  });

  console.log(lowFilter);

  return lowFilter.reduce((a, b) => a + b);
}

function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function (a, b) {
      return a - b;
    });

    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}

console.log(sumArray(ar1));
// console.log(sumArray(ar2));
