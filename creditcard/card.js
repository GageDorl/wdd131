document.querySelector('form').addEventListener('submit', submitHandler);

function submitHandler(e){
    e.preventDefault();
    let errorMsg ='';
    displayError('');
    if(isNaN(this.cardNumber.value)){
        errorMsg += 'Card number is not a valid number\n';
    } else if (!isCardNumberValid(this.cardNumber.value)){
        errorMsg += 'Card number is not a valid card number\n';
    }

    if(isCardExpired(this.cardYear.value, this.cardMonth.value)){
        errorMsg += 'Card is expired\n';
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

function isCardExpired(cardYear, cardMonth){
    cardYear = 2000 + parseInt(cardYear);
    cardMonth = parseInt(cardMonth);
    const cardDate = new Date(Date.parse(`${cardYear}, ${cardMonth+1}`));
    cardDate.setDate(cardDate.getDate() - 1);
    const currentDate = new Date();
    return cardDate < currentDate;
}

function displayError(errorMsg){
    document.querySelector('.error').innerText = errorMsg;
}
