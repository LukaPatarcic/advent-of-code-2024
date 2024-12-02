const fs = require('fs');
const path = require('path')

const data = fs.readFileSync(path.join(__dirname,'data.txt'), 'utf8').trim();
const dataArrays = data.split('\n').map((item) => item.split(' ').map((i) => Number(i)));
const sum = dataArrays.reduce((total, currentValue) => {
    let firstType = ''
    const isValid = currentValue.every((number, currentIndex) => {
        if(currentIndex === currentValue.length - 1) {
            return true;
        }
        if(currentIndex === 0) {
            firstType = number > currentValue[currentIndex + 1] ? 'higher' : 'lower';
        }
        return Math.abs(number - currentValue[currentIndex + 1]) <= 3
            && (firstType === 'higher'
                ? number > currentValue[currentIndex + 1]
                : number < currentValue[currentIndex + 1]);

    }, false);

    return isValid ? total + 1 : total;
}, 0);

console.log(sum);
