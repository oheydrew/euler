var multipleArray = [];

for (i = 0; i < 1000; i++) {
    if (i%3 === 0 || i%5 === 0) {
      multipleArray.push(i);
    }
}

/*  use .reduce function to sum the array.
    .reduce takes 4 arguments, accumulator, currentValue, currentIndex, and array
    used the default names for my arguments for clarity
*/
var summedMultiples = multipleArray.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});

console.log(summedMultiples);

// Messing with solution display within index.html
document.getElementById('solutionText1').innerHTML = summedMultiples;
