const fs = require('fs');
let sequence = [];
let elementsEliminated = 0;

const allFileContents = fs.readFileSync('C:/Work/readText/p6Input.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line => {

    for (var i = 0; i < line.length; i++) {

        if (sequence.length < 4 && sequence.includes(line[i])) {

            line = line.substring(1);
            elementsEliminated++;
            sequence = [];
            i = 0 - 1;
            
        } else if (sequence.length < 4) {

            sequence.push(line[i]);
            console.log(elementsEliminated + 4)

        }
    }
    console.log(sequence)
});