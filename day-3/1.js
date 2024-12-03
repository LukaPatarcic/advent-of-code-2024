const fs = require('fs');
const path = require('path')

const data = fs.readFileSync(path.join(__dirname,'data.txt'), 'utf8').trim();
const regex = new RegExp(/mul\([0-9]{1,3},[0-9]{1,3}\)/g);
const values = [...data.matchAll(regex)];
const sum = values.reduce((total, currentValue) => {
    const [first, second] = currentValue[0].replace('mul(', '').replace(')', '').split(',');
    return Number(first) * Number(second) + total;
}, 0);

console.log(sum)
