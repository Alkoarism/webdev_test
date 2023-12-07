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

//-------------------------------------Helper functions------------------------
function checkIfEven(n){
    if (n % 2 !== 0) {return false;}
    else {return true;}
}


//-------------------------------------Game functions--------------------------
function createBoard(width, height, tileSize){
    const board = document.createElement("ul");
    const maxHeight = Math.floor(height / tileSize);
    const maxWidth = Math.floor(width / tileSize);

    let darkBg = false;
    let bgColor = "#DFE6DA";
    for (let j = 0; j < maxHeight; j++){    
        const rowTileList = document.createElement("li");
        
        for (let i = 0; i < maxWidth; i++){
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

        darkBg = !darkBg;
    }

    board.setAttribute("id", "game-board");
    gameContainer.appendChild(board);
}

function positionSnake(boardWidth, boardHeight){}

function changeSnakeDirection(direction){}

function moveSnake(boardWidht, boardHeight){ return false;}

function gameInit(gameScreenWidth, gameScreenHeight){
    let biggestScreenSize = 0;
    if (gameScreenWidth > gameScreenHeight){
        biggestScreenSize = gameScreenWidth;
    } else{
        biggestScreenSize = gameScreenHeight;
    }

    const tileSize = Math.floor(biggestScreenSize / 100);

    createBoard(Math.floor(gameScreenWidth), Math.floor(gameScreenHeight), tileSize);
    positionSnake();
}

