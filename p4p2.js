const fs = require('fs');
let numberOfIntervals = 0;

const allFileContents = fs.readFileSync('C:/Work/readText/p4Input.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line => {

    let firstInterval = [];
    let secondInterval = [];
    let number = [];

    let arr = line.split(',')
    arr.forEach((el) => {
        number.push(el.split('-'))
    })

    let firstElfStart = parseInt(number[0][0])
    let firstElfFinish = parseInt(number[0][1])
    let secondElfStart = parseInt(number[1][0])
    let secondElfFinish = parseInt(number[1][1])

    for (var i = firstElfStart; i <= firstElfFinish; i++) {
        firstInterval.push(i.toString())
    }

    for (var j = secondElfStart; j <= secondElfFinish; j++) {
        secondInterval.push(j.toString())
    }

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

    let intersection = performIntersection(firstInterval, secondInterval)

    if (intersection.length != 0) {
        numberOfIntervals++
    }

});
console.log(numberOfIntervals)