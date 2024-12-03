const fs = require('fs');
const path = require('path')

const data = fs.readFileSync(path.join(__dirname,'data.txt'), 'utf8').trim();
const regex = new RegExp(/(mul\([0-9]{1,3},[0-9]{1,3}\))|(do\(\))|(don't\(\))/g);
const values = [...data.matchAll(regex)];
let doOrDont = null;

const sum = values.reduce((total, currentValue) => {
    if(currentValue[0].includes('do')) {
        doOrDont = !currentValue[0].includes('don\'t');
        return total;
    }
    const [first, second] = currentValue[0].replace('mul(', '').replace(')', '').split(',');
    const sum = doOrDont === true || doOrDont === null ? Number(first) * Number(second) + total : total;
    return sum;
}, 0);

console.log(sum)
