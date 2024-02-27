//----------------- Constants -------------------------------------------------
let displayContent = "";
let memoryNumber = "";
let memoryOperation = "";
let memoryDoneOperation = false;

//----------------- Pagewise JS Code ------------------------------------------
function memoryClean(){
    displayContent = "";
    memoryNumber = "";
    memoryOperation = "";
    memoryDoneOperation = false;
}

function updateDisplay(content){
    switch (content){
        case 'C':
            if (displayContent.length > 1){
                displayContent = displayContent.slice(0, (displayContent.length - 1));
                break;
            }
        case 'CE':
            displayContent = "";
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            memoryNumber = displayContent;
            memoryOperation = content;
            displayContent = "";
            break;
        case '=':
            if (memoryOperation !== ""){
                if (displayContent === "0" && memoryOperation === "/"){
                    displayContent = "Nope!";
                } else{
                    displayContent = operate(
                        Number(memoryNumber),
                        Number(displayContent),
                        memoryOperation);
                }
                    
                memoryDoneOperation = true;
            }
            break;
        default:
            if (memoryDoneOperation){
                memoryClean();
            }
            displayContent += content;
    }

    displayMemoryOperation.textContent = memoryOperation;
    displayMemoryNumber.textContent = memoryNumber;
    displayInput.textContent = displayContent;
}