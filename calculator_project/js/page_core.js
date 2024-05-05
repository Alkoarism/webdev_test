//----------------- Constants -------------------------------------------------
const EQUATION = Object.create(equation);

const RESULT = Object.create(operationResult);

EQUATION.addTerm(3);
EQUATION.addTerm(3, 'x');
EQUATION.addTerm(5);
EQUATION.addTerm(8, '-');
EQUATION.addTerm(6, '/');
EQUATION.addTerm(-3);
console.log(EQUATION.terms);

//----------------- Interface functions ---------------------------------------
resetOperation = () => {

}

removeLastElement = () => {

}

addNumber = () => {
}

addOperation = () => {
}

addNegativeSign = () => {
}

checkValidity = () => {
}

convertEquationToString = () => {
}