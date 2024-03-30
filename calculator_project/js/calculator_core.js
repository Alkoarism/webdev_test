//----------------- Constants -------------------------------------------------
const operations = new Map();

operations.set('+', add);
operations.set('-', subtract);
operations.set('x', multiply);
operations.set('/', divide);
operations.set('%', percentage);

const equation = {
    terms: [],
    numberOfTerms: function () {return this.terms.length;},
    addTerm: function (index = -1, term = 0, negation = false) {
        if (index > 0) this.terms.slice(index, 0, [term, '', negation, false]);
        else this.terms.push([term, '', negation, false]);
    },
    addEquation: function (index = -1) {
        if (index > 0) this.terms.slice(index, 0, [Object.create(equation), '', false, true]);
        else this.terms.push([Object.create(equation), '', false, true]);
    },
    removeTerm: function (index = this.numberOfTerms() - 1) {
        if (index < this.numberOfTerms()){
            this.terms.slice(index, 1)
        } else {
            console.log('ERROR:Out_of_Range');
        }
    },
    clear: function () { this.terms.clear(); },
}

const operationResult = {
    value: 0,
    error: '',
}

//----------------- System related functions ----------------------------------
function resolve(text){
}

function solveEquation(equation){
    result = new Object(operationResult);
    result.error = 'ERROR:Not_Solved';

    if (equation.numberOfTerms() === 0){
        result.error = 'ERROR:No_Equation_To_Solve';
        return result;
    }

    if (equation.numberOfTerms() === 1){
        if (equation.terms[0][2]) {
            result.value = equation.terms[0][1];
        } else {
            result.value = -equation.terms[0][0];
        }
        result.error = '';
        return result;
    }

    while (result.error !== ''){
    }
}

function solveOperation(operation){
}

//----------------- Operations ------------------------------------------------
function operate(a, b, operator){
    return operations.get(operator)(a, b);
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    if (a < 0 && b < 0) return a + b;
    else return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function percentage(a, b){
    return (a / 100) * b;
}