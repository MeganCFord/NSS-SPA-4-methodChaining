
// Using one single line of JavaScript code, complete the following tasks on the array of integers below.


var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];


// Sort the numbers in descending order (10, 9, 8, 7, etc).
// integers = integers.sort(function(first, second) {
//   return second - first;
// });

// // Remove any integers greater than 19.
// //console.log("integers sorted", integers);

// integers = integers.filter(function(number) {
//   return (number < 20);
// });

// //console.log("integers sorted and without large numbers", integers);

// // Multiply each remaining number by 1.5 and then subtract 1.
// integers = integers.map(function(number){return ((number * 1.5) + 1);
// });

// //console.log("integers sorted, without large numbers, mathed", integers );

// // Then output (either in the DOM or the console) the sum of all the resulting numbers.

// integers = integers.reduce = (function(oldNumber, newNumber) {
//   return oldNumber + newNumber;
// });

//console.log("final number", integers );

var result = integers
  .sort(function(first, second) {return second-first})
  .filter(function(number) {return number < 19})
  .map(function(number) {return((number*1.5)-1)})
  .reduce(function(oldNumber, newNumber) {return oldNumber + newNumber});

console.log("integers test", result );
