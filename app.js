/*SELECTING DINAMIC ELEMENTS*/

const calculator = document.querySelector('.calculator');
const display = document.querySelector('.result');
const keys = calculator.querySelector('.keys');

/*ADDING EVENT LISTENERS*/

keys.addEventListener('click', calculate);


/* DEFINING CONSTANTS IN THE LOCAL SCOPE OF THE CALCULATE FUNCTION*/

function calculate(e){
    //Grabbing button that has been clicked.
    const key = e.target

    //Grabbing inner HTML content of the target button.
    const keyContent = key.textContent;

    //Grabbing displayed number from the result div.
    const displayedNum = display.textContent;

    // Using the data-action attribute to grab the type of operator associated with the button thas has been clicked (stored in key-opertor button). 
    const action = key.dataset.action; 

    // Grabbing the type of key that has been cliked before (data-attribute stored in calculator div);
    const previousKeyType = calculator.dataset.previousKeyType;


/*STATEMENTS*/

    // If the element doesn't have a data-action attribute it must be a number.
    if (!action) {
        if (displayedNum === '0' || previousKeyType === 'operator') {
            display.textContent = keyContent; //> Replacing 0 for clicked number.
        } else {
            display.textContent = displayedNum + keyContent; //> Concadenating numbers.
        }
    }
    if (action == 'decimal') {
        display.textContent = displayedNum + "."; //>Concadenating decimals.
    }
    if (action == 'percentage' ||
        action == 'divide' ||
        action == 'add' ||
        action == 'substract' ||
        action == 'multiply' 
        ) {
        key.classList.add('is-clicked');
        
        //↓ Adding 3 custom data attributes to calculator in order to grab three different values that will be updated every time a user clicks on an operator key.
        
        // Grabbing the type of key that has been clicked in order to tell if an operator key has been clicked.
        calculator.dataset.previousKeyType = 'operator';

        //Same process to grab the number that was displayed previously.
        calculator.dataset.firstValue = displayedNum;
        
        //Same process to grab the operator clicked.
        calculator.dataset.operator = action;
    }
 

    //When a user clicks the equal sign we trigger the make Operation function with 3 parameters.
    if (action === 'calculate') {
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const secondValue = displayedNum;   

        display.textContent = makeOperation(firstValue, operator, secondValue);
    }


/* MAKE OPERATION FUNCTION */

function makeOperation(n1, operator, n2) {
        let result = ''
        let parsed1 = parseFloat(n1);
        let parsed2 = parseFloat(n2);

        if (operator === 'add') {
          result = parsed1 + parsed2
        } else if (operator === 'substract') {
          result = parsed1 - parsed2
        } else if (operator === 'multiply') {
          result = parsed1 * parsed2
        } else if (operator === 'divide') {
          result = parsed1 / parsed2
        } else if (operator == 'percentage') {
            result = parsed1 / 1000;
        }
        
        return result;
      }
}