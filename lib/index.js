let numbers = [4, 8, 4, 7, 3, 5, 2, 9, 8, 9, 2, 6, 3, 0, 9, 4];

x(numbers);

function x(numbers) {
    if (numbers.length >= 12 && numbers.length <= 19){
        let numbersTimesTwo = numbers.map(number => number*2);
        let position = 0;

        sumOdd();
        sumEven(position, numbersTimesTwo);

        return numbers.length;
    }
    else {
        console.log(0);
        return 0;
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
    console.log('sumOdd: ' + arrOdd.reduce(reducerOdd));
    return arrOdd.reduce(reducerOdd);
};

// PAR
function sumEven(position, numbersTimesTwo) {
    let arrEven = [];
    let arrGrtrThan10 = [];
    while (position <= numbersTimesTwo.length){
        arrEven.push(numbersTimesTwo[position]);
        position += 2;
    };
    console.log('sumEven: ' + arrEven);
    arrEven.forEach(element => {
        if (element > 9){
            arrGrtrThan10.push(element);
            console.log('maiores q 10: ' + arrGrtrThan10);
            let arrX = [];
            let numbStr = arrX.split('').toString().push(element);
            console.log(parseInt(numbStr));
            // SEPARAR O ELEMENT EM DOIS NÚMEROS
            // SOMAR
            // let reducerOdd = (accumulator, current) => accumulator+current;
        };
    });
};

module.exports.x = x;