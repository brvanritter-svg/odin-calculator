const AllButtons = document.querySelectorAll('.button');
const mainScreen = document.querySelector('#main-screen')
const buttonScreen = document.querySelector('#button-screen');
const functionButtons = document.querySelectorAll('.func');
const rightFunctionButtons = document.querySelectorAll('.right');
const numberButtons = document.querySelectorAll ('.num');

let text = mainScreen.textContent;
let number1 = '';
let number2 = '';
let operator;

function percentage(number) {
    return number / 100;    
}

function negativePositive() {
    textArray = mainScreen.textContent.split('');
    if (textArray[0] == '-') {
        textArray.splice(0,1);
        text = textArray.join("");
        return mainScreen.textContent = text;
    }else {
        textArray.splice(0,0,'-');
        text = textArray.join("");
        return mainScreen.textContent = text;
    }
}

function divide (num1,num2) {
    if(num2 == 0) {
        return "ERROR"
    }
    return num1 / num2
}
function multiply (num1,num2) {
    return num1 * num2
}
function subtract (num1,num2) {
    return num1 - num2 
}
function addition (num1,num2) {
    return num1 + num2
}

function calculate(num1,operator,num2) {
    if (operator == '÷') {
        return divide(num1,num2)
    }else if (operator == '×') {
        return multiply(num1,num2)
    }else if (operator == '-') {
        return subtract(num1,num2)
    }else if (operator == '+') {
        return addition(num1,num2)
    }
}











// Clicking effect for all buttons
AllButtons.forEach(button => 
    {
        button.addEventListener(
            "click", element => {
                button.style.filter = 'brightness(1.4)';
                setTimeout(() => {
                    button.style.filter = 'brightness(1)';
                }, 100);
            }
        )
    }
)

rightFunctionButtons.forEach(button => {
    button.addEventListener('click', element => {
        
        if (button.textContent != '=') {
        button.style.backgroundColor = 'white';
        button.style.color = 'orange';
        }
        let current = button.textContent;
        

        rightFunctionButtons.forEach(button => {
            if (button.textContent != current) {
                button.style.backgroundColor = 'orange';
                button.style.color = 'white';
            }
        })
    })
})


// Button input
function numberInputHandler(value) {
    /*
    Split text into an array then look if the number is 0,
    and there is no decimal point and output doesnt include demical point
    then dont add trailing zero's.
    */

    let textArray = text.split('')
    if (textArray[0] == '0' && value != '.' && !mainScreen.textContent.includes('.')) {
        textArray.splice (0,1);
        text = textArray.join('');
    }

    // Disable decimal point if one is already present.
    if (value == '.' && mainScreen.textContent.includes('.')) {
        return
    }

    if (mainScreen.textContent.includes('-') && textArray[1] == '0' && value!= '.' && textArray[2] != '.') {
        let filteredArray = textArray.filter((element) => element !== '0');
        text = filteredArray.join('');
    }


    text += value;
                
    return mainScreen.textContent = text;
}

function functionButtonsInputHandler(value) {
    value = value.toLowerCase()
    if (value == 'c') {
        text = '0';
        console.log(number1)
        console.log(number2)
        rightFunctionButtons.forEach (button => {button.style.background ='orange'; button.style.color = 'white';})

        return mainScreen.textContent = text;
    }
    if (value == '%') {
        return mainScreen.textContent = percentage(Number(mainScreen.textContent));
    }
    if (value == '+/-'){
        negativePositive();
    }
    
    let operators = '÷×-+'

    if (operators.includes(value)) {
        return [number1 = text, text='',operator = value];
    }else if (value == '=' && number1 != '' ) {
        number2 = text
        number1 = Number(number1);
        number2 = Number(number2);
        final = calculate(number1,operator,number2)
        text = String(final);
        return [mainScreen.textContent = text, text, number1='',number2='', operator ='']
    }
}

// Remove the last input number
function removeLast() {
        textArray = mainScreen.textContent.split('');
        textArray.pop();
        text = textArray.join('');

        // if last number removed return display to 0
        if (textArray.length == 0) {
            text = '0'
            return mainScreen.textContent = text
        }

        return [mainScreen.textContent = text,console.log(textArray)]
}






//**Mouse click events**
numberButtons.forEach(button => button.addEventListener('click', () => {
    numberInputHandler(button.textContent);
    rightFunctionButtons.forEach(button => {button.style.backgroundColor = 'orange'; button.style.color = 'white'})
}));

    //Click-drag delete
mainScreen.addEventListener('mousedown', (event1) =>{
    let startX = event1.clientX;
    document.addEventListener('mouseup', (event2) => {
        let endX = event2.clientX;
        if (startX > endX) {
            removeLast();
        }
    }, {once: true})
})

functionButtons.forEach(button => button.addEventListener('click', () => functionButtonsInputHandler(button.textContent)));





//**Keyboard press events**

    //number input with keyboard
document.addEventListener('keydown', event => {
    let keys = '1234567890.'
    if (keys.includes(event.key)) {
        numberInputHandler(event.key)
    }
})

    //delete last number with backspace key
document.addEventListener('keydown', event => event.key == 'Backspace' ? removeLast() : null)

document.addEventListener('keydown', (event)=> {
    let keys = 'c%'
    if (keys.includes(event.key)) {
        functionButtonsInputHandler(event.key);
    }
})