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

//-------------------------------------Helper functions------------------------
function checkIfEven(n){
    if (n % 2 !== 0) {return false;}
    else {return true;}
}


//-------------------------------------Game functions--------------------------
function createBoard(width, height, tileSize){
    const board = document.createElement("ul");

    let darkBg = false;
    let oposingColor = true;
    let bgColor = "#DFE6DA"; //board color as a placeholder

    for (let j = 0; j < height; j++){    
        const rowTileList = document.createElement("li");
        
        for (let i = 0; i < width; i++){
            const tile = document.createElement("img");
            
            tile.setAttribute("width", `${tileSize}px`);
            tile.setAttribute("height", `${tileSize}px`);
            
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

function positionSnake(boardWidth, boardHeight){

}

function changeSnakeDirection(direction){}

function moveSnake(boardWidht, boardHeight){ return false;}

function gameInit(gameScreenWidth, gameScreenHeight){
    const width = Math.floor(gameScreenWidth);
    const height = Math.floor(gameScreenHeight);

    let biggestScreenSize = 0;
    if (width > height){
        biggestScreenSize = width;
    } else{
        biggestScreenSize = height;
    }

    const tileSize = Math.floor(biggestScreenSize / 50);
    const boardWidht = Math.floor(width / tileSize);
    const boardHeight = Math.floor(height / tileSize);
    
    createBoard(boardWidht, boardHeight, tileSize);
    positionSnake(boardWidht, boardHeight);
}

