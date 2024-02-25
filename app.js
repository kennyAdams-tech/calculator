//Calculator program
const display = document.getElementById('display')

//append to display
function appendToDisplay(input) {
    display.value += input
}

//clearDisplay
function clearDisplay() {
  display.value =''
}

//Calculate
function calculate() {
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'Syntax Error'
    }
}