const validateCreditCard = (creditCardNum) => {

    if (creditCardNum.length !== 16 ) {
        return false;
    }


    let numCard = creditCardNum.split("");

     for (let i = 0; i < numCard.length; i++){

        // console.log(numCard[i], typeof(numCard[i]));
        switch (numCard[i]) {
            case '0': break;
            case '1': break;
            case '2': break;
            case '3': break;
            case '4': break;
            case '5': break;
            case '6': break;
            case '7': break;
            case '8': break;
            case '9': break;
            default: return false;

        }  
   }
    for (let j = 0; j < numCard.length; j++){
        if (j + 1 === numCard.length) {
            return false;
        }
        if (numCard[j] === numCard[j+1]){
            continue;
        } else{
            break;
        }
    }

    let sum = 0 
    for(let i=0; i<numCard.length; i++){
        sum = parseInt(numCard[i]) + sum;
    }
    // console.log(sum / 16);
   
    if (numCard[numCard.length -1] % 2 === 0 && (sum > 16)){
        return true
    } else {
        return false
    }

}


console.log(validateCreditCard('9999777788880000'));
console.log(validateCreditCard('6666666666661666'));
console.log(validateCreditCard('a92332119c011112'));
console.log(validateCreditCard('4444444444444444'));
console.log(validateCreditCard('1111111111111110'));
console.log(validateCreditCard('6666666666666661'));









// /**** tests *****/
// console.log(validateCreditCard('9999-7777-8888-0000')); //{ valid: true, number: '9999-7777-8888-0000' }
// console.log(validateCreditCard('6666-6666-6666-1666')); //{ valid: true, number: '6666-6666-6666-1666' }
// console.log(validateCreditCard('a923-3211-9c01-1112')); //{ valid: false,number: 'a923-3211-9c01-1112',error: '_invalid characters_' }
// console.log(validateCreditCard('4444-4444-4444-4444')); //{ valid: false,number: '4444-4444-4444-4444',error: '_only one type of number_' }
// console.log(validateCreditCard('1211-1111-1111-1112')); //{ valid: true, number: '1211-1111-1111-1112' }




