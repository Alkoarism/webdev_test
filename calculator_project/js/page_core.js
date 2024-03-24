//----------------- Constants -------------------------------------------------
let lastAddedType = 'operator';

//----------------- Interface functions ---------------------------------------
resetOperation = () => {

}

removeLastElement = () => {
    
}

addElement = (element) => {
    let isMinusUnary = false;
    if (element === '-' &&
        EQUATION.operations[EQUATION.numberOfOperations() - 1][1] !== '-' && 
        lastAddedType === 'operator' ){
        
        isMinusUnary = true;
    }

    if (element.match(/\d/g)){
        EQUATION.operations[EQUATION.numberOfOperations() - 1][0] += element;
        lastAddedType = 'number';
    }
    if (element.match(/\+|\x|\/|\-|\%/g) && !isMinusUnary && lastAddedType === 'number'){
        EQUATION.operations[EQUATION.numberOfOperations() - 1][1] += element;
        EQUATION.addOperation();
        lastAddedType = 'operator';
    }

    if (isMinusUnary){
        const value = EQUATION.operations[EQUATION.numberOfOperations() - 1][0];
        EQUATION.operations[EQUATION.numberOfOperations() - 1][0] = element + value;
        lastAddedType = 'unary';
    }

    convertEquationToString();
}

checkValidity = () => {

}

convertEquationToString = () => {
    displayOperation.textContent = '';
    EQUATION.operations.forEach((element) => 
        displayOperation.textContent += element[0] + element[1]);
}