//----------------------------------Game constants-----------------------------
const gameWindow = document.querySelector("main");
const gameContainer = document.querySelector("#game-container");

const SPRITES = {
    board: ["", ""],
    apples: "",
    snake:{
        head:"",
        body:"",
        tail:"",
    },
}

const SNAKE = {
    headPosH: 0,
    headPosV: 0,
    size: 2,
    direction:{
        dirH: 1,
        dirV: 1,
    }
}

BOARD_DATA = {
    tileSize: 0,
    width: 0,
    height: 0,
}

//-------------------------------------Helper functions------------------------
function checkIfEven(n){
    if (n % 2 !== 0) {return false;}
    else {return true;}
}

//-------------------------------------Game functions--------------------------
function createBoard(){
    const board = document.createElement("ul");

    let darkBg = false;
    let oposingColor = true;
    let bgColor = "#DFE6DA"; //board color as a placeholder

    for (let j = 0; j < BOARD_DATA.height; j++){    
        const rowTileList = document.createElement("li");
        
        for (let i = 0; i < BOARD_DATA.width; i++){
            const tile = document.createElement("img");
            
            tile.setAttribute("width", `${BOARD_DATA.tileSize}px`);
            tile.setAttribute("height", `${BOARD_DATA.tileSize}px`);
            
            if (darkBg) {bgColor = "#819171";}
            else {bgColor = "#DFE6DA";}

            tile.style["background-color"] = `${bgColor}`;
            tile.setAttribute("id", `tile-${j}-${i}`);

            rowTileList.appendChild(tile);

            darkBg = !darkBg;
        }

        rowTileList.setAttribute("id", `row-${j}`);
        board.appendChild(rowTileList);

        darkBg = oposingColor;
        oposingColor = !oposingColor;
    }

    board.setAttribute("id", "game-board");
    gameContainer.appendChild(board);
}

function setTileSize(gameScreenWidth, gameScreenHeight){
    const width = Math.floor(gameScreenWidth);
    const height = Math.floor(gameScreenHeight);

    let biggestScreenSize = 0;
    if (width > height){
        biggestScreenSize = width;
    } else{
        biggestScreenSize = height;
    }

    //Number 50 (itleNumber) is hard-coded, but should be changed 
    //to give an option to the player regarding optimal boardSize
    BOARD_DATA.tileSize = Math.floor(biggestScreenSize / 50);
    BOARD_DATA.width = Math.floor(width / BOARD_DATA.tileSize);
    BOARD_DATA.height = Math.floor(height / BOARD_DATA.tileSize);
}

function positionSnake(){

}

function changeSnakeDirection(direction){}

function moveSnake(boardWidht, boardHeight){ return false;}

function gameInit(gameScreenWidth, gameScreenHeight){
    setTileSize(gameScreenWidth, gameScreenHeight);
    createBoard();
    positionSnake();
}

function resizeBoard(gameScreenWidth, gameScreenHeight){
    setTileSize(gameScreenWidth, gameScreenHeight);
    console.log(BOARD_DATA.tileSize)
    for (let j = 0; j < BOARD_DATA.height; j++){
        for (let i = 0; i < BOARD_DATA.width; i++){
            const tile = document.querySelector(`#tile-${j}-${i}`);
            tile.setAttribute("width", `${BOARD_DATA.tileSize}px`);
            tile.setAttribute("height", `${BOARD_DATA.tileSize}px`);
        }
    }
}