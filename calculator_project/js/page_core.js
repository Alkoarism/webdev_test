//----------------- Constants -------------------------------------------------
const EQUATION = Object.create(equation);
EQUATION.addTerm();

const RESULT = Object.create(operationResult);

let lastAction = 'addNumber';

//----------------- Interface functions ---------------------------------------
updateDisplay = () => {
    let eq = '';
    if (lastAction === 'addNumber'){
        eq = EQUATION.getTerm(0);
        for (i = 1; i < EQUATION.numberOfTerms(); i++){
            eq += EQUATION.getOperation(i - 1) + EQUATION.getTerm(i);
        }
    } else if (lastAction === 'addOperation'){
        for (i = 0; i < EQUATION.numberOfTerms() - 1; i++){
            eq += EQUATION.getTerm(i) + EQUATION.getOperation(i);
        }
    }
    displayOperation.textContent = eq;
}

addNumber = (number) => {
    let term = '';
    term = EQUATION.getTerm() + number;
    EQUATION.modifyTerm(parseFloat(term));
    lastAction = 'addNumber';
    updateDisplay();
}

addOperation = (operation) => {
    if (lastAction === 'addNumber'){
        EQUATION.modifyOperation(operation);
        EQUATION.addTerm();
        lastAction = 'addOperation';
    } else if (lastAction === 'addOperation'){
        EQUATION.modifyOperation(operation, EQUATION.numberOfTerms() - 2);
    }
    updateDisplay();
}

removeLastElement = () => {
    if (lastAction === 'addNumber'){
        let term = '';
        term = EQUATION.getTerm().toString().slice(0, -1);

        if (term === '') {
            if (EQUATION.numberOfTerms() !== 1) lastAction = 'addOperation';
            else {
                lastAction = 'resetOperation';
            }
            EQUATION.removeTerm();
            EQUATION.addTerm();
        }
        else EQUATION.modifyTerm(parseFloat(term));
    
    } else if (lastAction === 'addOperation'){
        EQUATION.removeTerm();
        lastAction = 'addNumber';
    }
    updateDisplay();
}

resetOperation = () => {
    EQUATION.clear();
    EQUATION.addTerm();
    lastAction = 'resetOperation';
    updateDisplay();
}