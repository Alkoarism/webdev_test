//Page item manipulation script:

//JS and HTML communication test
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

//Butotn and conditional testing
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

//Age testing
const ageCheck = document.querySelector(".age-check");
ageCheck.addEventListener("click", ageTesting);

function ageTesting(){
    const result = document.querySelector(".result");
    result.textContent = "Result: ";
    const check = prompt("Enter your age, please");
    const numericalCheck = Number(check);
    console.log(numericalCheck);

    if (!numericalCheck){
        result.textContent += "Enter a valid number, please";
    } else if(numericalCheck < 14 || numericalCheck > 90){
        result.textContent += "You are outside of the allowed age range.";
    } else{
        result.textContent += "You're good to go";
    }
}

//Password checking
const loginButton = document.querySelector(".login button");
loginButton.addEventListener("mouseup", login);

function login(){
    const logName = prompt("Login name:");
    const logOutput = document.querySelector(".log-result");
    logOutput.textContent = "Log Result: ";
    console.log(typeof(logName));

    if(!logName || logName === ""){
        logOutput.textContent += "Canceled";
    } else if(logName === "Admin"){
        const logPassword = prompt("Password:");
        if(!logPassword || logPassword === ""){
            logOutput.textContent += "Canceled";
        } else if(logPassword === "TheMaster") {
            logOutput.textContent += "Welcome!";
        } else{
            logOutput.textContent += "Wrong password";
        }
    } else{
        logOutput.textContent += "I don't know you.";
    }
}

//Anime selection
const select = document.querySelector("select");
const para = document.querySelector(".anime-choice");

select.addEventListener("change", setAnime);

function setAnime(){
    const choice = select.value;
    switch(choice){
        case "naruto":
            para.textContent = "Good show overral, high amounts of filler episodes, but an engaging with and well written story";
            break;
        case "one-piece":
            para.textContent = "Really long series in progress to this day. If you are ready to undertake this journey, it will surely reveal itself as a worthy one.";
            break;
        case "bleach":
            para.textContent = "Got a recente new season progressing through the story. The animation, story, music and graphics are better than ever before.";
            break;
        case "dragon-ball":
            para.textContent = "Is and will forever be a classic. Lost is´s former roots along the way, but a huge sensatino nonetheless.";
            break;
        default:
            para.textContent = "";
    }
}

//Anonnymous function:
const textBox = document.querySelector("#keyboard-detec");
const typed = document.querySelector(".typed");

textBox.addEventListener("keydown", function (event) {
    typed.textContent = `You typed: "${event.key}"`;
})