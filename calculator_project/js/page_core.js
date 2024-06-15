//----------------- Constants -------------------------------------------------
const EQUATION = Object.create(equation);
EQUATION.addTerm();

const RESULT = Object.create(operationResult);

let lastAction = 'resetOperation';

//----------------- Helper Functions ------------------------------------------
//for some purposes 0 can´t be considered a valid number (such as - sign handling)
checkIfNumberOnTerm = () => {
    return !EQUATION.getTerm().toString().search(/\d/g) || EQUATION.getTerm() === 0;
}

//----------------- Interface Functions ---------------------------------------
updateDisplay = () => {
    let eq = '';
    if (lastAction === 'addNumber' || lastAction === 'addMinusSign'){
        eq = EQUATION.getTerm(0);
        for (i = 1; i < EQUATION.numberOfTerms(); i++){
            eq += EQUATION.getOperation(i - 1) + EQUATION.getTerm(i);
        }
    } else if (lastAction === 'addOperation'){
        for (i = 0; i < EQUATION.numberOfTerms() - 1; i++){
            eq += EQUATION.getTerm(i) + EQUATION.getOperation(i);
        }
    }
    if (checkIfNumberOnTerm() && EQUATION.isNegative()){
        eq += '-';
    }

    let output = '';
    if (typeof(eq) === typeof(0)) output = eq.toString().replaceAll('+-', '-');
    else output = eq.replaceAll('+-', '-');
    displayOperation.textContent = output;
}

addNumber = (number) => {
    let term = '';
    term = EQUATION.getTerm() + number;
    if (checkIfNumberOnTerm() && EQUATION.isNegative()){
        term = '-' + term;
    }
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

addMinusSign = () => {
    if (lastAction === 'addNumber') addOperation('+');
    if (lastAction !== 'addNumber' && checkIfNumberOnTerm()){
        EQUATION.flipSign();
        lastAction === 'addNumber';
        updateDisplay();
    }
}

removeLastElement = () => {
    let isNegative = EQUATION.isNegative();
    if (lastAction === 'addNumber'){
        let term = '';
        term = EQUATION.getTerm().toString().slice(0, -1);

        if (term.search(/\d/g) === -1) {
            if (EQUATION.numberOfTerms() === 1){
                lastAction = 'resetOperation';
            } else {
                lastAction = 'addOperation';
            }
            EQUATION.removeTerm();
            EQUATION.addTerm();
            if (isNegative) EQUATION.flipSign();
        }
        else EQUATION.modifyTerm(parseFloat(term));
    
    } else if (lastAction === 'addOperation'){
        if (EQUATION.getOperation(EQUATION.numberOfTerms() - 2) !== '+' && isNegative){
            EQUATION.flipSign();
        } else{
            EQUATION.removeTerm();
            lastAction = 'addNumber';
        }
    }
    updateDisplay();
}

resetOperation = () => {
    EQUATION.clear();
    EQUATION.addTerm();
    lastAction = 'resetOperation';
    updateDisplay();
}