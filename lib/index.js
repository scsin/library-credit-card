let numbers = [4, 8, 4, 7, 3, 5, 2, 9, 8, 9, 2, 6, 3, 0, 9, 4];
// let numbers = [5, 2, 3, 4, 2, 1, 3, 6, 5, 5, 9, 1, 6, 5, 1, 4];

cardValidator(numbers);

function cardValidator(numbers) {
    if (numbers.length >= 12 && numbers.length <= 19){
        let numbersTimesTwo = numbers.map(number => number*2);
        let position = 0;

        sumOdd();
        sumEven(position, numbersTimesTwo);

        // return numbers.length;
        let result = sumOdd() + sumEven(position, numbersTimesTwo);

        if (result == 100) {
            console.log(true, result);
            return true;
        }
        else {
            console.log(false);
            return false;
        }
    }
    else {
        console.log(0);
        return false;
    }
};

// ÍMPAR
function sumOdd(){
    position = 1;
    let arrOdd = [];
    while (position <= numbers.length){
        arrOdd.push(numbers[position]);
        position += 2;
    }
    let reducerOdd = (accumulator, current) => accumulator+current;
    console.log(arrOdd.reduce(reducerOdd));
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
    console.log(sum + arrGrtrThan10.reduce(reducerOdd));
    return (sum + arrGrtrThan10.reduce(reducerOdd));
};

module.exports.cardValidator = cardValidator;