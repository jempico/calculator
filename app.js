/*SELECTING DINAMIC ELEMENTS*/

const calculator = document.querySelector('.calculator');
const result = calculator.querySelector('.result');
const keys = calculator.querySelector('.keys');

/*ADDING EVENT LISTENERS*/

keys.addEventListener('click', calculate);

/* DEFINING FUNCTIONS */

function calculate(e){
    const key = e.target
    const keyContent = key.textContent;
    const display = document.querySelector('.result');
    const displayedNum = display.textContent;
    const action = key.dataset.action; 
    const previousKeyType = calculator.dataset.previousKeyType;


/*STATEMENTS*/

    // If the element doesn't have a data-attribute it must be a number.
    if (!action) {

      if (displayedNum === '0') {
          display.textContent = keyContent;
      
      //Displaying second value in the result screen, after an operator button has been clicked.
      } else if (previousKeyType === 'operator') {
          display.textContent = keyContent;
          calculator.dataset.previousKeyType = '';
      }
      //> Concadenating numbers.
        else {
            display.textContent = displayedNum + keyContent; 
        }
    }
    if (action == 'decimal') {
        display.textContent = displayedNum + "."; //>Concadenating decimals.
    }

    if (key.classList[0] === "key-operator") {
      
      // Grabbing the type of key that has been clicked in order to tell if an operator key has been clicked.
      calculator.dataset.previousKeyType = 'operator';
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    
      if (action === 'percentage') {
        display.textContent = parseFloat(displayedNum) / 100;
      }

    }

    if (action === 'calculate') {
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const secondValue = displayedNum;   

        display.textContent = makeOperation(firstValue, operator, secondValue);
    }

    if (action === 'clear') {
      display.textContent = 0;
    }

    if (action === 'sign') {
      if (displayedNum > 0) {
      display.textContent = "-" + displayedNum;
      } 
      if ((displayedNum < 0)) {
        display.textContent =  displayedNum.slice(1, displayedNum.length);
      }
      }
    

/* MAKE OPERATION FUNCTION */

function makeOperation(n1, operator, n2) {
        let parsed1 = parseFloat(n1);
        let parsed2 = parseFloat(n2);

        if (operator === 'add') {
          return parsed1 + parsed2
        } else if (operator === 'substract') {
          return parsed1 - parsed2
        } else if (operator === 'multiply') {
          return parsed1 * parsed2
        } else if (operator === 'divide') {
          return parsed1 / parsed2
        }
      }
    }
