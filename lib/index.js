// let numbers = [4, 8, 4, 7, 3, 5, 2, 9, 8, 9, 2, 6, 3, 0, 9, 4];
// let numbers = '4847352989263094';

// cardValidator(numbers);

function cardValidator(numbers) {
    let arrNumb = numbers.split('');
    if (arrNumb.length >= 12 && arrNumb.length <= 19){
        let numbersTimesTwo = arrNumb.map(number => number*2);
        let position = 0;

        sumOdd(arrNumb);
        sumEven(position, numbersTimesTwo);

        let result = sumOdd(arrNumb) + sumEven(position, numbersTimesTwo);

        if (result == 100) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
};

// ÍMPAR
function sumOdd(arrNumb){
    position = 1;
    let arrOdd = [];
    while (position <= arrNumb.length){
        arrOdd.push(parseInt(arrNumb[position]));
        position += 2;
    }
    let reducerOdd = (accumulator, current) => accumulator+current;
    return arrOdd.reduce(reducerOdd);
};

// PAR
function sumEven(position, numbersTimesTwo) {
    let arrEven = [];
    let arrGrtrThan10 = [];
    let reducerOdd = (accumulator, current) => accumulator+current;
    while (position <= numbersTimesTwo.length - 1){
        arrEven.push(numbersTimesTwo[position]);
        position += 2;
    };
    let sum = arrEven.reduce(reducerOdd);

    arrEven.forEach(element => {
        if (element > 9){
            arrGrtrThan10.push((element%10)+1);
            sum = sum - element;
        }
    });
    return (sum + arrGrtrThan10.reduce(reducerOdd));
};

module.exports.cardValidator = cardValidator;