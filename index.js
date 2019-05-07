function cardValidator(numbers){
    let arrNumb = numbers.split('');
    let arrReduce = [];
    if (arrNumb.length >= 12 && arrNumb.length <= 19){
        let x = (numb , i) => {(i % 2 !== 0) ? addOdd(numb , arrReduce) : addEven(numb , arrReduce);};
        arrNumb.forEach(x);

        function addOdd(numb , arrReduce){
            arrReduce.push(parseInt(numb));
        }
    
        function addEven(numb , arrReduce){
            let multip = numb * 2;
            let q = (arrReduce , multip) => {(multip < 9) ? arrReduce.push(multip) : numbGrtrThan10(arrReduce , multip);};
            function numbGrtrThan10(arrReduce , multip){
                multip = multip - 9;
                arrReduce.push(multip);
            }
            return q(arrReduce , multip);
        }
        return (arrReduce.reduce((accumulator , numb) => accumulator + numb) % 10 === 0);
    }
    return false;
}

module.exports.cardValidator = cardValidator;