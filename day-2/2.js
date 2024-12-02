const fs = require('fs');
const path = require('path')

const data = fs.readFileSync(path.join(__dirname,'data.txt'), 'utf8').trim();
const dataArrays = data.split('\n').map((item) => item.split(' ').map((i) => Number(i)));
const sum = dataArrays.reduce((total, currentValue) => {
    let counter = 0;
    let isValid = false;
    while(true) {
        isValid = false;
        let firstType = ''
        const numbers = [...currentValue];
        if(counter > 0) {
            numbers.splice(counter - 1, 1);
        }
        isValid = numbers.every((number, currentIndex) => {
            if(currentIndex === numbers.length - 1) {
                return true;
            }
            if(currentIndex === 0) {
                firstType = number > numbers[currentIndex + 1] ? 'higher' : 'lower';
            }
            return Math.abs(number - numbers[currentIndex + 1]) <= 3
                && (firstType === 'higher'
                    ? number > numbers[currentIndex + 1]
                    : number < numbers[currentIndex + 1]);

        });
        counter += 1;

        if(isValid || counter > currentValue.length) {
            break;
        }
    };

    return isValid ? total + 1 : total;
}, 0);

console.log(sum);
