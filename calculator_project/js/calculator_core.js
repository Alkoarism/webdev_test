//----------------- Constants -------------------------------------------------
const operations = new Map();

operations.set('+', add);
operations.set('-', subtract);
operations.set('*', multiply);
operations.set('/', divide);
operations.set('%', percentage);

RESULT = {
    solved: true,
    value: '',
    error: '',
}

//----------------- System related functions ----------------------------------
function resolve(text){
    RESULT.value = solveEquation(text);
    console.log(RESULT.value);

    if (RESULT.solved){
        return RESULT.value;
    } else
        return RESULT.error;
}

function solveEquation(input){
    if (input.search(/\(/) !== -1) { return solveParenthesis(input);}


}

function solveParenthesis(parenthesized){
    
}

function solveOperation(a, b, operator){
    if (operator === '%'){ return operations.get(operator)(a);}
    else {return operations.get(operator)(a, b);}
}


//----------------- Four calculator -------------------------------------------
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