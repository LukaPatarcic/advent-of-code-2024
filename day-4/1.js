const fs = require('fs');
const path = require('path')

const grid = fs.readFileSync(path.join(__dirname,'data.txt'), 'utf8').trim().split('\n');
const word = 'XMAS';
const directions = [
    [0, 1],  // right
    [1, 0],  // down
    [1, 1],  // diagonal down-right
    [1, -1], // diagonal down-left
    [0, -1], // left
    [-1, 0], // up
    [-1, 1], // diagonal up-right
    [-1, -1] // diagonal up-left
];

const numRows = grid.length;
const numCols = grid[0].length;
let count = 0;

const isInBounds = (row, col) => row >= 0 && row < numRows && col >= 0 && col < numCols;

for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
        for (let [dr, dc] of directions) {
            let match = true;
            for (let k = 0; k < word.length; k++) {
                const newRow = row + dr * k;
                const newCol = col + dc * k;
                if (!isInBounds(newRow, newCol) || grid[newRow][newCol] !== word[k]) {
                    match = false;
                    break;
                }
            }
            if (match) count++;
        }
    }
}

console.log(count)
