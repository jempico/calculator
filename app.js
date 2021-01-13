/*SELECTING DINAMIC ELEMENTS*/

const calculator = document.querySelector('.calculator');
const result = calculator.querySelector('.result');
const keys = calculator.querySelector('.keys');

/*ADDING EVENT LISTENERS*/

keys.addEventListener('click', calculate);

/* DEFINING FUNCTIONS */

function calculate(e) {
    let button = e.target;  
    let action = button.dataset.action; //-> Accessing element  custom data attributes (data-*) through the dataset property.
    let displayedNum = result.innerHTML;
    let operation = [];

    if(button.classList[0] == 'number' && operation.length == 0) {
        displayResult(button.innerHTML, displayedNum) 
    } else if(button.classList[0] == 'key-operator') {
        operation.push(displayedNum);
        operation.push(action);
        console.log(operation);
     } else {
        console.log(action);
    }


function displayResult(num, displayedNum){
    //Checking if the displayed number is 0. If then, replace it with the clicked number key.
    if (displayedNum === '0'){
        result.innerHTML = num;
    //Otherwise, append the clicked number key to the displayed number. 
    } else {
        result.innerHTML = displayedNum + num;
    }
}
}