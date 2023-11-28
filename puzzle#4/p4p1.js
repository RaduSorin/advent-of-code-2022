const fs = require('fs');
let numberOfIntervals = 0;

const allFileContents = fs.readFileSync('./puzzle#4/p4Input.txt', 'utf-8');
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

    const firstToSecond = firstInterval.every(element => {
        return secondInterval.includes(element);
    });

    const secondToFirst = secondInterval.every(element => {
        return firstInterval.includes(element);
    });

    if (firstToSecond || secondToFirst) {
        numberOfIntervals++
    }

});
console.log(numberOfIntervals)