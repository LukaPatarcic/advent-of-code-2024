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

const sum = firstArray.reduce((total, currentValue) => {
    const count = secondArray.reduce((totalCount, current) => current === currentValue ? totalCount + 1 : totalCount, 0);
    return currentValue * count + total;
}, 0);

console.log(sum);
