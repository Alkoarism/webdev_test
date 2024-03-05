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
    if (equation.search(/\(/) !== -1) { console.log(solveParenthesis(equation));}
    else {return solveOperation(equation);}
}

function solveParenthesis(parenthesized){
    const whatever = parenthesized.split(')')
        .filter((element) => element.length > 0) //Garble cleaning sppitted from split
        .map((subEquation) => subEquation.split('(')
            .filter((element) => element.length > 0));
    
    let resolved = [];
    whatever.forEach((element) => element.map((subElement) => resolved.push(subElement)));

    return resolved;
}

function solveOperation(operation){

    let operatorPos = operation.search(/\x|\/|\+|\-|\%/);
    if (operation[0] === '-' && operation.length > 1){
        operatorPos = operation.slice(1).search(/\x|\/|\+|\-|\%/);
        if (operatorPos !== -1){operatorPos += 1;}
    }
    if (operation[operation.length - 1] === '.'){return '';}
    if (operatorPos === -1){return parseFloat(operation);}
    if (operation[operatorPos] === '%'){
        return operate(
            operation.slice(0, operatorPos), 
            0, 
            operation[operatorPos]);
    }
    if (operatorPos === operation.length - 1 || operatorPos === 0){ return '';}
    if (operation[operatorPos] === '/' && parseFloat(operation.slice(operatorPos + 1)) === 0){
        RESULT.error = 'DIVISION BY 0';
        RESULT.solved = false;
        return 0;
    }

    return operate(
        parseFloat(operation.slice(0, operatorPos)),
        parseFloat(operation.slice(operatorPos + 1)),
        operation[operatorPos]);
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