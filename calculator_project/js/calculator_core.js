//----------------- Constants -------------------------------------------------
const operations = new Map();

operations.set('+', add);
operations.set('-', subtract);
operations.set('x', multiply);
operations.set('/', divide);
operations.set('%', percentage);

RESULT = {
    solved: true,
    value: '',
    error: '',
}

//----------------- System related functions ----------------------------------
function resolve(text){
    if (text === ''){RESULT.solved = false;}
    else {RESULT.value = solveEquation(text);}

    if (RESULT.solved){
        return RESULT.value;
    } else{
        RESULT.solved = true;
        return RESULT.error;
    }
}

function solveEquation(equation){
    console.log(solveParenthesis(equation));
    if (equation.split("").reverse().join("").search(/\+|\-|\x|\/|\./g) !== 0){
        return solveOperation(equation);
    } else{
        RESULT.error = 'INVALID';
        RESULT.solved = false;
        return 0;
    }
}

function solveParenthesis(parenthesized){
    const operations = parenthesized.split(')')
        .filter((element) => element.length > 0) //Garble cleaning sppitted from split
        .map((subEquation) => subEquation.split('(')
            .filter((element) => element.length > 0));
    
    let resolved = [];
    operations.forEach((element) => element.map((subElement) => resolved.push(subElement)));

    console.log(operations, resolved)
    return resolved;
}

function solveOperation(operation){
    const negativeCheck = operation[0] === '-'? true : false;
    const orderOfOperations = [/\+|\-/g, /\x|\//g, /\%/g]
    let operatorPos = -1;
    
    const checkForValidity = () => {
        return operatorPos === -1 || (operatorPos === 0 && negativeCheck)
    };
    const checkOperator = () => {return operation[operatorPos];}
    
    orderOfOperations.forEach((op) => {
        if (checkForValidity()){
            if (negativeCheck){
                operatorPos = operation.slice(1).search(op) + 1;
            }
            else {operatorPos = operation.search(op);}
            
            if (checkOperator() === '-'){
                if (operation.search(/\x|\//g) !== -1){operatorPos = -1;}
            }
        }
    });
    
    if (checkForValidity()) {
        return parseFloat(operation);
    }
    
    if (checkOperator() === '%'){
        return operate(
            parseFloat(operation.slice(0, operatorPos)), 
            0, 
            checkOperator());
    }

    if (checkOperator() === '-'){
        return operate(
            solveOperation(operation.slice(0, operatorPos)), 
            solveOperation(operation.slice(operatorPos)),
            '+');
    }

    return operate(
        solveOperation(operation.slice(0, operatorPos)), 
        solveOperation(operation.slice(operatorPos + 1)),
        checkOperator());
}

function operate(a, b, operator){
    if (operator === '%'){ return operations.get(operator)(a);}
    else {return operations.get(operator)(a, b);}
}

//----------------- Operations ------------------------------------------------
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if (b === 0 && operator === "/"){
        return NaN;
    }
    return a / b;
}

function percentage(a){
    return a / 100;
}