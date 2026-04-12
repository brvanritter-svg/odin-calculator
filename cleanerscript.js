const AllButtons = document.querySelectorAll('.button');
const mainScreen = document.querySelector('#main-screen')
const buttonScreen = document.querySelector('#button-screen');
const functionButtons = document.querySelectorAll('.func');
const rightFunctionButtons = document.querySelectorAll('.right');
const numberButtons = document.querySelectorAll ('.num');

let text = mainScreen.textContent;













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


    text += value;
                
    return mainScreen.textContent = text;
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

//Mouse click events
numberButtons.forEach(button => button.addEventListener('click', () => numberInputHandler(button.textContent)))

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




//Keyboard press events

    //number input with keyboard
document.addEventListener('keydown', event => {
    let keys = '1234567890.'
    if (keys.includes(event.key)) {
        numberInputHandler(event.key)
    }
})

    //delete last number with backspace key
document.addEventListener('keydown', event => event.key == 'Backspace' ? removeLast() : null)

