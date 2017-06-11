// Messing with solution display within index.html
document.getElementById('solutionText').innerHTML = 'test';

var multipleOf3 = [];

for (i = 0; i <= 1000; i++) {
    if (i%3 === 0) {
      multipleOf3.push(i);
    }
}

console.log(multipleOf3);
