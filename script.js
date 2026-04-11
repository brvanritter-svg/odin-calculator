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

const buttons = document.querySelectorAll(".button")

buttons.forEach(button => 
    button.addEventListener("mouseenter", (element) => 
        element.target.style.backgroundColor = 'dimgray'))

buttons.forEach(button => 
    button.addEventListener("mouseleave", (element) => 
        element.target.style.backgroundColor = 'gray'))