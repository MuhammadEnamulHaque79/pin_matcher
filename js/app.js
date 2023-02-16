function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }else{
        console.log('pin not found in 4 digits',pin);
       return getPin();
    }
}

function generatePin(){
    
    const randomNumber = Math.round(Math.random()*10000);
    return randomNumber;

}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = generatePin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber  = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
                const digits = previousTypedNumber.split('');
                digits.pop();
                const remainingDigits =digits.join('');
                typedNumberField.value = remainingDigits;

        }
    }
    else{
        // const typedNumberField = document.getElementById('typed-numbers');
        // const previousTypedNumber  = typedNumberField.value;
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
});

document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;
    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;
    
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    if(typedNumber === currentPin){
        
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }else{
        
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
});


