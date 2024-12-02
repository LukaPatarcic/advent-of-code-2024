const fs = require('fs');
const path = require('path')

const data = fs.readFileSync(path.join(__dirname,'data.txt'), 'utf8').trim();
const firstArray = [];
const secondArray = [];
data.split('\n').forEach((item) => {
    const [first, second] = item.split('  ');
    firstArray.push(Number(first));
    secondArray.push(Number(second));
});
firstArray.sort((a, b) => a - b);
secondArray.sort((a, b) => a - b);
const sum = firstArray.reduce((acc, curr, currentIndex) => {
    return Math.abs(firstArray[currentIndex] - secondArray[currentIndex]) + acc;
}, 0);
console.log(sum);
