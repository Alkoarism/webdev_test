//-------------------------------------Page Constants--------------------------
const mainSection = document.querySelector("main");

//-------------------------------------Page Functions--------------------------
//Real height and width values account for main tag border and margin
const getRealWidth = () => {
    return mainSection.offsetWidth - (2 * 0.01 * mainSection.offsetWidth);
}

const getRealHeight = () => {
    return mainSection.offsetHeight - (2 * 0.03 * mainSection.offsetHeight);
}
//-------------------------------------Page Control----------------------------
gameInit(getRealWidth(), getRealHeight());