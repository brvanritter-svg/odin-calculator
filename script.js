function add(num1,num2) {
    return num1+num2
}

function subtract(num1,num2) {
    return num1-num2
}

function multiply(num1,num2) {
    num1*num2
}

function divide(num1,num2) {
    num1/num2
}

function operator(num1, operator, num2) {
        
}

function percentage(number){
    return number / 100
}



const mainScreen = document.querySelector('#main-screen');
const buttons = document.querySelectorAll(".button");
const numbers = document.querySelectorAll(".num");
const clear = document.querySelector("#AC");
const rightFunctionButtons = document.querySelectorAll(".right");
const functionButtons = document.querySelectorAll(".func")





rightFunctionButtons.forEach(button => 
    button.addEventListener("click", (element) => {
        element.target.style.backgroundColor = 'white';
        element.target.style.color = 'orange';
}));
/*
buttons.forEach(button => 
    button.addEventListener("mouseleave", (element) => 
        element.target.style.backgroundColor = 'gray'));
*/
let text = '';
numbers.forEach(button => {
    button.addEventListener ("click", (element) => {
        text += button.textContent;
        element.target.style.backgroundColor = '#3b3b3b';
        setTimeout(() => {
            element.target.style.backgroundColor = '#1c1c1c'
        }, 100);

        let textArray = text.split('');

        if (textArray.length <= 12){

            if (mainScreen.textContent == '0' && button.textContent == '0'){
                return [mainScreen.textContent = '0', text = '']}
            else if ( mainScreen.textContent.includes('.') && button.textContent == '.') {
                text = text.slice(0,-1); 
                return [text,console.log(text)]}
            else if (mainScreen.textContent == '0' && button.textContent == '.'){
                return [mainScreen.textContent = '0.', text = '0.'];}
            else return [mainScreen.textContent = text];
            }
    })
})

clear.addEventListener('click',() => {return [mainScreen.textContent = '0', text = '']});

functionButtons.forEach (button => {
    button.addEventListener('click', element => {
        element.target.style.filter = 'brightness(1.4)'
        setTimeout(() => {
            element.target.style.filter = 'brightness(1)'
        }, 100);
        let textArray = mainScreen.textContent.split('');
        textArray = textArray.filter(index => index != ',');
        
        if (button.textContent == '%') {
            textArray = textArray.join('')
            let number = Number(textArray);
            text = percentage(number).toString()
            return [text, mainScreen.textContent = text];
        }
        else if (button.textContent == '+/-') {
            if (mainScreen.textContent.includes('-')) {
                textArray.splice(0,1);
                text = textArray.join('');
                return [text, mainScreen.textContent = text, console.log(text)];
            }else {
                textArray.splice(0,0,'-');
                text = textArray.join('');
                return [text, mainScreen.textContent = text, console.log(text)];
            }
        }

    })
})
