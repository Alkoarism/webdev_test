//----------------- Constants -------------------------------------------------
const operations = new Map();

operations.set('+', add);
operations.set('-', subtract);
operations.set('*', multiply);
operations.set('/', divide);

//----------------- System related functions ----------------------------------
function operationDecider(a, b, operator){
    if (b === 0 && operator === "/"){
        return NaN;
    }
    return operations.get(operator)(a,b)
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
    return a / b;
}
