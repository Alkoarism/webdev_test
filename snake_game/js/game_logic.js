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

let Snake = {
    posH: 0,
    posV: 0,
    size: 2,
    direction:{
        dirH: 1,
        dirV: 1,
    }
}

//-------------------------------------Game functions--------------------------
function createBoard(width, height, tileSize){
    const board = document.createElement("ul");
    
    for (let j = 0; j < height; j++){    
        const rowTileList = document.createElement("li");
        
        for (let i = 0; i < width; i++){
            const tile = document.createElement("img");
            
            tile.setAttribute("width", `${tileSize}px`);
            tile.setAttribute("height", `${tileSize}px`);
            
            //tile sprite placeholder random red color:
            tile.style["background-color"] = `#${Math.floor(Math.random() * 255)}0000`;
            tile.setAttribute("id", `tile-${j}-${i}`);

            rowTileList.appendChild(tile);
        }

        rowTileList.setAttribute("id", `row-${j}`);
        board.appendChild(rowTileList);
    }

    board.setAttribute("id", "game-board");
    gameContainer.appendChild(board);
}

function positionSnake(boardWidth, boardHeight){}

function changeSnakeDirection(direction){}

function moveSnake(boardWidht, boardHeight){}

function gameInit(screenWidth, screenHeight){
    createBoard();
    positionSnake();
}

