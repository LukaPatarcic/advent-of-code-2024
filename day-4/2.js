const fs = require('fs');
const path = require('path');

const grid = fs.readFileSync(path.join(__dirname, 'data.txt'), 'utf8').trim().split('\n');

function countXMas(grid) {
    const height = grid.length;
    const width = grid[0].length;
    let count = 0;

    // Possible patterns in diagonals
    const patterns = ["MAS", "SAM"];

    function isValidXMas(x, y) {
        // Define diagonal directions relative to the center (x, y)
        const diagonals = [
            [[x - 1, y - 1], [x, y], [x + 1, y + 1]], // Top-left to bottom-right
            [[x - 1, y + 1], [x, y], [x + 1, y - 1]], // Top-right to bottom-left
        ];

        // Check both diagonals for matching patterns
        for (const diag1 of diagonals) {
            for (const diag2 of diagonals) {
                if (diag1 === diag2) continue; // Skip the same diagonal comparison
                for (const pattern1 of patterns) {
                    for (const pattern2 of patterns) {
                        // Match patterns for both diagonals
                        const diag1Match = diag1.every(([i, j], index) =>
                            i >= 0 && i < height && j >= 0 && j < width && grid[i][j] === pattern1[index]
                        );
                        const diag2Match = diag2.every(([i, j], index) =>
                            i >= 0 && i < height && j >= 0 && j < width && grid[i][j] === pattern2[index]
                        );

                        if (diag1Match && diag2Match) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j] === 'A' && isValidXMas(i, j)) {
                count++;
            }
        }
    }

    return count;
}

console.log(countXMas(grid));
