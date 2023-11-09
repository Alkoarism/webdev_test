//Page item manipulation script:

const btn = document.querySelector(".thing-doer");
const txt = document.querySelector(".button-guess");

btn.addEventListener("click", updateBtn);

function updateBtn(){
    if (btn.textContent === "Do the thing!"){
        btn.textContent = "Undo the thing";
        txt.textContent = "Oh boy, it's done now. :(";
    } else{
        btn.textContent = "Do the thing!";
        txt.textContent = "Guess what will be done. :)";
    }
}

const inquirer = document.querySelector(".inquirer");

function inquiry(){
    const question = prompt("Would you like a sip of tea?");
    const answer = document.querySelector(".answer");
    if (question === "Yes" || question === "yes"){
        answer.textContent = "Well, helo there dear tea enjoyer.";
    } else{
        answer.textContent = "We do not appreciate your kind here sir.";
    }
}

inquirer.addEventListener("click", inquiry);