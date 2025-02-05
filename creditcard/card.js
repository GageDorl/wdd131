document.querySelector('form').addEventListener('submit', submitHandler);

function submitHandler(e){
    e.preventDefault();
    let errorMsg ='';
    console.log(this.cardNumber.value);
    displayError('');
    if(isNaN(this.cardNumber.value)){
        errorMsg += 'Card number is not a valid number\n';
    } else if (!isCardNumberValid(this.cardNumber.value)){
        errorMsg += 'Card number is not a valid card number\n';
    }
    if(errorMsg!== ''){
        displayError(errorMsg);
        return false;
    }
    return true;
}

function isCardNumberValid(cardNumber){
    return cardNumber === '1234123412341234';
}

function displayError(errorMsg){
    document.querySelector('.error').innerText = errorMsg;
}
