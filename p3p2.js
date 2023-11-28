const fs = require('fs');
let sum = 0;
var chunks = [];
var arrayOfLines = [];
let firstLine = [];
let secondLine = [];
let thirdLine = [];
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const allFileContents = fs.readFileSync('C:/Work/readText/p3Input.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line => {

    arrayOfLines.push(line)
});

while (arrayOfLines.length > 0) {

    chunks.push(arrayOfLines.splice(0,3))
  
  }

chunks.forEach((chunk)=>{
    firstLine = chunk[0]
    secondLine = chunk[1]
    thirdLine = chunk[2]

    const firstComparation = performIntersection(firstLine, secondLine)
    const secondComparation = performIntersection(firstComparation, thirdLine).toString()

    if (secondComparation.toUpperCase() === secondComparation) {
        let upperCaseScore = alphabet.indexOf(secondComparation.toLowerCase()) + 1 + 26;
        sum += upperCaseScore;
    } else {
        let lowerCaseScore = alphabet.indexOf(secondComparation) + 1;
        sum += lowerCaseScore;
    }
    
})

console.log(sum)

function performIntersection(arr1, arr2) {

    const setA = new Set(arr1);
    const setB = new Set(arr2);

    let intersectionResult = [];

    for (let i of setB) {

        if (setA.has(i)) {
            intersectionResult.push(i);
        }

    }

    return intersectionResult;

}