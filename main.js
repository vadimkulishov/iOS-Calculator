let currentInput = "";

function appendNumber(number) {
    currentInput += number.toString();
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    updateDisplay();
}

function appendDroub(droub){
    currentInput += droub;
    updateDisplay();
}

function updateDisplay() {
    const resultElement = document.querySelector('.result');
    resultElement.innerText = currentInput.length > 0 ? currentInput : "0";
}
