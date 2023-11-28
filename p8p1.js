const fs = require('fs');
let document = [];
var numberOfThrees = 0;

const allFileContents = fs.readFileSync('C:/Work/readText/p8Input.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line => {
    document.push(line);
});

function getTreesVertically(columnIndex) {
    let columnThrees = [];
    document.forEach((line) => {
        columnThrees.push(parseInt(line[columnIndex]))
    })
    return columnThrees;
}

function getTreesHorizontlly(lineIndex) {
    var threeHights = [];
    var threes = Array.from(document[lineIndex]);
    threes.forEach((hight) => {
        threeHights.push(parseInt(hight))
    })
    return threeHights;
}

for (var i = 0; i < document.length; i++) {
    var threesx = getTreesHorizontlly(i)
    for (var j = 0; j < threesx.length; j++) {

        var threesy = getTreesVertically(j)
        var arrLeft = threesx.slice(0, j)
        var arrRight = threesx.slice(j + 1, threesx.length)
        var arrUp = threesy.slice(0, i)
        var arrDown = threesy.slice(i + 1, threesy.length)
        var currentTree = parseInt(document[i][j])
        
        if (currentTree > Math.max(...arrLeft) || currentTree > Math.max(...arrRight) || currentTree > Math.max(...arrUp) || currentTree > Math.max(...arrDown)) {
            numberOfThrees++
        }
    }
}
console.log(numberOfThrees)