//----------------- Constants -------------------------------------------------
const operations = new Map();

operations.set('+', add);
operations.set('-', subtract);
operations.set('*', multiply);
operations.set('/', divide);
operations.set('%', percentage);
operations.set('+/-', negative);

//----------------- System related functions ----------------------------------
function solveEquation(equation){
    
}

//----------------- Four function calculator functions ------------------------
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

function negative(a){
    return a * (-1);
}