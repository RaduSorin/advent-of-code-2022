const fs = require('fs');
let sum = 0;
let firstHalf = [];
let secondHalf = [];
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const allFileContents = fs.readFileSync('./puzzle#3/p3Input.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line => {

    firstHalf = line.slice(0, line.length / 2);
    secondHalf = line.slice(line.length / 2, line.length)

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

    const result = performIntersection(firstHalf, secondHalf).toString();

    if (result.toUpperCase() === result) {
        let upperCaseScore = alphabet.indexOf(result.toLowerCase()) + 1 + 26;
        sum += upperCaseScore;
    } else {
        let lowerCaseScore = alphabet.indexOf(result) + 1;
        sum += lowerCaseScore;
    }

});
console.log(sum);