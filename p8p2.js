const fs = require('fs');
let document = [];
let three = [];
let left = [];
let right = [];
let up = [];
let down = [];

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

        var threesy = getTreesVertically(j);
        var arrLeft = threesx.slice(0, j).reverse();
        var arrRight = threesx.slice(j + 1, threesx.length);
        var arrUp = threesy.slice(0, i).reverse();
        var arrDown = threesy.slice(i + 1, threesy.length);
        var currentTree = parseInt(document[i][j]);

        three.push(currentTree);
        left.push(arrLeft);
        right.push(arrRight);
        up.push(arrUp);
        down.push(arrDown);
    }
}

let treeScore = []

for (var i = 0; i < three.length; i++) {
    var treeVisibleLeft = 0;
    var treeVisibleRight = 0;
    var treeVisibleUp = 0;
    var treeVisibleDown = 0;

    for (j = 0; j < left[i].length; j++) {
        if (three[i] < left[i][j]) {
            treeVisibleLeft++;
            break;
        }
        if (three[i] == left[i][j]) {
            treeVisibleLeft++;
            break;
        }
        if (three[i] > left[i][j]) {
            treeVisibleLeft++;
        }
    }

    for (x = 0; x < right[i].length; x++) {
        if (three[i] < right[i][x]) {
            treeVisibleRight++;
            break;
        }
        if (three[i] == right[i][x]) {
            treeVisibleRight++;
            break;
        }
        if (three[i] > right[i][x]) {
            treeVisibleRight++
        }
    }

    for (y = 0; y < up[i].length; y++) {
        if (three[i] < up[i][y]) {
            treeVisibleUp++;
            break;
        }
        if (three[i] == up[i][y]) {
            treeVisibleUp++;
            break;
        }
        if (three[i] > up[i][y]) {
            treeVisibleUp++
        }
    }

    for (z = 0; z < down[i].length; z++) {
        if (three[i] < down[i][z]) {
            treeVisibleDown++;
            break;
        }
        if (three[i] == down[i][z]) {
            treeVisibleDown++;
            break;
        }
        if (three[i] > down[i][z]) {
            treeVisibleDown++
        }
    }
    var score = treeVisibleLeft * treeVisibleRight * treeVisibleDown * treeVisibleUp;
    treeScore.push(score)
}
console.log(Math.max(...treeScore))