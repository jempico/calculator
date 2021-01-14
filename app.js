/*SELECTING DINAMIC ELEMENTS*/

const calculator = document.querySelector('.calculator');
const result = calculator.querySelector('.result');
const keys = calculator.querySelector('.keys');

/*ADDING EVENT LISTENERS*/

keys.addEventListener('click', calculate);

/* DEFINING FUNCTIONS */

function calculate(e){
    const key = e.target
    
    // Using the data-action attribute to determine the type of key that is being clicked. 
    const action = key.dataset.action; 
    const keyContent = key.textContent;
    const display = document.querySelector('.result');
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;


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