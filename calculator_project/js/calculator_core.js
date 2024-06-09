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
    addTerm: function (term = 0, operation = '+', index = -1) {
        let unsignedTerm = term;
        let negation = false;
        if (term < 0){
            negation = true;
            unsignedTerm = -term;
        }
        if (index >= 0) this.terms.splice(index, 0, [unsignedTerm, operation, negation]);
        else this.terms.push([unsignedTerm, operation, negation]);
    },
    modifyTerm: function (value, index = this.numberOfTerms() - 1){
        if (value < 0){
            this.terms[index][0] = -value;
            this.terms[index][2] = true;
        } else{
            this.terms[index][0] = value;
            this.terms[index][2] = false;
        }
    },
    modifyOperation: function (operation, index = this.numberOfTerms() - 1){
        this.terms[index][1] = operation;
    },
    removeTerm: function (index = this.numberOfTerms() - 1) {
        if (index < this.numberOfTerms() && index >= 0){
            this.terms.splice(index, 1)
        } else {
            return 'ERROR:Out_of_Range';
        }
    },
    getTerm: function (index = this.numberOfTerms() - 1) {
        if (this.terms[index][2]) {
            return -this.terms[index][0];
        } else {
            return this.terms[index][0];
        }
    },
    getOperation: function (index = this.numberOfTerms() - 1){
        return this.terms[index][1];
    },
    clear: function () { 
        this.terms = [];
    },
}

const operationResult = {
    value: 0,
    error: '',
}

//----------------- System related functions ----------------------------------
function resolve(text){
}

function solveEquation(equation){
    let result = new Object(operationResult);
    result.error = 'ERROR:Not_Solved';

    if (equation.numberOfTerms() === 0){
        result.error = 'ERROR:No_Equation_To_Solve';
        return result;
    }

    //On an equation, we must solve all parenthesis and multiplication first,
    //Thus, there are two loops: one for the above and another for sums and subtractions
    let cnt = 0;
    while (cnt < equation.numberOfTerms() - 1){
        if (equation.terms[cnt][1].match(/\x|\/|\%/g)){
            solveOperation(equation, cnt);
        } else {
            cnt += 1;
        }
    }
    
    cnt = 0;
    while (cnt < equation.numberOfTerms() - 1){
        solveOperation(equation,cnt);
    }

    result.value = equation.getTerm();
    result.error = '';
    equation.removeTerm();
    equation.addTerm();
    return result;
}

function solveOperation(equation, index){
    let value = 0;
    value = operate(
        equation.getTerm(index),
        equation.getTerm(index + 1),
        equation.terms[index][1])
    equation.removeTerm(index);
    equation.modifyTerm(value, index);
}

//----------------- Operations ------------------------------------------------
function operate(a, b, operator){
    return operations.get(operator)(a, b);
}

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

function percentage(a, b){
    return (a / 100) * b;
}