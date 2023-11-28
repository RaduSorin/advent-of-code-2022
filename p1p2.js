const fs = require('fs');
let caloriesSums = [];
let sum = 0;

const allFileContents = fs.readFileSync('C:/Work/readText/p1Input.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line => {

    if (line == "") {
        // console.log(sum)
        caloriesSums.push(sum)
        sum = 0;
    } else {
        sum = sum + parseInt(line);
    }
});
console.log(Math.max(...caloriesSums))
// Arrays.sort(caloriesSums, Collections.reverseOrder());
caloriesSums.sort(function(a, b) {
    return a - b;
  });

  let topThree = caloriesSums.reverse().slice(0,3)

  function sumGrades(grades) {
    let sum = 0;
    grades.forEach(function (grade) {
        sum += grade;
    })
    return sum;
}

console.log(sumGrades(topThree))
