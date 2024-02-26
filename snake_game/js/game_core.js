//----------------- Game constants and objects --------------------------------
function Entity(type, posY, posX, direction){
    this.type;          //a single type from a predefined list
    this.posY;          //integer
    this.posX;          //integer
    this.direction;     //A two dimensional vector (array)
}

SNAKE_GAME = {
    width: 0,
    height: 0,
    activeEntitys: [],

    initBoard,
    moveSnake,
}

//----------------- Helper functions ------------------------------------------
function checkIfEven(n){
    if (n % 2 !== 0) {return false;}
    else {return true;}
}

//----------------- Game functions --------------------------------------------
function initBoard(width, height){
}

function moveSnake(direction){ 
    return false;
}