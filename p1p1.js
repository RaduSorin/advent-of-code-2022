const fs = require('fs');
let caloriesSums = [];
let sum = 0;

const allFileContents = fs.readFileSync('C:/Work/readText/p1Input.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line => {

    if (line == "") {
        caloriesSums.push(sum)
        sum = 0;
    } else {
        sum = sum + parseInt(line);
    }
});
console.log(Math.max(...caloriesSums))