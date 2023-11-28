const fs = require('fs');

let firstContainer = [];
let secondContainer = [];
let thirdContainer = [];
let forthContainer = [];
let fiveContainer = [];
let sixContainer = [];
let sevenContainer = [];
let eightContainer = [];
let nineContainer = [];

let document = [];
var containers = {
    1: firstContainer,
    2: secondContainer,
    3: thirdContainer,
    4: forthContainer,
    5: fiveContainer,
    6: sixContainer,
    7: sevenContainer,
    8: eightContainer,
    9: nineContainer
}

const allFileContents = fs.readFileSync('./puzzle#5/p5Input.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line => {
    document.push(line);

    if (line[1] && line[1].toUpperCase() === line[1] && isNaN(line[1])) {
        firstContainer.push(line[1])
    }
    if (line[5] && line[5].toUpperCase() === line[5] && isNaN(line[5])) {
        secondContainer.push(line[5])
    }
    if (line[9] && line[9].toUpperCase() === line[9] && isNaN(line[9])) {
        thirdContainer.push(line[9])
    }
    if (line[13] && line[13].toUpperCase() === line[13] && isNaN(line[13])) {
        forthContainer.push(line[13])
    }
    if (line[17] && line[17].toUpperCase() === line[17] && isNaN(line[17])) {
        fiveContainer.push(line[17])
    }
    if (line[21] && line[21].toUpperCase() === line[21] && isNaN(line[21])) {
        sixContainer.push(line[21])
    }
    if (line[25] && line[25].toUpperCase() === line[25] && isNaN(line[25])) {
        sevenContainer.push(line[25])
    }
    if (line[29] && line[29].toUpperCase() === line[29] && isNaN(line[29])) {
        eightContainer.push(line[29])
    }
    if (line[33] && line[33].toUpperCase() === line[33] && isNaN(line[33])) {
        nineContainer.push(line[33])
    }
});

let instructions = document.slice(10, document.length);

function numberOfBloksToMove(index) {
    if (instructions[index].length == 19) {
        return parseInt(instructions[index][5] + instructions[index][6]);
    } else {
        return parseInt(instructions[index][5]);
    }
}

function fromContainer(index) {
    if (instructions[index].length == 19) {
        return parseInt(instructions[index][12] + instructions[index][13]);
    } else {
        return parseInt(instructions[index][12]);
    }
}

function toContainer(index) {
    if (instructions[index].length == 19) {
        return parseInt(instructions[index][17] + instructions[index][18]);
    } else {
        return parseInt(instructions[index][17]);
    }
}
instructions.forEach((instruction) => {
    var index = instructions.indexOf(instruction);
    var elementsToMoveNr = numberOfBloksToMove(index);
    var containerToRemoveNr = fromContainer(index);
    var containerToAddNr = toContainer(index);
    var transferElements = [];

    for (var i = 0; i < elementsToMoveNr; i++) {
        transferElements.push(containers[containerToRemoveNr][i])
    }

    containers[containerToAddNr] = transferElements.reverse().concat(containers[containerToAddNr]);
    containers[containerToRemoveNr] = containers[containerToRemoveNr].slice(transferElements.length);

})

Object.keys(containers).forEach(function (key) {
    console.log(key, containers[key][0]);
});