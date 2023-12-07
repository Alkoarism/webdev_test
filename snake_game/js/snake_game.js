const gameWindow = document.querySelector("main");
const gameContainer = document.querySelector("#game-container");

let Snake = {
    posH: 0,
    posV: 0,
    size: 2,
    /*sprites:{
        head:"",
        body:"",
        tail:"",
    },*/
    direction:{
        dirH: 1,
        dirV: 1,
    }
}

function createBoard(width, height){}

function positionSnake(boardWidth, boardHeight){}

function changeSnakeDirection(direction){}

function moveSnake(boardWidht, boardHeight){}

function gameInit(screenWidth, screenHeight){
    createBoard();
    positionSnake();
}

