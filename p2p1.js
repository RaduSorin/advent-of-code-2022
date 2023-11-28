const fs = require('fs');
let inputArr = [];
let roundScores = [];
var score;

fs.readFile('C:/Work/readText/p2Input.txt', 'utf8', (err, input) => {
    if (err) {
        console.error(err);
        return;
    }
    inputArr = input.split("\r\n")

    inputArr.forEach((round) => {
        switch (round) {
            case 'A X':
                // DRAW 3 + ROCK 1 = 4 points
                score = 4;
                roundScores.push(score)
                break;
            case 'A Y':
                // WIN 6 + PAPER 2 = 8 points
                score = 8
                roundScores.push(score)
                break;
            case 'A Z':
                // LOSE 0 + SCISSORS 3 = 3 points
                score = 3
                roundScores.push(score)
                break;
            case 'B X':
                // LOSE 0 + ROCK 1 = 1 points
                score = 1
                roundScores.push(score)
                break;
            case 'B Y':
                // DRAW 3 + PAPER 2 = 5 points
                score = 5
                roundScores.push(score)
                break;
            case 'B Z':
                // WIN 6 + SCISSORS 3 = 9 points
                score = 9
                roundScores.push(score)
                break;
            case 'C X':
                // WIN 6 + ROCK 1 = 7 points
                score = 7
                roundScores.push(score)
                break;
            case 'C Y':
                // LOSE 0 + PAPER 2 = 2 points
                score = 2
                roundScores.push(score)
                break;
            case 'C Z':
                // DRAW 3 + SCISSORS 3 = 6 points
                score = 6
                roundScores.push(score)
                break;
        }

    });

    function sumGrades(grades) {
        let sum = 0;
        grades.forEach(function (grade) {
            sum += grade;
        })
        return sum;
    }

    console.log('Total score is ' + sumGrades(roundScores)); // 30
});
